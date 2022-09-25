import { useState, useCallback } from "react";

const initialSongs = ["A", "B", "C", "D", "E"];

const fetchData = (query) =>
  fetch(`https://itunes.apple.com/search?${query && `term=${query}`}`)
    .then((res) => res.json())
    .then(({ results }) =>
      results.reduce((acc, val) => [...acc, val.collectionName], [])
    );

export default function useSongs() {
  const [songs, setSongs] = useState([]);

  const fetchSongs = useCallback(async (query) => {
    const fetchedSongs = await fetchData(query);
    setSongs(fetchedSongs.slice(0, 5).sort());
  }, []);

  return { songs: [...initialSongs, ...songs], fetchSongs };
}
