<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'publisher' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'isbn' => ['required', 'string', 'min:8'],
            'sub_category' => ['required', 'string', 'min:8'],
            'category' => ['required', 'string', 'min:8'],
            'description' => ['required', 'string', 'min:8'],
            'pages' => ['required', 'string', 'min:8'],
        ];
    }
}
