import React from 'react'
import PropTypes from 'prop-types'
import './Marquee.css'

const Marquee = ({artistTitle, albumTitle, songTitle}) => {
    return (
        <div className="track-info-wpr">
            <div className="track-info-ctr">
                <div className="marquee">
                    {artistTitle && <span className="artist-name animated">{artistTitle}</span>}
                    {songTitle && <span className="songtitle animated">{songTitle}</span>}
                    {albumTitle && <span className="collectiontitle animated">{albumTitle}</span>}
                </div>
            </div>
        </div>
    )
}

Marquee.propTypes = {

}

Marquee.defaultProps ={
    songTitle:"unknown"
}

export default Marquee
