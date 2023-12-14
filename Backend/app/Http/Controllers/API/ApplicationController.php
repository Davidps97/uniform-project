<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Applications;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    public function index()
    {
        $applications = Applications::all();
        return $applications;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $applications = new Applications();
        $applications->name = $request->name;

        $applications->save();
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $applications = Applications::find($id);
        return $applications;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $applications = Applications::findOrFail($request->id);
        $applications->name = $request->name;

        $applications->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $applications = Applications::destroy($id);
        return $applications;
    }
}
