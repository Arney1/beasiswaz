<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Beasiswa;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class BeasiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::all();
        $beasiswa = Beasiswa::all();
        return Inertia::render('Admin/Dashboard', [
            'beasiswa' => $beasiswa,
            'user' => $user,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $beasiswa = new Beasiswa();



        $fileName = time() . '.' . $request->file->extension();

        $request->file->move(public_path('docs'), $fileName);

        $beasiswa->nim = $request->nim;
        $beasiswa->nama = $request->nama;
        $beasiswa->email = $request->email;
        $beasiswa->nohp = $request->nohp;
        $beasiswa->semester = $request->semester;
        $beasiswa->ipk = $request->ipk;
        $beasiswa->pilihan = $request->pilihan;
        $beasiswa->berkas = $fileName;
        $beasiswa->status = "belum";
        $beasiswa->save();
        return redirect()->to('hasil')->with('message', 'Anda berhasil mendaftar');
    }

    /**
     * Display the specified resource.
     */
    public function show(Beasiswa $beasiswa)
    {
        $myBeasiswa = $beasiswa::where("nim", auth()->user()->nim)->get();
        return Inertia::render('Hasil', [
            'myBeasiswa' => $myBeasiswa
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Beasiswa $beasiswa, Request $request)
    {
        return Inertia::render('Admin/Verifikasi', [
            'myBeasiswa' => $beasiswa->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Beasiswa $beasiswa)
    {
        $beasiswa::where('id', $request->id)->update([
            'status' => $request->status
        ]);
        return to_route('admin.dashboard')->with('message', 'Update berhasil');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Beasiswa $beasiswa, Request $request)
    {
        $file = $beasiswa::where('id',$request->id)->value('berkas');

        $image_path = public_path("docs/" . $file);

        unlink($image_path);

        // return redirect()->back();
        
        // Storage::delete("$file");
        $del = $beasiswa::find($request->id);
        $del->delete();
        return redirect()->back()->with('message', 'Data berhasil dihapus');
    }
}
