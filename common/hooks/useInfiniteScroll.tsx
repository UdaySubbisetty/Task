import { useState, useEffect, useCallback } from 'react';
import {Post} from '../utils/interfaces'

const fetchData = async (page: number): Promise<Post[]> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
  return res.json();
};

export const useInfiniteScroll = () => {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreData = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const newData = await fetchData(page);
      setData((prevData:Post[]) => [...prevData, ...newData]);

      setHasMore(newData.length > 0);
      setPage((prevPage:number) => prevPage + 1);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page]);

  useEffect(() => {
    loadMoreData();
  }, []);

  return { data, loading, loadMoreData, hasMore };
};
