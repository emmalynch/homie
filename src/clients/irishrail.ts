import axios from "axios";
import config from "config";
import parser from "fast-xml-parser";

const baseUrl = config.get("irishrail.baseUrl");

export async function getTrainInformation(station: string) {
    const result = await axios.get(`${baseUrl}getStationDataByNameXML?StationDesc=${station}`);
    return parser.parse(result.data);
}