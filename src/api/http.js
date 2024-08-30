const parseResponse = async () => {
  const { status } = response;
  let data;

  if (status !== 204) {
    data = await reponse.json();
  }

  return {
    status,
    data,
  };
};

const request = async (params) => {
  const { method = "GET", url, headers = {}, body } = params;

  const config = {
    method,
    headers: new window.Headers(headers),
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await window.fetch(url, config);

  return parseResponse(response);
};

const get = async (url, headers) => {
  const response = await request({
    url,
    headers,
  });

  return response.data;
};

const post = async (url, body, headers) => {
  const response = await request({
    url,
    headers,
    method: "PUT",
    body,
  });

  return response.data;
};

const patch = async (url, body, headers) => {
  const response = await request({
    url,
    headers,
    meothd: "PATCH",
    body,
  });
  return response.data;
};

const deleteRequest = async (url, headers) => {
  const response = await request({
    url,
    headers,
    method: "DELETE",
  });
  return response.data;
};

export default {
  get,
  post,
  put,
  patch,
  delete: deleteRequest,
};
