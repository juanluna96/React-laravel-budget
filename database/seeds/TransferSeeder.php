<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TransferSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('transfers')->insert([
            [
                'description' => 'Salary', 'amount' => '4800', 'wallet_id' => 1, 'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'description' => 'Salary', 'amount' => '4800', 'wallet_id' => 1, 'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
            [
                'description' => 'Salary', 'amount' => '4800', 'wallet_id' => 1, 'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ],
        ]);
    }
}
