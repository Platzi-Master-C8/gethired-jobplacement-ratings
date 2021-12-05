const config = {
    port: process.env.PORT || 3000,
    api: process.env.REACT_APP_API_URL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  };
  
  export default config;