<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:passport')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::resource('users', UserController::class);

use App\Http\Controllers\API\RegisterController;

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);

use App\Http\Controllers\API\RolesController;

Route::controller(RolesController::class)->group(function () {
    Route::get('/roles', 'index');
    Route::post('/roles', 'store');
    Route::get('/roles/{id}', 'show');    
    Route::put('/roles/{id}', 'update');
    Route::delete('/roles/{id}', 'destroy');

    //endpoints assigned roles
    Route::get('/roles/assign/{id}', 'assignedRoles');
    Route::post('/roles/assign', 'assignRoleToUser');
    Route::delete('/roles/assign/{roleId}/{userId}', 'removeRole');
    Route::put('/roles/assign/{roleId}/{userId}', 'editUserRoles');
});

use App\Http\Controllers\API\ApplicationController;

Route::controller(ApplicationController::class)->group(function (){
    Route::get('/applications', 'index');
    Route::post('/applications', 'store');
    Route::get('/applications/{id}', 'show');    
    Route::put('/applications/{id}', 'update');
    Route::delete('/applications/{id}', 'destroy');
});