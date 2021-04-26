import React from 'react'

export default function Frame(props) {
    return (
        <figure className={ props.className }>
            <img src={ props.src } alt = { props.alt }/>
            <figcaption>{ props.desciprtion }</figcaption>
        </figure>
    )
}
