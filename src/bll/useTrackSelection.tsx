import { useState } from 'react';

export function useTrackSelection() {
  const [trackId, setSelectedtrackId] = useState<string | null>(null);

  /**
   * Сетает id выбранного трека в useState
   * @param id - id вабранного трека
   * @example
   * setSelectedtrackId('345yi5432');
   */
  const onTrackSelected = (id: string): void => {
    setSelectedtrackId(id);
    //setSeleсtedTrack(null);
  };

  const trackReset = (): void => {
    setSelectedtrackId(null);
  };

  return {
    trackId,
    onTrackSelected,
    trackReset,
  };
}
