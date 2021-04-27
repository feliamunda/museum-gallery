import React from 'react'
import { useState ,useEffect } from 'react'
import Frame from '../Frame/Frame'
import {apiKey} from '../../../conf/conf'
import './Gallery.css'

/**
 * Gallery Component
 * @const resourceType Should Stay as image to manage the request
 * @const isRandom If the images should be load Random
 * @const artLibrary (State) contain all the resouces loaded
 * @const nextPage (State) Contain the next page to be loaded from api
 * @const isNearFinalScroll (State) It Manage if the scroll is ending to make a new request for Api
 * @returns JSX Component
 */
export default function Gallery(props) {
    const resourceType = "image";
    const isRandom = props.isRandom? props.isRandom : false;
    const [artLibrary, setArtLibrary] = useState([])
    const [nextPage, setNextPage] = useState("")
    const [isNearFinalScroll, setIsNearFinalScroll] = useState(false)
    
    useEffect(() => {
        getImages()
    }, [ isNearFinalScroll ])
    

    const getImages = ()=>{
        let url = nextPage
        if (nextPage === "")
            url = `https://api.harvardartmuseums.org/${resourceType}?apikey=${apiKey}${isRandom?'&sort=random':''}`
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setNextPage(data.info.next)
                setIsNearFinalScroll(false)
                setArtLibrary(artLibrary.concat(data.records))
            })
            .catch(error=> console.log('Error whiling consulting Api'));
    }

    const renderArtLibrary = ()=>{
        let frames = []
        if (artLibrary.length > 0){
            artLibrary.forEach(image => {
                let caption = "";
                let shrinkHeight = false;
                if (image.caption != null && caption === "") caption = image.caption; 
                if (image.renditionnumber != null && caption === "") caption = image.renditionnumber; 
                if (image.height > image.width) shrinkHeight = true
                frames.push(<div className="frame-container" key={image.imageid}><Frame className="frame" src= {image.baseimageurl} alt="Alt" caption= {caption} copyright={image.copyright} shrinkHeight={shrinkHeight}/></div>);
            });
        }
        
        return frames;
    }

    const handleScroll = (e)=>{
        if (e.target.scrollWidth - 5000 < e.target.scrollLeft)
            setIsNearFinalScroll(true)
    }

    return (
        <section className="gallery" onScroll={ handleScroll }>
            { renderArtLibrary() } 
        </section>
    )
}
