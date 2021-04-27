import React from 'react'
import Title from '../../components/Title/Title'
import './Header.css'

/**
 * Header Component
 * 
 * @param {*} props 'title' Title 
 * @returns JSX Component
 */
export default function Header(props) {
    return (
        <header>
            <Title title={ props.title } className="header-title"/>
        </header>
    )
}
