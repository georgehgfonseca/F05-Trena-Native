import client from "./client";

const apiParam = "?X-TRENA-KEY=0a944fb8-2bbc-4f03-a81a-bf84899cd4f2";

const endpoint = "/collects/" + apiParam;

const getCollects = () => client.get(endpoint);

// {
//   "public_work_id": "3",
//   "inspection_flag": "2",
//   "date": 211022,
//   "user_email": "george2@teste.com",
//   "comments": "Mais uma coleta",
//   "public_work_status": 1,
//   "photos": []
// }
const addCollect = (collect: any, onUploadProgress: any) => {
  const data = {
    public_work_id: "3",
    inspection_flag: "1",
    date: Date.now(),
    user_email: "george2@teste.com",
    public_work_status: 1,
    comments: collect.comments,
  };
  console.log(data);
  return client.post(endpoint, data
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

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getCollects,
  addCollect,
};
