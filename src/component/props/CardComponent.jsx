import React from 'react'
import Card from './Card'
import img1 from '../../image/3.jpg'
import img2 from '../../image/2.jpg'
import img3 from '../../image/a.jpg'
import './card.css' 

function CardComponent() {
    return (
        <>
            <h1 className='heading'>Card Gwallery</h1>
            <div className='cardComp'>
                <Card title="1" img={img1}/>
                <Card title="2" img={img2}/>
                <Card title="3" img={img3}/>
                <Card title="4" img={img1}/>
                <Card title="5" img={img2}/>
                <Card title="6" img={img3}/>
                
            </div>








        </>
    )
}

export default CardComponent