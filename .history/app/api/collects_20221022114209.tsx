import client from "./client";

const apiParam = "?X-TRENA-KEY=0a944fb8-2bbc-4f03-a81a-bf84899cd4f2";

const endpoint = "/collects/" + apiParam;
const endpointAdd = "/collects/add/" + apiParam;
const endpointPhotoUpload = "/images/upload/" + apiParam;

const getCollects = () => client.get(endpoint);

const uploadImage = async (pathToImageOnFilesystem: string) => {
  const form = new FormData();
  form.append("image[image]", {
    name: "a.jpg",
    uri: pathToImageOnFilesystem,
    type: "image/jpg",
  });
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  const res = await client.post(endpointPhotoUpload, form, { headers });
  console.log(res);
  return res;
};

const addCollect = async (data: any, onUploadProgress: any) => {
  const collectData = {
    public_work_id: data.publicWork.id,
    inspection_flag: "1", //TODO remove from endpoint
    date: Date.now(),
    user_email: "george2@teste.com", //TODO get from userData
    public_work_status: data.status.flag,
    comments: data.comments,
  };
  await client.post(endpointAdd, collectData, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });

  for (const imageUri of data.images) {
    uploadImage(imageUri);
    // //Post Photo
    // const data = new FormData();
    // data.append(
    //   "images",
    //   {
    //     name: "image" + imageUri,
    //     type: "image/jpeg",
    //     uri: imageUri,
    //   },
    //   "teste"
    // );
    // console.log(data);
    // const res = await client.post(endpointPhotoUpload, data);
    // console.log(res);
  }

  // data.images.forEach(async (imageUri: string) => {
  //   //Post Photo
  //   const data = new FormData();
  //   data.append("file", imageUri, "teste");
  //   const res = await client.post(endpointPhotoUpload, data);
  //   console.log(res);
  // });

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
