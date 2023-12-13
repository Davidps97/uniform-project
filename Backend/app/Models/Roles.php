<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    // Relación muchos a muchos con el modelo User
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
