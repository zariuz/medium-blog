import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const baseUrl = 'https://conduit.productionready.io/api';
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }
    console.log('effect is triggered');

    axios(baseUrl + url, options)
      .then((res) => {
        console.log('res', res);
        setIsLoading(false);
        setResponse(res.data);
      })
      .catch((error) => {
        console.log('error', error);
        setIsLoading(false);
        setError(error.response.data);
      });
  }, [isLoading]);

  return [{ isLoading, response, error }, doFetch];
};