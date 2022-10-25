import client from "./client";

const apiParam = "?X-TRENA-KEY=0a944fb8-2bbc-4f03-a81a-bf84899cd4f2";

const endpoint = "/collects/" + apiParam;
const endpointAdd = "/collects/add" + apiParam;
const endpointPhotoUpload = "/images/upload" + apiParam;

const getCollects = () => client.get(endpoint);

const uploadImage = async (pathToImageOnFilesystem) => {
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

function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(",")[0].indexOf("base64") >= 0)
    byteString = atob(dataURI.split(",")[1]);
  else byteString = unescape(dataURI.split(",")[1]);

  // separate out the mime component
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], { type: mimeString });
}

// Create Blob file from URL
function blobCreationFromURL(inputURI) {
  var binaryVal;

  // mime extension extraction
  var inputMIME = inputURI.split(",")[0].split(":")[1].split(";")[0];

  // Extract remaining part of URL and convert it to binary value
  if (inputURI.split(",")[0].indexOf("base64") >= 0)
    binaryVal = atob(inputURI.split(",")[1]);
  // Decoding of base64 encoded string
  else binaryVal = unescape(inputURI.split(",")[1]);

  // Computation of new string in which hexadecimal
  // escape sequences are replaced by the character
  // it represents

  // Store the bytes of the string to a typed array
  var blobArray = [];
  for (var index = 0; index < binaryVal.length; index++) {
    blobArray.push(binaryVal.charCodeAt(index));
  }

  return new Blob([blobArray], {
    type: inputMIME,
  });
}

const addCollect = async (data, onUploadProgress) => {
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

  const photoData = new FormData();
  data.images.forEach((image, index) => {
    photoData.append("teste" + index, image, "teste2");
  });
  // for (const imageUri of data.images) {
  //   // uploadImage(imageUri);
  //   //Post Photo
  //   // data.append("teste", dataURItoBlob(imageUri));
  //   photoData.append("teste", imageUri, "teste2");
  //   // data.append(
  //   //   "images2",
  //   //   {
  //   //     name: "image2",
  //   //     type: "image/jpeg",
  //   //     uri: imageUri,
  //   //   },
  //   //   "teste2"
  //   // );
  // }
  const headers = {
    "Content-Type": "multipart/form-data",
  };
  console.log(photoData);
  const res = await client.post(endpointPhotoUpload, photoData, {
    headers: headers,
  });
  console.log(res);
  // for (const imageUri of data.images) {
  //   // uploadImage(imageUri);
  //   //Post Photo
  //   const data = new FormData();
  //   // data.append("teste", dataURItoBlob(imageUri));
  //   data.append("teste", imageUri, "teste2");
  //   // data.append(
  //   //   "images2",
  //   //   {
  //   //     name: "image2",
  //   //     type: "image/jpeg",
  //   //     uri: imageUri,
  //   //   },
  //   //   "teste2"
  //   // );
  //   const headers = {
  //     "Content-Type": "multipart/form-data",
  //   };
  //   console.log(data);
  //   const res = await client.post(endpointPhotoUpload, data, { headers });
  //   console.log(res);
  // }

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
