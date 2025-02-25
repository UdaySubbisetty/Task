import React, { useEffect, useRef, useCallback } from 'react';
import { useInfiniteScroll } from '../../../common/hooks/useInfiniteScroll';
import { Post } from '../../../common/utils/interfaces';

export default function InfiniteScrollList() {
  const { data, loading, loadMoreData, hasMore } = useInfiniteScroll();
  const listRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = useCallback(() => {
    if (listRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = listRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 10 && hasMore && !loading) {
        loadMoreData();
      }
    }
  }, [hasMore, loading, loadMoreData]);

  useEffect(() => {
    const listElement = listRef.current;
    if (listElement) {
      listElement.addEventListener('scroll', handleScroll);
      return () => listElement.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return (
    <div style={{ padding: 10, maxHeight: '86vh', overflowY: 'auto' }} ref={listRef}>
      {data.map((item:Post) => (
        <div key={item.id} style={styles.item}>
          <h3 style={styles.content}>{item.title}</h3>
          <p style={styles.content}>{item.body}</p>
        </div>
      ))}
      {loading && <div style={styles.loader}>Loading...</div>}
      {!hasMore && <div>No more data</div>}
    </div>
  );
}

const styles:{item: React.CSSProperties;
  loader: React.CSSProperties;
  content: React.CSSProperties} = {
  item: { marginBottom: 20, padding: 10, 
    boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.1)',borderRadius: 5 },
    loader: { textAlign: 'center', padding: '20px' },
    content:{
      textTransform:"capitalize"
    }
};
