import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState();
  const [serverError, setServerError] = useState();

  const fetchData = useCallback(async () => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      if (!resp.ok) throw new Error("Something went wrong during API call!");
      setApiData(data);
      setIsLoading(false);
      // if (callbackFn) callbackFn(data);
    } catch (error) {
      setServerError(error);
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, [fetchData]);

  return { isLoading, apiData, serverError };
};
