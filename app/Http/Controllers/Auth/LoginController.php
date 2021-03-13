<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Auth;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    
    // 
    // protected function validateLogin(Request $request) {        
        
    //     if ( Auth::attempt(['email' => $email, 'password' => $password, 'status' => 1]) ) {
    //         // The user is active, not suspended, and exists.
    //         return redirect()->intended('home');
    //     }
    // }
    

    
    protected function authenticated(Request $request, $user)
    {
        if ($user->status == 1) {
            Auth::logout();
            return redirect()->route('home')
                ->with('Your account was blocked');
            // return redirect()->route('home')
            //                 ->with("OLELELEL");
        }
    }

}



