@extends('layouts.apps')


@section('content')
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Edit Lot</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('parkinglots.index') }}"> Back</a>
            </div>
        </div>
    </div>


    @if ($errors->any())
        <div class="alert alert-danger">
            <strong>Whoops!</strong> There were some problems with your input.<br><br>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif


    <form action="{{ url('updateparkinglots',$parkinglot->id) }}" method="POST" enctype="multipart/form-data">
    	@csrf
        @method('PUT')

        {{-- <input type="hidden" name="id" value="{{ $post->id }}" id="id"> --}}
         <div class="row">
		    <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>Name:</strong>
		            <input type="text" name="name" value="{{ $parkinglot->name }}" class="form-control" placeholder="Name">
		        </div>
            </div>
            {{-- <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group">
                    <strong>Category:</strong><br>                    
			        {{ Form::select('categories[]', $categories, null, ['class' => 'form-control select2-multi', 'multiple' => 'multiple']) }}
                    
                </div>
            </div> --}}
            <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>Status:</strong>
                    {!! Form::checkbox('status', '0', array('class' => 'form-control')) !!}
                    {{-- <input type="hidden" value="0" name="publish" class="switch-input">                            --}}
                    {{-- <input type="checkbox" name="publish" class="switch-input" value="1" {{ old('publish') ? 'checked="checked"' : '' }}/> --}}
                   
		        </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group">
                    <strong>Change Image:</strong>
                    <input id="image" type="file" value="{{ $parkinglot->image }}" name="image" class="btn-success"><br><br>
                    <strong>Current Image:</strong><br>
                <img src="{{ url('uploads/parkinglot/'.$parkinglot->image) }}" alt="image" width="300px;" height="300px;" alt="image" />
                </div>
            </div>

            {{-- <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">    
                {{ Form::label('author_id', 'Author:') }}
                    <select class="form-control" name="author_id">
                        @foreach($authors as $author)
                            <option value='{{ $author->id }}'>{{ $author->name }}</option>
                        @endforeach
                    </select>
                </div>
            </div> --}}
		    <div class="col-xs-12 col-sm-12 col-md-12">
		        <div class="form-group">
		            <strong>Details:</strong>
		            <textarea class="form-control detail" style="height:150px" id="detail" name="detail" placeholder="Enter Content">{{ $parkinglot->detail }}</textarea>
		        </div>
            </div>
            
		    <div class="col-xs-12 col-sm-12 col-md-12 text-center">
		      <button type="submit" class="btn btn-primary">Submit</button>
		    </div>
		</div>


    </form>

    <script type="text/javascript" src="{{ URL::asset('js/select2.min.js') }}"></script>
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
        var content=tinymce.activeEditor.getContent('detail');
        console.log(content);
    </script>

@endsection
