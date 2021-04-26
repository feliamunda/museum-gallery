import React from 'react'
import PropTypes from 'prop-types'

function Title(props) {
    return (
        <h1 className={ props.className }>
            { props.title }
        </h1> 
    )
}

Title.propTypes = {
    title : PropTypes.string
}

export default Title

