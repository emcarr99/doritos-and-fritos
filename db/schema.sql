-- TODO employee database
-- TODO department table: id (INT), name (VARCHAR 30)
-- TODO role table: id (INT), title (VARCHAR 30), salary (decimal), department_id (INT)
-- TODO employee table: id (INT), first_name (VARCHAR 30), last_name (VARCHAR 30), role_id (INT), manager_id (INT)
-- only use drop in a school setting (always get confirmation to drop or delete in a work setting)
DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);


CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary INT NOT NULL,
  department_id INT NOT NULL,
  INDEX dep_index (department_id).
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id),
  foreign key manager_id references employee(id)
);


