import { environment } from "../config/enviroment";
import client from "./client";
import Constants from "expo-constants";

// const apiParam = "?X-TRENA-KEY=0a944fb8-2bbc-4f03-a81a-bf84899cd4f2"
const apiParam = "?X-TRENA-KEY=" + environment.apiKey

const endpoint = "/inspections/" + apiParam;

console.log(endpoint)

const getInspections = () => client.get(endpoint);

export default {
  getInspections,
};
