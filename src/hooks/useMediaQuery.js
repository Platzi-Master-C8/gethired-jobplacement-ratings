import {useEffect, useState} from 'react';

export const useMediaQuery = (query) => {
  const mediaMatch = window && window.matchMedia ? window.matchMedia(query) : null;
  const [matches, setMatches] = useState(mediaMatch?.matches || false);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch?.addListener(handler);
    return () => mediaMatch?.removeListener(handler);
  });
  return matches;
};