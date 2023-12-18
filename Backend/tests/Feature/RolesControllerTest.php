<?php

namespace Tests\Feature;

use App\Models\Roles;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RolesControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_list_roles()
    {
        // Crear algunos roles ficticios en la base de datos
        Roles::factory(3)->create();

        // Realiza una solicitud HTTP para obtener la lista de roles
        $response = $this->get('/api/roles');

        // Verifica que la solicitud haya sido exitosa (código de estado 200)
        $response->assertStatus(200);

        // Verifica que la respuesta contenga la cantidad correcta de roles
        $response->assertJsonCount(3);
    }

    public function test_can_show_existing_role()
    {
        // Crear un rol ficticio en la base de datos
        $role = Roles::factory()->create();

        // Realiza una solicitud HTTP para obtener un rol específico
        $response = $this->get("/api/roles/{$role->id}");

        // Verifica que la solicitud haya sido exitosa (código de estado 200)
        $response->assertStatus(200);

        // Verifica que la respuesta contenga los datos correctos del rol
        $response->assertJson([
            'id' => $role->id,
            'name' => $role->name,
        ]);
    }

    public function test_cannot_show_nonexistent_role()
    {
        // Intenta acceder a un rol que no existe en la base de datos
        $response = $this->get('/api/roles/999');

        // Verifica que la solicitud devuelva un código de estado 404 (Not Found)
        $response->assertStatus(404);
    }

    public function test_can_create_role()
    {
        // Realiza una solicitud HTTP para crear un nuevo rol con datos válidos
        $response = $this->post('/api/roles', ['name' => 'Nuevo Rol']);

        // Verifica que la solicitud haya sido exitosa (código de estado 201 - Created)
        $response->assertStatus(201);

        // Verifica que la respuesta contenga los datos correctos del nuevo rol
        $response->assertJson([
            'name' => 'Nuevo Rol',
        ]);
    }

    public function test_cannot_create_role_with_invalid_data()
    {
        // Intenta crear un nuevo rol con datos incorrectos (sin nombre)
        $response = $this->post('/api/roles', []);

        // Verifica que la solicitud devuelva un código de estado 422 (Unprocessable Entity)
        $response->assertStatus(422);
    }
}