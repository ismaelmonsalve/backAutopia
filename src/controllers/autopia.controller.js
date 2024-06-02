import { json } from "express";
import { createConnection } from "../database/database.js";

const getCarros = async (req, res) => {
    const connection = await createConnection();
    const result = await connection.query("SELECT * FROM carros");
    res.json(result[0]);
};

const getClientes = async (req, res) => {
  const connection = await createConnection();
  const result = await connection.query("SELECT * FROM clientes");
  res.json(result[0]);
};

const getAlquileres = async (req, res) => {
  const connection = await createConnection();
  const result = await connection.query("SELECT * FROM alquileres");
  res.json(result[0]);
};

export const autopiaController = {
    getCarros,
    getClientes,
    getAlquileres
}