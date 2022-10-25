import client from "./client";

const apiParam = "?X-TRENA-KEY=0a944fb8-2bbc-4f03-a81a-bf84899cd4f2";

const endpoint = "/collects/" + apiParam;
const endpointAdd = "/collects/add/" + apiParam;
const endpointPhotoUpload = "/images/upload/" + apiParam;

const getCollects = () => client.get(endpoint);

const addCollect = async (data: any, onUploadProgress: any) => {
  console.log(data);
  const collectData = {
    public_work_id: data.publicWork.id,
    inspection_flag: "1", //TODO remove from endpoint
    date: Date.now(),
    user_email: "george2@teste.com", //TODO get from userData
    public_work_status: data.status.flag,
    comments: data.comments,
  };
  console.log(collectData);
  await client.post(endpointAdd, collectData, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
  data.images.forEach((imageUri: string) => {
    //Post Photo
  });

  // const data = new FormData();
  // data.append("title", collect.title);
  // data.append("price", collect.price);
  // data.append("categoryId", collect.category.value);
  // data.append("description", collect.description);
  // if (collect.location)
  //   data.append("location", JSON.stringify(collect.location));
  // collect.images.forEach((image: string, index: number) => {
  //   data.append("images", {
  //     name: "image" + index,
  //     type: "image/jpeg",
  //     uri: image,
  //   });
  // });

  // return client.post(endpoint, data, {
  //   onUploadProgress: (progress) =>
  //     onUploadProgress(progress.loaded / progress.total),
  // });
};

export default {
  getCollects,
  addCollect,
};
