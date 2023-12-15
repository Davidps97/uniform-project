# Class Diagram
![Alt text](readme-imgs/class-diagram.png)
## In this diagram:

- The main classes are User, Role, and Application.
- The many-to-many relationship between User and Role is represented by the Roles_to_Users class, which acts as an intermediate table.
- The one-to-many relationship between Role and Application is represented by an arrow indicating the direction of the relationship.

# Entity-Relationship Model

This repository contains the description of the entity-relationship model for a database managing users, roles, and applications.

## Table "users"

### Description
The "users" table stores information about the system's users.

### Fields
- **id**: Unique identifier for each user.
- **name**: User's name.
- **email**: User's email address.
- **password**: User's password.

## Table "roles"

### Description
The "roles" table maintains information about the roles available in the system.

### Fields
- **id**: Unique identifier for each role.
- **name**: Role name.

## Table "roles_to_users" (Intermediate Table)

### Description
The intermediate table "roles_to_users" establishes a many-to-many relationship between users and roles.

### Fields
- **user_id**: Foreign key referencing the user.
- **role_id**: Foreign key referencing the role.

## Table "applications"

### Description
The "applications" table represents the applications available in the system.

### Fields
- **id**: Unique identifier for each application.
- **name**: Application name.

## Relationships

- The "users" table has a many-to-many relationship with the "roles" table through the intermediate table "roles_to_users."
- The "applications" table has a one-to-many relationship with the "roles" table.

## Entity-Relationship Diagram
Including a visual diagram representing the relationships between tables will aid in understanding the model.

![Entity-relation-model](readme-imgs/entidad-relacion.png)