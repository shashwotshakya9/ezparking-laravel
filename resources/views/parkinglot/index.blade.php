@extends('layouts.app')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Parking Lots</h2>
            </div>
            <div class="pull-right">
                @can('post-create')
                <a class="btn btn-success" href="{{ route('parkinglots.create') }}"> Create New Lot</a>
                @endcan
            </div>
        </div>
    </div><br>


    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif


    <table class="table table-bordered">
        <thead class="thead-dark">
        <tr>
            <th>ID</th>
            <th>Name</th>
            {{-- <th>Category</th>
            <th>Author</th> --}}
            <th>Details</th>
            <th>Images</th>
            <th>Status</th>
            <th width="280px">Action</th>
        </tr>
        </thead>
	    @foreach ($parkinglots as $parkinglot )
	    <tr>
	        <td>{{ ++$i }}</td>
            <td>{{ $parkinglot->name }}</td>
            {{-- <td>@foreach($post->categories as $category)
                <span>{{ $category->name }}<br></span>
                @endforeach
            </td>            
            <td>{{ $post->author->name }}</td>  --}}
            <td>{!! substr($parkinglot->detail, 0,  200)   !!}</td>
            <td><img src="{{ url('uploads/parkinglot/'.$parkinglot->image) }}" alt="image" width="100px;" height="100px;" alt="image" /> </td>
            <td>
                @if ($parkinglot->status == 1)
                <label class="badge badge-success">Activated</label>
                @else 
                <label class="badge badge-danger">Deactivated</label>
                @endif</td>
            
            <td>
                <form action="{{ route('parkinglots.destroy',$parkinglot->id) }}" method="POST">
                    {{-- <a class="btn btn-info" href="{{ route('parkinglots.show',$parkinglot->id) }}">Show</a> --}}
                    @can('parkinglot-edit')
                    <a class="btn btn-warning" href="{{ route('parkinglots.edit',$parkinglot->id) }}"><i class='far fa-edit' style='font-size:18px'></i></a>
                    @endcan
                    @csrf
                    @method('DELETE')
                    @can('parkinglot-delete')
                    <button type="submit" class="btn btn-warning"><i class='fas fa-trash' style='font-size:18px'></i></button>
                    @endcan   
                </form>
	        </td>
	    </tr>
	    @endforeach
    </table>
    {!! $parkinglots->links() !!}
    {{-- {!! $categories->links() !!} --}}
    <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>  
    <script type="text/javascript">
        tinymce.init({
            selector: 'textarea.detail',
            height: 400,
            menubar: false,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
            content_css: '//www.tiny.cloud/css/codepen.min.css'
        });
    </script>
    
    <script>
        // var content=tinymce.activeEditor.getContent('detail');
        // console.log(content);
        tinyMCE.get('detail').getContent();
    </script>
@endsection