import { useEffect, useState } from 'react';
import './App.css'


function App(props) {
  const { title } = props;
  const effectCount = effectCounter();

  const [selectedtrackId, setSelectedtrackId] = useState(null);
  const [seleсtedTrack, setSeleсtedTrack] = useState(null)
  const [tracks, setTracks] = useState(null);

  console.log(seleсtedTrack);
  console.log(tracks);


  useEffect(() => {
    console.log(effectCount('useEffect начало'));
    const url = 'https://musicfun.it-incubator.app/api/1.0/playlists/tracks';

    try {
      fetch(url, {
        headers: {
          'api-key': 'd77f8ba7-756c-4844-a235-3b6003c47af3'
        }
      }).then(res => res.json())
        .then(data => {

          setTimeout(() => {
            setTracks(data.data);
            //setTracks([]);
          }, 1000);

          console.log(effectCount('useEffect fetch'));
        }
        )
    } catch (error) {
      console.log(error);
    }
  }, [])

  useEffect(() => {
    if (!selectedtrackId) return

    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedtrackId}`, {
      headers: {
        'api-key': 'd77f8ba7-756c-4844-a235-3b6003c47af3'
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data.data);

        setTimeout(() => {
          setSeleсtedTrack(data.data);
        }, 1000);
      })
  }, [selectedtrackId]);


  return (
    <>
      <h1 className="title">{props.title} musik player</h1>

      <button
        className="btn"
        onClick={() => {
          setSelectedtrackId(null);
          setSeleсtedTrack(null);
        }}
      >сбросить выделения</button>

      {!tracks && <p className="">загрузка</p>}

      {(tracks && tracks.length === 0) && <p className="">треков нет</p>}

      {(tracks && tracks.length !== 0) && (<div className="ul-cont">
        <ul className="list">
          {tracks.map((track) => {
            return (
              <UlEl
                key={track.id} id={track.id}
                track={track}
                title={track.attributes.title}
                url={track.attributes.attachments[0].url}
                selectedtrackId={selectedtrackId}
                setSeleсtedTrack={setSeleсtedTrack}
                setSelectedtrackId={setSelectedtrackId}
              />
            )
          })}
        </ul>

        <div className="track-info">
          <h2 className="track-info__title">Выбранный трек</h2>

          {!selectedtrackId && <span className="track-info__info">Трек не выбран</span>}

          {(!seleсtedTrack && selectedtrackId) && <p className="">загрузка</p>}

          {seleсtedTrack && (<ul className="track-info__list">
            <li className="track-info-list">
              <h2 className="tiile-lyrics">{seleсtedTrack.attributes.title}</h2>
              <p className="text-lyrics">{seleсtedTrack.attributes.lyrics || 'нет текста'}</p>
            </li>
          </ul>)
          }
        </div>
      </div>)}
    </>
  )
}

const UlEl = ({ id, title, url, selectedtrackId, setSelectedtrackId, setSeleсtedTrack, track }) => {
  return (
    <li
      className="lis__item list-item"
      style={{
        border: selectedtrackId === id ? '1px solid red' : ''
      }}
      onClick={() => {
        setSelectedtrackId(id)
        setSeleсtedTrack(null)
      }}
    >
      <p className="list-item__title">{title}</p>

      <audio src={url} className="list-item__plaer" controls></audio>
    </li>
  )
}

function effectCounter() {
  let count = 0;
  let start = Date.now();

  return (where) => {
    const newData = Date.now();
    const ms = newData - start;
    start = newData;

    return 'счетчик сработал в ' + where + '  ' + count++ + ' с задержкой ' + ms;
  }
}

export default App
