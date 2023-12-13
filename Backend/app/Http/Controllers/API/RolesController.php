<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Roles;
use App\Models\User;
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
    public function show($id)
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

    public function assignedRoles(Request $request)
    {
        $user = $request->user();

        $assignedRoles = $user->roles;

        return response()->json(['assigned_roles' => $assignedRoles]);
    }

    public function assignRoleToUser(Request $request)
    {
        $userId = $request->input('userId');
        $roleId = $request->input('roleId');

        $user = User::find($userId);
        $role = Roles::find($roleId);

        $user->roles()->attach($role);

        return response()->json(['message' => 'Rol asignado correctamente']);
    }

    public function removeRole($userId, $roleId)
    {
        $user = User::findOrFail($userId);
        $user->roles()->detach($roleId);

        return response()->json(['message' => 'Rol retirado correctamente']);
    }

    public function editUserRoles(Request $request, $roleId, $userId)
    {
        $user = User::findOrFail($userId);
        $newRoleIds = $request->input('roleId', []);

        // Sincronizar los nuevos roles del usuario
        $user->roles()->sync($newRoleIds);

        return response()->json(['message' => 'Roles del usuario editados correctamente']);
    }
}
