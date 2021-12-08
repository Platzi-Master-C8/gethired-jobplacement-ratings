import config from '../config';
import list from '../data/listReviews';

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
    listReviews(companyId, options = {}) {
      return getData(`companyEvaluations/${companyId}`, options);
    },
    sendReview(companyId, data = {}) {
      return sendData(`companyEvaluations/${companyId}`, data);
    },
    mockDataList() {
      return list.map((review) => ({
        id: review.id,
        contentType: review.content_type,
        createdAt: review.created_at,
        isStillWorkingHere: review.is_still_working_here,
        jobTitle: review.job_title,
        nonUtilityCounter: review.non_utility_counter,
        utilityCounter: review.utility_counter,
        weightedAveragePerEvaluation: review.weighted_average_per_evaluation,
      }));
    }
  },
};

export default api;
