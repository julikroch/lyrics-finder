import { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Song from './components/Song';
import Info from './components/Info';
import axios from 'axios';

function App() {

  const [lyrics, saveLyrics] = useState({
    artist: '',
    song: ''
  })
  const [songLyrics, saveSongLyrics] = useState('')
  const [info, saveInfo] = useState('')

  useEffect(() => {
    if (Object.keys(lyrics).length === 0) return

    const APILyrics = async () => {
      const { artist, song } = lyrics
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyricsInfo, info] = await Promise.all([
        axios(url),
        axios(url2)
      ])

      saveSongLyrics(lyricsInfo.data.lyrics)
      saveInfo(info.data.artists[0])
    }

    APILyrics()
  }, [lyrics, info])

  return (
    <Fragment>
      <Form
        saveLyrics={saveLyrics}
      />

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <Info
              info={info}
            />
          </div>
          <div className='col-md-6'>
            <Song
              songLyrics={songLyrics}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
