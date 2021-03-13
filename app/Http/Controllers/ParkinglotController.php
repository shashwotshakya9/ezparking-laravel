<?php

namespace App\Http\Controllers;
use App\Models\Parkinglot;

use Session;
use Illuminate\Http\Request;

class ParkinglotController extends Controller
{
    function __construct()
    {
         $this->middleware('permission:parkinglot-list|parkinglot-create|parkinglot-edit|parkinglot-delete', ['only' => ['index','show']]);
         $this->middleware('permission:parkinglot-create', ['only' => ['create','store']]);
         $this->middleware('permission:parkinglot-edit', ['only' => ['edit','update']]);
         $this->middleware('permission:parkinglot-delete', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $parkinglots = Parkinglot::latest()->paginate(5);
               
        return view('parkinglot.index',compact('parkinglots'))
            ->with('i', (request()->input('page', 1) - 1) * 5);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $parkinglot = Parkinglot::all();
       
        return view('parkinglot.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        request()->validate([
            'name' => 'required',
            'detail' => 'required',
            'image' => 'nullable',
            'status' => 'nullable', 
        ]);
        
        $parkinglot = new Parkinglot;
        $parkinglot->name = request('name');;
        $parkinglot->status = $request->has('status');
        $parkinglot->detail = request('detail');
        
        if ($request->hasfile('image')){
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename=time() . '.' . $extension;
            $file->move('uploads/parkinglot/', $filename);
            $parkinglot->image=$filename;
        } else{
            // return $request;
            $parkinglot->image= '';
        } 
        
        $parkinglot->save();
        return redirect()->route('parkinglots.index',$parkinglot->id)
        ->with('success','Parking lot created successfully.');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $parkinglot = Parkinglot::find($id);
        return view('parkinglots.show')->withParkinglot($parkinglot);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $parkinglot = Parkinglot::find($id);
        
        return view('parkinglot.edit')->withParkinglot($parkinglot);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        request()->validate([
            'name' => 'required',
            'detail' => 'required',
            'image'=>'nullable',
            'status'=>'nullable',
        ]);
       
        $parkinglot=Parkinglot::find($id);
        $parkinglot->name=$request->input('name');
        $parkinglot->status = $request->has('status');
        $parkinglot->detail = request('detail');

        if (request()->hasFile('image') && request('image') != '') {
            $imagePath = public_path('uploads/parkinglot/'.$parkinglot->image);
            if(Parkinglot::exists($imagePath)){
                unlink($imagePath);
            }
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();
            $filename=time() . '.' . $extension;
            $file->move('uploads/parkinglot/', $filename);
            $parkinglot->image=$filename;
            $parkinglot->update();
        }
                 
        $parkinglot->update();
        
        return redirect()->route('parkinglots.index',$parkinglot->id)
                        ->with('success','Parking details updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $parkinglot = Parkinglot::find($id);
        $parkinglot->delete();
        
        return redirect()->route('parkinglots.index')
                        ->with('success','Parking lot deleted successfully');
    }
}
