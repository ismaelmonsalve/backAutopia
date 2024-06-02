import { Router } from "express";
import { autopiaController as controller } from "../controllers/autopia.controller.js";

const router = Router();

router.get("/carros", controller.getCarros);
router.get("/clientes", controller.getClientes);
router.get("/alquileres", controller.getAlquileres);

export default router;
