import { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import axios from 'axios';

function App() {

  const [lyrics, saveLyrics] = useState({
    artist: '',
    song: ''
  })

  useEffect(() => {
    if (Object.keys(lyrics).length === 0) return

    const APILyrics = async () => {
      const { artist, song } = lyrics
      const url = ''
    }

    APILyrics()
  }, [lyrics])
  return (
    <Fragment>
      <Form
        saveLyrics={saveLyrics}
      />
    </Fragment>
  );
}

export default App;
