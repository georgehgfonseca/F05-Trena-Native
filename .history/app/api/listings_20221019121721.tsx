import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);
// const addListings = (data: any) => client.post(endpoint);
const addListings = (listing) => {
  //content-type
  //application/json
  //multipart/form-data
  new FormData();
};

export default {
  getListings,
  addListings,
};
