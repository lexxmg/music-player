import { useTrackDetail } from '../bll/useTrackDetail';

export type props = {
  trackId: string | null;
};

export function TrackDetail({ trackId }: props) {
  const { trackDetails } = useTrackDetail(trackId);

  return (
    <div className="w-full rounded-2xl border border-black p-4">
      {trackId && <h2 className="mb-5 text-center text-3xl font-semibold">Выбранный трек</h2>}

      {!trackId && <span className="text-center text-3xl font-semibold">Трек не выбран</span>}

      {!trackDetails && trackId && <p className="">загрузка...</p>}

      {trackDetails && (
        <>
          <h2 className="mb-4 text-xl font-medium">{trackDetails.attributes.title}</h2>

          <p className="">{trackDetails.attributes.lyrics || 'нет текста'}</p>
        </>
      )}
    </div>
  );
}
