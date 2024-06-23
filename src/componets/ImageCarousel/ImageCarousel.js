import React, { useEffect, useState } from "react";
import "./imageCarosel.css";

function ImageCarousel() {
  {
    /* <img src= alt="html" border="0"></img>
<img src= alt="course-Image1" border="0"></img>
<img src= alt="shutterstock-1203317674" border="0"></img> */
  }

  const [imageSrc, setImageSrc] = useState(0);
  const images = [
    "https://i.ibb.co/H4bh9Lp/shutterstock-1203317674.png",
    "https://i.ibb.co/mFTFQ1w/AIML.png",
    "https://i.ibb.co/Vw2h5b4/html.png",
    "https://i.ibb.co/317nm17/course-Image1.png",
  ];

  let j = imageSrc

useEffect(()=>{
    let i = 0;
    const interval = setInterval(() => {
      if (i >= images.length) {
        i = 0;
        j = 0
        setImageSrc(j);
        i++;
      } else {
        setImageSrc(j+1);
        j++
        i++;
      }
    }, 5000);

    return ()=>clearInterval(interval)
},[])
//   const carsouselHandler = () => {
   
//   };

//   carsouselHandler();

  useEffect(() => {
    console.log(imageSrc);
  }, [imageSrc]);


  const forwardClick = ()=>{
    if(imageSrc >= images.length-1){
        setImageSrc(0)
    }else{
        setImageSrc(imageSrc+1)
    }
    
  }
  const backwardClick =()=>{
    if(imageSrc < 0){
        setImageSrc(images.length-1)
    }else{
        setImageSrc(imageSrc-1)
    }
    // setImageSrc(imageSrc-1)
  }

  const dotHandler =(index) =>{
    setImageSrc(index)
  }
  return (
    <>
      <h1>IMAGE CAROUSEL</h1>
      <div className="carsouselContainer">
        {/* {images.map((item, index) => (
          <img src={item} alt="AIML" border="0" className={`${index === imageSrc? 'active' : '' }`}></img>
        ))} */}
        <button className="buttonArraowprev" onClick={forwardClick}>{'<-'}</button> 
        <img src={images[imageSrc]} alt="AIML" border="0"></img>
        
        
        <button className="buttonArraowFrawd" onClick={backwardClick}>{'->'}</button>

        <div className="crcle">
            {
                images.map((item, index)=>(
                    <button className={`dot ${index == imageSrc ? 'activeCrcile' : ''}`} onClick ={()=>dotHandler(index)}>&nbsp;</button>
                ))
            }
        </div>
      
      </div>
     
    </>
  );
}

export default ImageCarousel;
