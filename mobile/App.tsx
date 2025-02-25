import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import InfiniteScrollList from './src/components/InfiniteScrollList';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <InfiniteScrollList />
    </SafeAreaView>
  );
}
