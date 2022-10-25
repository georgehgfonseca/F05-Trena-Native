import client from "./client";

const endpoint = "/users";

// const getUsers = () => client.get(endpoint);

const register = (userInfo: any) => {
  console.log(userInfo)
  return client.post(endpoint, userInfo)
};

export default {
  register,
};
