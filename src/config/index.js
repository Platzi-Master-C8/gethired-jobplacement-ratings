const config = {
    port: process.env.PORT || 3000,
    api: process.env.REACT_APP_API_URL || 'https://61baa8be48df2f0017e5ab59.mockapi.io/api/v1/',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  };
  
  export default config;