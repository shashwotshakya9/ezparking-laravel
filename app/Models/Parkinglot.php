<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parkinglot extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'detail', 'image','status',
    ];
    protected $casts = [
        'status' => 'boolean',        
    ];
}
