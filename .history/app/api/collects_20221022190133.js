import client from "./client";
import axios from "axios"

const apiParam = "?X-TRENA-KEY=0a944fb8-2bbc-4f03-a81a-bf84899cd4f2";

const endpoint = "/collects/" + apiParam;
const endpointAdd = "/collects/add" + apiParam;
const endpointPhotoUpload = "/images/upload" + apiParam;
const endpointPhotoAdd = "/photos/add" + apiParam;

const getCollects = () => client.get(endpoint);

const addCollect = async (data, onUploadProgress) => {
  const timestamp = Date.now();
  const collectData = {
    public_work_id: data.publicWork.id,
    inspection_flag: "1", //TODO remove from endpoint
    date: timestamp,
    user_email: data.user.email, //TODO get from userData
    public_work_status: data.status.flag,
    comments: data.comments,
  };
  const response = await client.post(endpointAdd, collectData, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });

  const photoData = {
    id: timestamp.toString(),
    collect_id: response.data.id,
    type: "1",
    filepath: "images/" + data.publicWork.id + "_" + timestamp + ".jpeg",
    latitude: data.location.latitude,
    longitude: data.location.longitude,
    comment: "teste",
    timestamp: timestamp
  }
  const responsePhoto = await client.post(endpointPhotoAdd, photoData);
  console.log(responsePhoto)
  
  const photoFilesData = new FormData();
  data.images.forEach((image, index) => {
    photoFilesData.append("file",  
         {
            // name: "file",
            name: data.publicWork.id + "_" + timestamp + ".jpeg",
            type: "image/jpeg",
            uri: image,
          },
    );
  });
  console.log(photoFilesData);
  const res = await client.post(endpointPhotoUpload, photoFilesData);
  console.log(res);
  return res;
};

export default {
  getCollects,
  addCollect,
};
