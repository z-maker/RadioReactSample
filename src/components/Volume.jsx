import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import './Volume.scss'

const Volume = props => {

    const { color, onChange, value } = props

    const speakB = useRef()
    const arcBigB = useRef()
    const arcSmB = useRef()

    const speakF = useRef()
    const arcBigF = useRef()
    const arcSmF = useRef()

    const crossLtRb = useRef()
    const crossLbRt = useRef()

    const [volume, setvolume] = useState(value)

    const handleSlider = (e) => {
        let v = e.target.valueAsNumber;
        setvolume(v)
    }

    const handleSpeaker = (e) => {
        e.preventDefault();
        setvolume(0)
    }

    useEffect(() => {
        onChange(volume)
        return () => {
            
        }
    }, [volume])

    return (
        <React.Fragment>
            <div className="speaker"
                onMouseDown={handleSpeaker}
            >
                <svg viewBox="0 0 100 77" xmlns="http://www.w3.org/2000/svg">
                    <path ref={speakB} id="speakB" className="volElem" stroke={color} d="M51.2,18.5v-13c0-2.1-2.5-3.3-4.1-1.9L21.8,25.9c-1.4,1.2-3.1,1.9-4.9,1.9H8.2c-2.3,0-4.2,1.9-4.2,4.2v13.3c0,2.3,1.9,4.2,4.2,4.2H17c1.9,0,3.7,0.7,5.1,1.9l25,22c1.6,1.4,4.1,0.3,4.1-1.9v-13" opacity="0.4" />
                    <path ref={speakF} id="speakF" className="volElem" stroke={color} d="M51.2,18.5v-13c0-2.1-2.5-3.3-4.1-1.9L21.8,25.9c-1.4,1.2-3.1,1.9-4.9,1.9H8.2c-2.3,0-4.2,1.9-4.2,4.2v13.3c0,2.3,1.9,4.2,4.2,4.2H17c1.9,0,3.7,0.7,5.1,1.9l25,22c1.6,1.4,4.1,0.3,4.1-1.9v-13" />
                    <path ref={arcBigB} id="arcBigB" className="volElem" stroke={color} d="M72.2,64.1C81.1,59,87,49.4,87,38.5c0-10.9-5.9-20.5-14.8-25.6" opacity="0.4" />
                    <path ref={arcBigF} id="arcBigF" className="volElem" stroke={color} d="M72.2,64.1C81.1,59,87,49.4,87,38.5c0-10.9-5.9-20.5-14.8-25.6" />
                    <path ref={arcSmB} id="arcSmB" className="volElem" stroke={color} d="M59,51.3c4.4-2.6,7.4-7.4,7.4-12.8s-3-10.3-7.4-12.8" opacity="0.4" />
                    <path ref={arcSmF} id="arcSmF" className="volElem" stroke={color} d="M59,51.3c4.4-2.6,7.4-7.4,7.4-12.8s-3-10.3-7.4-12.8" />
                    <line ref={crossLtRb} id="crossLtRb" className="volElem" opacity="0.6" stroke={color} x1="43.8" y1="29.2" x2="62.6" y2="47.8" transform="scale(0)" />
                    <line ref={crossLbRt} id="crossLbRt" className="volElem" opacity="0.6" stroke={color} x1="62.6" y1="29.2" x2="43.8" y2="47.8" transform="scale(0)" />
                </svg>
            </div>
            <div className=""></div>
            <div className="vlCtrl">
                <input onChange={handleSlider} value={volume} min={0} step={0.02} max={1} type="range" name="" id="" />
            </div>
        </React.Fragment>
    )
}

Volume.propTypes = {
    onChange: PropTypes.func.isRequired
}

Volume.defaultProps = {
    color: "#F75D46",
    value: 0
}

export default Volume
