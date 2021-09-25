import { Fragment } from 'react'

const Song = (props: { songLyrics: string }) => {

    if (props.songLyrics.length === 0) return null
    return (
        <Fragment>
            <h2>Song Lyrics</h2>
            <p className='letra'>{props.songLyrics}</p>
        </Fragment>
    )
}

export default Song
