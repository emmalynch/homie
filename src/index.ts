
import config from "config";
import express from "express";
import createLogger from 'logging';

import { getTrainInformation } from "./clients/irishrail";
import { getWeatherForecast } from "./clients/meteireann";

const logger = createLogger("homie");
const app = express();
const port = config.get("port");
const defaultStation = config.get("irishrail.station");

app.get("/traininfo/:station?", async (req, res) => {
  const result = await getTrainInformation(req.params.station ?? defaultStation);
  res.send(result);
});

app.get("/weather", async (req, res) => {
  const result = await getWeatherForecast();
  res.send(result);
});

app.listen( port, () => {
    logger.info( `server started at http://localhost:${ port }` );
} );
