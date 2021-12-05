import config from '../config';

const getData = (endpoint, options) => {
  const ops = {
    headers: config.headers,
    ...options
  };

  const url = `${config.api}/${endpoint}`;
  return fetch(url, ops)
};

const sendData = (endpoint, data) => {
  const url = `${config.api}/${endpoint}`;

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: config.headers
  });
}

const api = {
  companyEvaluations: {
    listReviews(options = {}) {
      return getData('companyEvaluations', options);
    },
    sendReview(companyId, data = {}) {
      return sendData(`companyEvaluations/${companyId}`, data);
    },
  },
};

export default api;