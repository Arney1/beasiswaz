<?php

use App\Http\Controllers\BeasiswaController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Models\Beasiswa;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/hasil', [BeasiswaController::class, 'show'])->middleware(['auth', 'verified'])->name('hasil');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';

Route::get('/admin/dashboard', [BeasiswaController::class, 'index'])->middleware(['auth:admin', 'verified'])->name('admin.dashboard');

require __DIR__.'/adminauth.php';

Route::get('/beasiswa/edit', [BeasiswaController::class, 'edit'])->middleware(['auth:admin', 'verified'])->name('beasiswa.edit');
Route::post('/beasiswa/update', [BeasiswaController::class, 'update'])->middleware(['auth:admin', 'verified'])->name('beasiswa.update');
Route::post('/beasiswa/delete', [BeasiswaController::class, 'destroy'])->middleware(['auth:admin', 'verified'])->name('beasiswa.delete');

Route::post('/beasiswa', [BeasiswaController::class, 'store'])->middleware(['auth', 'verified'])->name('beasiswa.add');

Route::get('/admin/mahasiswa', [UserController::class, 'add'])->middleware(['auth:admin', 'verified'])->name('siswa.addpage');
Route::post('/admin/mahasiswa/add', [UserController::class, 'store'])->middleware(['auth:admin', 'verified'])->name('siswa.add');
Route::get('/admin/mahasiswa/edit', [UserController::class, 'edit'])->middleware(['auth:admin', 'verified'])->name('siswa.edit');
Route::post('/admin/mahasiswa/update', [UserController::class, 'update'])->middleware(['auth:admin', 'verified'])->name('siswa.update');
Route::post('/admin/mahasiswa/delete', [UserController::class, 'destroy'])->middleware(['auth:admin', 'verified'])->name('siswa.delete');


Route::get('/daftar', function () {
    return Inertia::render('Daftar');
})->middleware(['auth', 'verified'])->name('daftar');