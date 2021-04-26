import React from 'react'
import Gallery from '../library/components/Gallery/Gallery'
import Footer from '../library/utils/Footer/Footer'
import Header from '../library/utils/Header/Header'
import './MainScreen.css'

export default function Main() {
    return (
        <div className="main-container">
            <Header title="Museum Gallery"/> 
                
            <Gallery/>

            <Footer/>
        </div>
    )
}
