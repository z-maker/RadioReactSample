import React from 'react'
import PropTypes from 'prop-types'
import './Art.css'

const Art = props => {
    return (
        <div className="art_container">
            <img {...props} />
        </div>
    )
}

Art.propTypes = {

}

export default Art
