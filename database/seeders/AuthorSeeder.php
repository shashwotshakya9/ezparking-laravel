<?php

namespace Database\Seeders;
use DB;
use Illuminate\Database\Seeder;

class AuthorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('authors')->insert([

            [
                'name' => 'Ben', 
                'image' => '1607409064.jpg',
                'publish' => '1',
            ],
            [
                'name' => 'Ram', 
                'image' => '1606992301.png',
                'publish' => '1',
            ],
        ]);
    }
}
