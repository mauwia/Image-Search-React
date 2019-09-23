import React from 'react'
import './imageList.css'
import ImageCard from './ImageCard'

const renderImageList=(props)=>{
    console.log(props.Images)
    let images=props.Images.map(image => {
        return <ImageCard image={image}  key={image.id}/>
    })
    return <div className='red image-list'>
    {images}</div>
}

export default renderImageList