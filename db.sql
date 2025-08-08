DROP DATABASE IF EXISTS DB_renta_vehiculos_jc;
CREATE DATABASE DB_renta_vehiculos_jc;
USE DB_renta_vehiculos_jc;

-- Tabla de clientes
CREATE TABLE td_cliente_jc (
  id_cliente_jc      INT AUTO_INCREMENT PRIMARY KEY,
  nombre_jc          VARCHAR(100) NOT NULL
);

-- Tabla de vehículos
CREATE TABLE td_vehiculo_jc (
  id_vehiculo_jc     INT AUTO_INCREMENT PRIMARY KEY,
  modelo_jc          VARCHAR(100) NOT NULL
);

-- Tabla principal: alquileres
CREATE TABLE td_alquiler_jc (
  id_alquiler_jc     INT AUTO_INCREMENT PRIMARY KEY,
  id_cliente_alquiler_jc      INT NOT NULL,
  id_vehiculo_alquiler_jc     INT NOT NULL,
  fecha_alquiler_jc  DATE NOT NULL,
  CONSTRAINT fk_alquiler_cliente_jc FOREIGN KEY (id_cliente_alquiler_jc)
    REFERENCES td_cliente_jc(id_cliente_jc)
    ON DELETE CASCADE,
  CONSTRAINT fk_alquiler_vehiculo_jc FOREIGN KEY (id_vehiculo_alquiler_jc)
    REFERENCES td_vehiculo_jc(id_vehiculo_jc)
    ON DELETE CASCADE
);

-- Datos de prueba
USE DB_renta_vehiculos_jc;

INSERT INTO td_cliente_jc (nombre_jc) VALUES
  ('Juan Pérez'),
  ('María López');

INSERT INTO td_vehiculo_jc (modelo_jc) VALUES
  ('Toyota Corolla'),
  ('Honda Civic');
  
SELECT * FROM td_vehiculo_jc  