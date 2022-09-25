import Search from "./Search";
import List from "./List";
import useSongs from "../hooks/useSongs";

function App() {
  const { songs, fetchSongs } = useSongs();
  return (
    <>
      <Search fetchSongs={fetchSongs} />
      <List songs={songs} />
    </>
  );
}

export default App;
