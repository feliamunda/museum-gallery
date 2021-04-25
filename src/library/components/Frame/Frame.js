import React from 'react'

export default function Frame(props) {
    return (
        <div>
            <figure>
                <img src={ props.src } alt = { props.alt }/>
                <figcaption>{ props.desciprtion }</figcaption>
            </figure>
        </div>
    )
}
