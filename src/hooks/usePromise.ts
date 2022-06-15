import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import tracking from 'utils/tracking';
import { useApi } from 'context/ApiContext';

type ResponseValueType<T> = null | AxiosResponse<T> | { error: AxiosResponse };

// https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
const usePromise = <ResponseType = unknown>(
  url: string,
  dependencies = []
): [ResponseValueType<ResponseType>, boolean] => {
  const [response, setResponse] = useState<ResponseValueType<ResponseType>>(null);
  const [loaded, setLoaded] = useState(false);
  const api = useApi();

  useEffect(() => {
    let isMounted = true;
    setLoaded(false);

    api
      .get(url)
      .then((result: AxiosResponse<ResponseType>) => {
        if (isMounted) setResponse(result);
      })
      .catch((error: AxiosResponse) => {
        if (isMounted) setResponse({ error });
        tracking.error({
          e: error,
          message: `Error fetching API: ${url}`
        });
      })
      .finally(() => {
        if (isMounted) setLoaded(true);
      });

    return () => {
      isMounted = false;
    };
  }, dependencies);

  return [response, loaded];
};

export default usePromise;
