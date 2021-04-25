import React from 'react'
import Gallery from '../library/components/Gallery/Gallery'
import Footer from '../library/utils/Footer/Footer'
import Header from '../library/utils/Header/Header'

export default function Main() {
    return (
        <>
            <Header title="Museum Gallery"/> 
                
            <Gallery/>

            <Footer/>
        </>
    )
}
