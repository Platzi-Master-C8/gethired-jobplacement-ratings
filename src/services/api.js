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

const sendData = async (endpoint, data = {}) => {
  const url = `${API_URL}${endpoint}`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.json();

  } catch (err) {
    console.log(err)
    return err;
  }
}

const api = {
  companyEvaluations: {
    list() {
      return callApi(`companyEvaluations/${company_id}`);
    },
  },

  applicantReview: {
    sendReview() {
      return sendData(`aplicantEvaluations/${user_id}`);
    }
  }

};

export default api;
