// const API_URL = process.env.REACT_APP_API_KEY;

const callApi = async (endpoint, options = {}) => {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = `${API_URL}${endpoint}`;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

const api = {
  companyEvaluations: {
    list() {
      return callApi(`companyEvaluations/${company_id}`);
    },
  },
};

export default api;
