import { useState, useEffect, DependencyList } from 'react';

// Define the hook's input props, where T is the type for the API response
interface UseApi {
  shouldLoad?: boolean;
  deps?: DependencyList
  apiFunction: () => Promise<any>; // The API function should return a Promise of type T
}

const useApi = <T>({ shouldLoad, apiFunction }: UseApi) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null); // Data will be of type T or null
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (shouldLoad) {
      setLoading(true);
      apiFunction()
        .then((response) => {
          setData(response?.data as T);
        })
        .catch((err: Error) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return { loading, data, error };
};
export default useApi;
