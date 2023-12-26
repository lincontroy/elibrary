<?php

namespace App\Http\Controllers\Api;

use Auth;
use Carbon\Carbon;
use App\Models\BookLoans;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\BookLoanResource;

class BookLoansController extends Controller
{
   /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        //
        $orderColumn = request('order_column', 'created_at');
        if (!in_array($orderColumn, ['id', 'name', 'created_at'])) {
            $orderColumn = 'created_at';
        }
        $orderDirection = request('order_direction', 'desc');
        if (!in_array($orderDirection, ['asc', 'desc'])) {
            $orderDirection = 'desc';
        }
        $bookLoans = BookLoans::
        when(request('search_id'), function ($query) {
            $query->where('id', request('search_id'));
        })
            ->when(request('search_title'), function ($query) {
                $query->where('name', 'like', '%'.request('search_title').'%');
            })
            ->when(request('search_global'), function ($query) {
                $query->where(function($q) {
                    $q->where('id', request('search_global'))
                        ->orWhere('name', 'like', '%'.request('search_global').'%');

                });
            })
            ->orderBy($orderColumn, $orderDirection)
            ->paginate(50);


        // $bookLoans = BookLoans::all()->paginate(50);
        return BookLoanResource::collection($bookLoans);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        // dd($request);

        $bookLoan=new BookLoans();
        $bookLoan->user_id=$request->username;
        $bookLoan->book_id=$request->bookname;
        $bookLoan->loan_date=$request->loandate;
        //calculate the return date based on the number of days
        $duedate = Carbon::createFromFormat('Y-m-d', $request->loandate);
        $duedate->addDays($request->days);
        $bookLoan->status=0;
        $bookLoan->due_date=$duedate;
        $bookLoan->added_by=Auth::user()->id;
        $bookLoan->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Books $books)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Books $books)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BookLoans $BookLoans)
    {
        //
  

        $loanid=$request->id;
        BookLoans::where('id',$loanid)->update(['status'=>1,'return_date'=>Carbon::now()]);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Books $book)
    {
        //
        $this->authorize('user-delete');
        $book->delete();

        return response()->noContent();
    }
}
