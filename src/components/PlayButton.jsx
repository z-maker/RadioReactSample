import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import './PlayButton.css'
import { Icons } from './../assets'


const PlayButton = ({ onClick, status }) => {

    const [_status, setStatus] = React.useState(status)

    const btnRef = useRef()

    const handleClick = (e) => {
        setStatus(!_status)
        onClick(!_status)
    }

    const handleMouseDown = (e) => {
        btnRef.current.classList.add("bounceIn");
    }

    const handleMouseUp = (e) => {
        setTimeout(()=>btnRef.current.classList.remove("bounceIn"),500)
    }

    return (
        <div className="button_pp animated"
            ref={btnRef}
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp} 
            >
            <img src={
                _status ? Icons.ic_pause : Icons.ic_play
            } alt="" />
        </div>
    )
}

PlayButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    status: PropTypes.bool
}

export default PlayButton
