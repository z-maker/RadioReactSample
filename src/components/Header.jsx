import React from 'react'
import PropTypes from 'prop-types'

import './Header.css'

const Header = ({left,center,right}) => {

    return (
        <header>
            <div>{left}</div>
            <div>{center}</div>
            <div>{right}</div>
        </header>
    )
}

Header.propTypes = {

}

export default Header
