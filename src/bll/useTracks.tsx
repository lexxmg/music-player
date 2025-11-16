import { useState, useEffect } from 'react';
import { type TrackListItemResource, getTracks } from '../dai/api';

export function useTracks() {
  const [tracks, setTracks] = useState<Array<TrackListItemResource> | null>(null);

  useEffect(() => {
    getTracks().then((json) => {
      setTracks(json.data);
    });
  }, []);

  return {
    tracks,
  };
}
