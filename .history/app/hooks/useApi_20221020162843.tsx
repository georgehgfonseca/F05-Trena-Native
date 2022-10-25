import { useState } from "react";

export default function useApi(apiFunc: any) {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setError(!response.ok);
    if (!response.ok) {
      return response;
    }

    setData(response.data);
    return response;
  };

  return { data, error, loading, request };
}
