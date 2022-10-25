import client from "./client";

const endpoint = "/messages";

// const getUsers = () => client.get(endpoint);

const send = (messageInfo: any) => {
  console.log(messageInfo)
  return client.post(endpoint, messageInfo)
};

export default {
  send,
};
