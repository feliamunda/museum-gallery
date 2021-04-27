import React from 'react'
import PropTypes from 'prop-types'

/**
 * Title Component
 * 
 * @param {*} props 'title' Title 
 * @returns JSX Component
 */
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

