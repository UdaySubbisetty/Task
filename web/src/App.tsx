import InfiniteScrollList from './components/InfiniteScrollList';

function App() {
  return (
    <div style={styles.container}>
      <h2>Infinite Scrolling List</h2>
      <InfiniteScrollList />
    </div>
  );
}

const styles = {
  container: { paddingRight:'2rem',paddingLeft:'2rem'},
};
export default App;
