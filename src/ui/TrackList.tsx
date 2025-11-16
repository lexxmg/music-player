import { TrakItem } from './TrakItem.tsx';
import { useTracks } from '../bll/useTracks.tsx';

type props = {
  trackId: string | null;
  onTrackSelected: (id: string) => void;
  trackReset: () => void;
};

export function TrackList({ trackId, onTrackSelected, trackReset }: props) {
  const { tracks } = useTracks();

  return (
    <>
      {!tracks && <p className="">загрузка</p>}

      {tracks && tracks.length === 0 && <p className="">треков нет</p>}

      {tracks && tracks.length !== 0 && (
        <div className="">
          <button
            className="mb-2 flex h-16 w-full items-center justify-center rounded-2xl border border-transparent bg-blue-500 font-medium text-white transition hover:bg-blue-600"
            onClick={() => trackReset?.()}
          >
            сбросить выделения
          </button>

          <ul className="list">
            {tracks.map((track) => {
              return (
                <TrakItem
                  key={track.id}
                  id={track.id}
                  title={track.attributes.title}
                  url={track.attributes.attachments[0].url}
                  isSelected={trackId === track.id}
                  onTrackSelected={onTrackSelected}
                />
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
