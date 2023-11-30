<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Casts\Attribute;

class Beasiswa extends Model
{
    use HasFactory;

    /**

     * The attributes that are mass assignable.

     *

     * @var array

     */

    protected $fillable = [

        'nim', 'nama',
        'email',
        'nohp',
        'semester',
        'ipk',
        'pilihan',
        'berkas',
        'status'

    ];



    /**

     * Get the user's first name.

     *

     * @return \Illuminate\Database\Eloquent\Casts\Attribute

     */

    protected function name(): Attribute

    {

        return Attribute::make(

            get: fn ($value) => url('docs/' . $value),

        );
    }
}
