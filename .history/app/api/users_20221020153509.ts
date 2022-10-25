import client from "./client";

const endpoint = "/users";

const getUsers = () => client.get(endpoint);

const addUsers = (user: any) => {
  client.post(endpoint, {"name": user.name, "email": user.email, "password": user.password, "id": "5"})


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

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getUsers,
  addUsers,
};
