<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Beasiswa;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'nim' => 'required|unique:' . User::class,
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', Rules\Password::defaults()],
        ]);

        $user = new User();
        $user->nim = $request->nim;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->nohp = $request->nohp;
        $user->ipk = $request->ipk;
        $user->password = Hash::make($request->password);
        $user->save();
        return redirect()->back()->with('message', 'Siswa berhasil ditambah');
    }
    public function add(Request $request)
    {
        return Inertia::render('Admin/TambahSiswa', []);
    }
    public function edit(User $user, Request $request)
    {
        return Inertia::render('Admin/EditSiswa', [
            'myUser' => $user->find($request->id)
        ]);
    }
    public function update(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'nim' => 'required',
            'email' => 'required|string|lowercase|email|max:255',
            'password' => ['required', Rules\Password::defaults()],
        ]);
        
        $user::where('id', $request->id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'nim' => $request->nim,
            'nohp' => $request->nohp,
            'ipk' => $request->ipk,
            'password' => Hash::make($request->password),
        ]);
        return to_route('admin.dashboard')->with('message', 'Data berhasil diupdate');
    }

    public function destroy(User $user, Request $request)
    {
       
        $del = $user::find($request->id);
        $del->delete();
        return redirect()->back()->with('message', 'Data berhasil dihapus');
    }
}
