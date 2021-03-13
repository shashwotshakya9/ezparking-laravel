@extends('layouts.app')


@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2> Show Lots</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('parkinglots.index') }}"> Back</a>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Name:</strong><br>
                {{ $parkinglot->name }}
            </div>
        </div>
        <div class="container">
            <strong>Image:</strong><br>
            <img src="{{ url('uploads/parkinglot/'.$parkinglot->image) }}" alt="image" width="500px;" height="400px;" alt="image" /> 
        </div>
        {{-- <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Author:</strong>
                <div id="data-container">{{ $post->author->name }}</div>
            </div>
            
        </div> --}}
        {{-- <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Categories:</strong><br>
                @foreach($post->categories as $category)
                <span>{{ $category->name }}<br></span>
                @endforeach
            </div>
            
        </div> --}}
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Detail:</strong>
                <div id="data-container">{!! $parkinglot->detail !!}</div>
            </div>
            
        </div>
    </div>
@endsection
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