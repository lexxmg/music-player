const URL = 'https://musicfun.it-incubator.app/api/1.0/';
const API_KEY = import.meta.env.VITE_API_KEY as string;

type GetTrackListOutput = {
  data: Array<TrackListItemResource>;
};

export type TrackListItemResource = {
  id: string;
  type: string;
  attributes: TrackListItemAttributes;
  relationships: TrackRelationships;
};

type TrackRelationships = {
  artists: {
    data: {
      id: string;
      type: string;
    }[];
  };
};

type TrackListItemAttributes = {
  title: string;
  addedAt: string;
  likesCount: number;
  attachments: Array<TrackAttachment>;
  images: TrackImages;
  user: UserRef;
  currentUserReaction: number;
  isPublished: boolean;
  publishedAt: string;
};

type TrackAttachment = {
  id: string;
  addedAt: string;
  updatedAt: string;
  version: number;
  url: string;
  contentType: string;
  originalName: string;
  fileSize: number;
};

type TrackImages = {
  main: Array<ImageVariant>;
};

type ImageVariant = {
  type: string;
  width: number;
  height: number;
  fileSize: number;
  url: string;
};

type UserRef = {
  id: string;
  name: string;
};

export async function getTracks(): Promise<GetTrackListOutput> {
  const res = await fetch(`${URL}playlists/tracks`, {
    headers: {
      'api-key': API_KEY,
    },
  });

  await sleep(500);
  const json = res.json();

  return json;
}

type GetTrackDetailsOutput = {
  data: TrackDetailsResource;
};

export type TrackDetailsResource = {
  id: string;
  attributes: TrackDetailsAttributes;
};

type TrackDetailsAttributes = {
  title: string;
  lyrics: string | null;
};

export const getTrackDetails = async (trackId: string): Promise<GetTrackDetailsOutput> => {
  const res = await fetch(`${URL}playlists/tracks/${trackId}`, {
    headers: {
      'api-key': 'd77f8ba7-756c-4844-a235-3b6003c47af3',
    },
  });

  //await sleep(1000);
  const data = res.json();
  return data;
};

function sleep(ms: number): Promise<null> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
