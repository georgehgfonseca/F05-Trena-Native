import client from "./client";

const endpoint = "/users";

const getUsers = () => client.get(endpoint);

const addUsers = (user: any) => {
  console.log(user)
  return client.post(endpoint, user)
};

export default {
  getUsers,
  addUsers,
};
