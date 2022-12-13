import { Router } from "express";

import {
  ensureAutenticateClient,
  ensureAutenticateDeliverman,
} from "./middlewares";
import { AuthenticateClientController } from "./modules/account/useCases/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient";
import { FindAllDeliveriesClientController } from "./modules/clients/useCases/deliveries/FindAllDeliveriesClientController";
import { CreateDeliveriesController } from "./modules/deliveries/useCases/createDeliveries";
import { FindAllWithoutEndDateController } from "./modules/deliveries/useCases/findAllWithoutEndDate";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate";
import {
  CreateDeliverymanController,
  FindAllDeliveriesDeliverymanController,
} from "./modules/deliveryman/useCases";

const routes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveriesController = new CreateDeliveriesController();
const findAllWithoutEndDateController = new FindAllWithoutEndDateController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesClientController =
  new FindAllDeliveriesClientController();
const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController();

const updateEndDateController = new UpdateEndDateController();

routes.post("/client/", createClientController.handle);
routes.post("/client/authenticate", authenticateClientController.handle);
routes.get(
  "/client/deriveries",
  ensureAutenticateClient,
  findAllDeliveriesClientController.handle
);

/* routes.post("/deliveryman/", createDeliverymanController.handle);
routes.post(
  "/deliveryman/authenticate",
  authenticateDeliverymanController.handle
);
routes.get(
  "/deliveryman/deliveries",
  ensureAutenticateDeliverman,
  findAllDeliveriesDeliverymanController.handle
);

routes.put(
  "/deriveries/updateEndDate/:id",
  ensureAutenticateClient,
  updateEndDateController.handle
);

routes.post(
  "/delivery",
  ensureAutenticateClient,
  createDeliveriesController.handle
);
routes.get(
  "/delivery/available",
  ensureAutenticateDeliverman,
  findAllWithoutEndDateController.handle
);
routes.put(
  "/delivery/updateDeliveryman/:id",
  ensureAutenticateDeliverman,
  updateDeliverymanController.handle
); */

export { routes };
