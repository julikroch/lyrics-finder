const Info = (props: { info: any }) => {

    if (Object.keys(props.info).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyEN, strFacebook, strTwitter, strLastFMChart } = props.info

    return (
        <div className='card border-light'>
            <div className='card-header bg-primary text-light-font-weight-bold'>
                Artist Info
            </div>
            <div className='card-body'>
                <img src={strArtistThumb} alt='Artist'/>
                <p className='card-text'>Genre: {strGenre}</p>
                <h2 className='card-text'> Biography</h2>
                <p className='card-text'>{strBiographyEN}</p>
                <p className='card-text'>
                    <a href={`https://${strFacebook}`} target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-facebook'></i>
                    </a>
                    <a href={`https://${strTwitter}`} target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href={`${strLastFMChart}`} target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-lastfm'></i>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Info
