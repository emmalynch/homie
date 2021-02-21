import axios from "axios";
import config from "config";
import convert from "xml-js";

const baseUrl = config.get("irishrail.baseUrl");

export async function getTrainInformation(station: string) {
    const result = await axios.get(`${baseUrl}getStationDataByNameXML?StationDesc=${station}`);
    return convert.xml2js(result.data);
}