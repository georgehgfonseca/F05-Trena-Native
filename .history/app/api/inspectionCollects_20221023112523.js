import client from "./client";

const apiParam = "?X-TRENA-KEY=0a944fb8-2bbc-4f03-a81a-bf84899cd4f2";

const endpoint = "/collects/" + apiParam;
const endpointAdd = "/collects/add" + apiParam;
const endpointPhotoUpload = "/images/upload" + apiParam;
const endpointPhotoAdd = "/photos/add" + apiParam;

const getInspectionCollects = () => client.get(endpoint);

const addInspectionCollect = async (data, onUploadProgress) => {
  const timestamp = Date.now();
  const inspectionCollectData = {
    public_work_id: data.inspection.public_work_id,
    inspection_flag: data.inspectionflag, //TODO remove from endpoint
    date: timestamp,
    user_email: data.user.email, //TODO get from userData
    public_work_status: data.status.flag,
    comments: data.comments,
  };
  const response = await client.post(endpointAdd, inspectionCollectData);
  console.log("collect: ", response.ok)

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
  console.log("photo: ", responsePhoto.ok)
  
  const photoFilesData = new FormData();
  data.images.forEach((image, index) => {
    photoFilesData.append("file",  
         {
            name: data.publicWork.id + "_" + timestamp + ".jpeg",
            type: "image/jpeg", //TODO allow videos
            uri: image,
          },
    );
  });
  const responsePhotoUpload = await client.post(endpointPhotoUpload, photoFilesData, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
  console.log("photoUpload: ", responsePhotoUpload.ok);
  return responsePhotoUpload;
};

export default {
  getCollects: getInspectionCollects,
  addCollect: addInspectionCollect,
};
