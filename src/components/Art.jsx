import React from 'react'
import PropTypes from 'prop-types'
import './Art.scss'

const Art = props => {
    const { wall } = props
    return (
        <React.Fragment>
            {wall &&
                <div className="art_wall">
                    <img {...props} alt="" />
                </div>}
            <div className="art_container">
                <img {...props} alt="" />
                <img {...props} alt="" />
                <img {...props} alt="" />
            </div>
        </React.Fragment>
    )
}

Art.propTypes = {
    /** Allow show a full page wallpaper of album art */
    wall: PropTypes.bool
}

export default Art



