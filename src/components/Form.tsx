import { useState } from 'react'
import Error from './Error'

const Form = (props: { saveLyrics: any }) => {

    const [search, saveSearch] = useState({
        artist: '',
        song: ''
    })
    const [error, saveError] = useState(false)

    const { artist, song } = search
    const saveState = (e: any) => {
        saveSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const searchInfo = (e: any) => {
        e.preventDefault()
        if (artist.trim() === '' || song.trim() === '') {
            saveError(true)
            return
        }
        saveError(false)
        props.saveLyrics(search)
    }

    return (
        <div className='bg-info'>
            <div className='container'>
                <div className='row'>
                    <form
                        onSubmit={searchInfo}
                        className='col card text-white bg-transparent mb-5 pt-5 pb-2'
                    >
                        <fieldset>
                            <legend className='text-center'>Lyrics Finder</legend>
                            {error && <Error text='All fields are required' />}
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Artist</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='artist'
                                            placeholder='Artist Name'
                                            onChange={saveState}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Song</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            name='song'
                                            placeholder='Song Name'
                                            onChange={saveState}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                type='submit'
                                className='btn btn-primary float-right'
                            >Search</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form