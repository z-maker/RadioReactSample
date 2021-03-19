import React from 'react'
import PropTypes from 'prop-types'

import './PlayButton.css'
import {Icons} from './../assets'


const PlayButton = ({onClick,status}) => {

    const [_status, setStatus] = React.useState(status)

    const handleClick = (e) => {
        setStatus(!_status)
        onClick(!_status)
    }

    return (
        <div className="button_pp" onClick={handleClick} >
            <img src={
                _status ? Icons.ic_pause : Icons.ic_play
            } alt="" />
        </div>
    )
}

PlayButton.propTypes = {
    onClick:PropTypes.func.isRequired,
    status:PropTypes.bool
}

export default PlayButton
