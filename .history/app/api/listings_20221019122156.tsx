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
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);
  if (listing.location)
    data.append("location", JSON.stringify(listing.location));
  listing.images.forEach((image: string, index: number) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    });
  });

  return client.post(endpoint, data);
};

export default {
  getListings,
  addListings,
};
