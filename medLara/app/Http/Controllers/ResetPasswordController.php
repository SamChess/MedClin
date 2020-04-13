<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;
use App\Mail\ResetPasswordMail;
use Illuminate\Support\Str;
Use \DB;
use Carbon\Carbon;



class ResetPasswordController extends Controller
{
    public function sendEmail(Request $request){

        if(!$this->validateEmail($request->email)){

            return $this->failedResponse();
        }
        $this->send($request->email);

    }
    public function send($email){
        
        $token = $this -> createToken($email);
       Mail::to($email)->send(new ResetPasswordMail($token));  
    }

    public function createToken($email){

        $oldToken = DB::table('password_resets')->where('email',$email)->first();

        if($oldToken){

            return $oldToken;
        }

        $token = Str::random(60);
        $this -> saveToken($token,$email);

        return $token;
    }

    public function saveToken($token,$email){

       DB::table('password_resets')-> insert([

          'email' => $email,
          'token' => $token,
          'created_at' => Carbon::now()

       ]);

    }

    public function validateEmail($email){

        return !! User::where('email',$email)->first();

    }

    public function failedResponse(){
        return response()->json([

            'error'=>'Email is not found on our End'

        ], Response:: HTTP_NOT_FOUND);

    }
    public function sucessResponse(){
        return response()->json([

            'data'=>'Please check your Email,reset Email sent successfully'

        ], Response:: HTTP_OK);

    }
}
