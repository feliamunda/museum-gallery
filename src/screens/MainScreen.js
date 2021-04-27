import React from 'react'
import Gallery from '../library/components/Gallery/Gallery'
import Footer from '../library/utils/Footer/Footer'
import Header from '../library/utils/Header/Header'
import './MainScreen.css'

/**
 * MainScreen Component
 * 
 * @returns JSX Component 
 */

export default function MainScreen() {
    return (
        <div className="main-container">
            <Header title="Museum Gallery"/> 
                
            <Gallery/>

            <Footer/>
        </div>
    )
}
