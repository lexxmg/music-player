import { useEffect, useState } from 'react';
import { getTrackDetails, type TrackDetailsResource } from '../dai/api';

export function useTrackDetail(trackId: string | null) {
  const [trackDetails, settTackDetails] = useState<TrackDetailsResource | null>(null);

  useEffect(() => {
    settTackDetails(null);

    if (!trackId) return;

    getTrackDetails(trackId).then((data) => {
      console.log(data.data);

      settTackDetails(data.data);
    });
  }, [trackId]);

  return { trackDetails };
}
