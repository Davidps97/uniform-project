<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Roles;
use Illuminate\Http\Request;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Roles::all();
        return $roles;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $role = new Roles();
        $role->name = $request->name;

        $role->save();
    }

    /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        $role = Roles::find($id);
        return $role;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $role = Roles::findOrFail($request->id);
        $role->name = $request->name;

        $role->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $role = Roles::destroy($id);
        return $role;
    }
}
