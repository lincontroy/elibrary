<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Books;
use App\Models\User;
use App\Models\BookLoans;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function totalBoooks(){

        $total_books=Books::sum('quantity');

        return [
            'total_books'=>$total_books
        ];

    }
    public function totalUsers(){

        $total_users=User::count();

        return [
            'total_users'=>$total_users
        ];

    }

    public function totalLoans(){

        $total_loans=BookLoans::where('status',0)->count();

        return [
            'total_loans'=>$total_loans
        ];

    }
}
