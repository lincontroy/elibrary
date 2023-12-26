<?php

namespace App\Http\Resources;
use App\Models\BookLoans;
use App\Models\Books;
use App\Models\User;


use Illuminate\Http\Resources\Json\JsonResource;

class BookLoanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $bookId = $this->book_id;
        $book = Books::find($bookId);
        $userId=$this->user_id;
        $user=User::find($userId);

// Check if the book was found
        if ($book) {
            // Access the name of the book
            $bookName = $book->name;
        }else{
            $bookName = "Book not found";
        }

        if($user){
            $userName = $user->name;
        }else{
            $userName = "User not found";
        }

        if($this->status==0){
            $status="Not returned";
        }else{
            $status="Book returned";
        }

        return [
            'id'   => $this->id,
            'book_id' => $bookName,
            'user_id' => $userName,
            'loan_date' => $this->loan_date,
            'due_date' => $this->due_date,
            'status' => $status,
            'created_at' => $this->created_at->toDateString()
        ];
    }
}
