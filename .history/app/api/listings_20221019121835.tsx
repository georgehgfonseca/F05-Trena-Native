import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);
// const addListings = (data: any) => client.post(endpoint);
const addListings = (listing: any) => {
  //content-type
  //application/json
  //multipart/form-data
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category);
  data.append("description", listing.description);
  data.append("location", JSON.stringify(location));
  listing.images.forEach((image: any, id: any) => {
    data.append(
      "images",
      JSON.stringify({
        name: id.toString(),
        type: "image/jpeg",
        uri: image,
      })
    );
  });
};

export default {
  getListings,
  addListings,
};
