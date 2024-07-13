const apirequest = async (url = '', options = {}, errMsg = '') => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json(); // Assuming the response is JSON
      return data;
    } catch (err) {
      errMsg = err.message;
      return { error: errMsg };
    }
  };
  
  export default apirequest;
  