import fetch from 'isomorphic-unfetch';

const getData = async url => {
  try {
    const result = await fetch(url);
    if (result) return await result.json();
  } catch (error) {
    throw Error(error);
  }
};

export const getFiles = async (offset = 0, limit = 5) => {
  try {
    const result = await getData(
      `${process.env.SNACKABLE_API_URL}/file/all?offset=${offset}&limit=${limit}`
    );
    if (result) return result;
  } catch (error) {
    throw Error(error);
  }
};

export const getFile = async id => {
  try {
    const result = await getData(`${process.env.SNACKABLE_API_URL}/file/details/${id}`);
    if (result) return result;
  } catch (error) {
    throw Error(error);
  }
};

export const getSegments = async id => {
  try {
    const result = await getData(`${process.env.SNACKABLE_API_URL}/file/segments/${id}`);
    if (result) return result;
  } catch (error) {
    throw Error(error);
  }
};