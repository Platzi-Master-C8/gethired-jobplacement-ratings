import config from '../config';
import list from '../data/listReviews';
import overallReviews from '../data/overallReviews';

const getData = (endpoint, options) => {
  const ops = {
    headers: config.headers,
    ...options
  };

  const url = `${config.api}${endpoint}`;
  return fetch(url, ops)
};

const sendData = (endpoint, data) => {
  const url = `${config.api}${endpoint}`;

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: config.headers
  });
}

const api = {
  companyEvaluations: {
    listReviews(companyId, page, options = {}) {
      return getData(`companies/${companyId}/company-evaluations?page=${page}&size=10`, options);
    },
    sendReview(companyId, data = {}) {
      return sendData(`companies/${companyId}/company-evaluation`, data);
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
    },
    mockDataOverallReview() {
      return new Promise(resolve => resolve(...overallReviews));
    }
  },
  companyReports: {
    sendReport(companyId, data = {}) {
      return sendData(`companyReport/${companyId}`, data);
    },
  }
};

export default api;
