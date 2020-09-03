const API_URL = 'http://interview-api.snackable.ai/api';

const load = async (url) => {
    const resp = await fetch(url);

    return await resp.json();
}

export const loadFiles = async (offset = 0, limit = 5) => await load(`${API_URL}/file/all?offset=${offset}&limit=${limit}`);

export const loadFile = async (id) => await load(`${API_URL}/file/details/${id}`);