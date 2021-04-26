import React from 'react'

export default function Frame(props) {
    return (
        <figure className={ props.className }>
            <img src={ props.src } alt = { props.alt } className={ props.shrinkHeight? "shrink-height": ""}/>
            <figcaption>{ props.caption }{ props.copyright? ' - Copyright: '+ props.copyright : '' }</figcaption>
        </figure>
    )
}
