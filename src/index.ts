
import config from "config";
import express from "express";
import createLogger from 'logging';

import { getTrainInformation } from "./clients/irishrail";

const logger = createLogger("homie");
const app = express();
const port = config.get("port");
const defaultStation = config.get("irishrail.station");

app.get("/traininfo/:station?", async (req, res) => {
  const result = await getTrainInformation(req.params.station ?? defaultStation);
  res.send(result);
});

app.listen( port, () => {
    logger.info( `server started at http://localhost:${ port }` );
} );
