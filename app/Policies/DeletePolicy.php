<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DeletePolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    public function delete(User $user, Post $post)
    {
        // return $user->id === Session::get($user)
        //         ? Response::allow()
        //         : Response::deny('You cannot delete own account.');
    }
}
