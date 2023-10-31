import React from 'react';
import "./albumimage.css";

function AlbumImage({url}) {
    console.log(url);
  return (
    <>
      <div className='albumImage'>
        <img src={url} alt="img" className='albumImage-art'/>
        </div>
      {/* <div className="albumImage-shadow">
         <img src={url} alt="shadow" className='albumIMage-shadow'/>
     </div> */}
    </>
  )
}

export default AlbumImage