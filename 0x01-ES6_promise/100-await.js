import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let resp = {};

  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    resp = { photo, user };
  } catch (error) {
    resp = { photo: null, user: null };
  }

  return resp;
}
