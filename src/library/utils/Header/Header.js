import React from 'react'
import Title from '../Title/Title'

export default function Header(props) {
    return (
        <header>
            <Title title={ props.title } />
        </header>
    )
}
