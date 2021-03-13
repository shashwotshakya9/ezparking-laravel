@extends('layouts.app')


@section('content')
<div class="row">
    <div class="col-lg-12 margin-tb">
        <div class="pull-left">
            <h2>Users Management</h2>
        </div>
        <div class="pull-right">
            <a class="btn btn-success" href="{{ route('users.create') }}"> Create New User</a>
        </div>
    </div>
</div><br>


@if ($message = Session::get('success'))
<div class="alert alert-success">
  <p>{{ $message }}</p>
</div>
@endif


<table class="table table-bordered">
  <thead class="thead-dark" >
 <tr>
   <th>No</th>
   <th>Name</th>
   <th>Email</th>
   <th>Image</th>
   <th>Status</th>
   <th>Roles</th>
   <th width="280px">Action</th>
 </tr>
  </thead>
 @foreach ($data as $key => $user)
  <tr>
    <td>{{ ++$i }}</td>
    <td>{{ $user->name }}</td>
    <td>{{ $user->email }}</td>
    <td><img src="{{ url('uploads/user/'.$user->image) }}" alt="image" width="100px;" height="100px;" alt="image" /></td>
    <td>
      @if ($user->status == 1)
      <label class="badge badge-danger">Deactivated</label>
      @else 
      <label class="badge badge-success">Activated</label>
      @endif</td>
    <td>
      @if(!empty($user->getRoleNames()))
        @foreach($user->getRoleNames() as $v)
           <label class="badge badge-success">{{ $v }}</label>
        @endforeach
      @endif
    </td>
    <td>      
         
       @can('user-edit')
       <a class="btn btn-warning" href="{{ route('users.edit',$user->id) }}"><i class='far fa-edit' style='font-size:18px'></i></a>
       @endcan
       @can('user-delete')
       @if(Auth::user('email') != ($user->email))        
        {!! Form::open(['method' => 'DELETE','route' => ['users.destroy', $user->id],'style'=>'display:inline']) !!}        
        <button class="btn btn-warning" type="submit"><i class='fas fa-trash' style='font-size:18px'></i></button>
        {!! Form::close() !!}   
        @endif 
        @endcan
        
        
      </td>
  </tr>
 @endforeach
</table>


{{-- {!! $data->render() !!} --}}



@endsection