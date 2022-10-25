import client from "./client";

const apiParam = "?X-TRENA-KEY=0a944fb8-2bbc-4f03-a81a-bf84899cd4f2";

const endpoint = "/security/users/create" + apiParam;

// const getUsers = () => client.get(endpoint);

const register = (userInfo: any) => {
  const user = {
    "email": userInfo.email,
    "authentication": userInfo.password,
    "full_name": userInfo.name,
    "role": "NORMAL"
  }
  console.log(userInfo)
  return client.post(endpoint, userInfo)
};

export default {
  register,
};
