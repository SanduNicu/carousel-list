import React, { useEffect, useState, useRef } from "react";

const list = [0, 1, 2, 3, 4];

export default function List({ songs }) {
  const [position, setPosition] = useState(0);
  const songsLengthRef = useRef();

  useEffect(() => {
    songsLengthRef.current = songs.length;
  }, [songs]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position + 1) % songsLengthRef.current);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="list">
      {list.map((index) => (
        <div key={index}>{songs[(index + position) % songs.length]}</div>
      ))}
    </div>
  );
}
