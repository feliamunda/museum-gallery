import React from 'react'
import PropTypes from 'prop-types'


/**
 * Frame Component
 * 
 * @param   {*} props 'className' Class,'src' Source, 'alt' Alternative Text, 'shrinkHeight' Should Shrink height, 'caption' Caption for image, 'copyright' Image Copyright
 * @returns JSX Component
 */
function Frame(props) {
    return (
        <figure className={ props.className }>
            <img src={ props.src } alt = { props.alt } className={ props.shrinkHeight? "shrink-height": ""}/>
            <figcaption>{ props.caption }{ props.copyright? ' - Copyright: '+ props.copyright : '' }</figcaption>
        </figure>
    )
}

Frame.propTypes = {
    className : PropTypes.string,
    src : PropTypes.string,
    alt : PropTypes.string, 
    shrinkHeight : PropTypes.bool, 
    copyright : PropTypes.string 
}

export default Frame


