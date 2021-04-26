import React from 'react'
import image from '../../../res/images/hardvard-museum-1.jpg'
import Frame from '../Frame/Frame'
import './Gallery.css'

const mockImages = ()=>{
    let artLibrary = []

    for (let i = 0; i < 4; i++) {
        artLibrary.push( <Frame className="frame" src= {image} alt="Alt" description= "Description" key={i}/>);
    }
    return artLibrary
}

export default function Gallery() {
    
    return (
        <section className="gallery ">
            { mockImages() } 
        </section>
    )
}
