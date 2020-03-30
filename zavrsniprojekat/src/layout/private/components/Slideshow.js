import React from 'react';
import {Slide} from 'react-slideshow-image';
import image1 from '../../../img/image1.jpg';
import image2 from '../../../img/image2.jpg';
import image3 from '../../../img/image3.jpg';
import image4 from '../../../img/image4.jpg';
import image5 from '../../../img/image5.jpg';



const proprietes={
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true
}


const Slideshow=()=>{
    return(
<div className='contanierSlide'>
<Slide {...proprietes}>
<div className='each-slide'>
    <div>
        <img src={image1} alt='img1'/>
    </div>
</div>
<div className='each-slide'>
    <div>
        <img src={image2} alt='img2'/>
    </div>
</div>
<div className='each-slide'>
    <div>
        <img src={image3} alt='img3'/>
    </div>
</div>
<div className='each-slide'>
    <div>
        <img src={image4} alt='img4'/>
    </div>
</div>
<div className='each-slide'>
    <div>
        <img src={image5} alt='img5'/>
    </div>
</div>
</Slide>
</div>
    )
}

export default Slideshow