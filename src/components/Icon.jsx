import React from 'react'
import PropTypes from 'prop-types'

import { Icons } from './../assets'

import './Icon.css'

const Icon = ({ size, variant, text, text_position }) => {

    const className = getClassName(text_position)

    return (
        <div className={className} >
            <img src={Icons.ic_listeners} alt="icon" width={size} height={size} />
            <span>{text}</span>
        </div>
    )
}

function getClassName(text_position) {
    return `icon icon_${text_position}`
}

Icon.propTypes = {
    /*** The size if icon default value 32 */
    size: PropTypes.number,
    /** #### Variant value default "transparent"
     * 1. "filled"
     * 1. "outlined"
     * 1. "transparent"
     */
    variant: PropTypes.oneOf(['filled', 'outline', 'transparent']),
    /** Text to show near to icon */
    text: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    /** Specifies where the text will be shown
     *  1. top
     *  1. bottom
     *  1. left
     *  1. right
     */
    text_position: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
}

Icon.defaultProps = {
    size: 32,
    variant: 'transparent',
    text_position: 'right',
    text: ""
}

export default Icon
