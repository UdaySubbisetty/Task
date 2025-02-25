import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useInfiniteScroll} from '../../../common/hooks/useInfiniteScroll';

export default function InfiniteScrollList() {
  const {data, loading, loadMoreData, hasMore} = useInfiniteScroll();

  const renderFooter = () =>
    loading && hasMore ? <ActivityIndicator size="large" /> : null;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>
          </View>
        )}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1,paddingTop:20},
  item: {
    marginBottom: 20,
    marginInline:10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    elevation:5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height:  3},
    shadowOpacity: 0.2,
    shadowRadius: 5,  
  },
  title: {fontWeight: 'bold', fontSize: 18, textTransform: 'capitalize'},
  body: {
    textTransform: 'capitalize',
  },
});
