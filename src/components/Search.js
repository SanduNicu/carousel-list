import React, { useCallback, useMemo } from "react";
import debounce from "lodash.debounce";

export default function Search({ fetchSongs }) {
  const handleChange = useCallback(
    (ev) => {
      fetchSongs(ev.target.value);
    },
    [fetchSongs]
  );

  const debouncedHandleChange = useMemo(
    () => debounce(handleChange, 500),
    [handleChange]
  );

  return (
    <>
      <input onChange={debouncedHandleChange} />
    </>
  );
}
