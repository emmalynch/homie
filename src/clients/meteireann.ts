import axios from "axios";
import config from "config";
import convert from "xml-js";

const baseUrl = config.get("meteireann.baseUrl");

export async function getWeatherForecast() {
    const lattitude = config.get("meteireann.lat");
    const longitude = config.get("meteireann.long");
    const {today, tomorrow} = getTodayAndTomorrow();
    const url = `${baseUrl}?lat=${lattitude};long=${longitude};from=${today};to=${tomorrow}`
    const result = await axios.get(url);
    return convert.xml2js(result.data);
}

function getTodayAndTomorrow() {
    const today = new Date().toISOString().substring(0, 16);
    const now = new Date();
    const tomorrow = (new Date(now.getTime() + 86400000)).toISOString().substring(0, 16);
    return {today, tomorrow};
}