import React from 'react'
import PropTypes from 'prop-types'
import './Art.scss'

const Art = props => {
    return (
        <div className="art_container">
            <img {...props} alt="" />
            <img {...props} alt="" />
            <img {...props} alt="" />
        </div>
    )
}

Art.propTypes = {

}

export default Art



