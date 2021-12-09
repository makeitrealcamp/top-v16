import React from "react";

const Album = props => {
  return (
    <div className='album-container'>
      <img src={props.img} alt=''></img>
      <div className='album-info-container'>
        <h1>{props.title}</h1>
        <h6>{props.artist}</h6>
        <p className='album-name'>{props.albumName}</p>
        <p className='album-year'>{props.albumYear}</p>
        <div className='btn-container'>
          <button className='btn'>dance</button>
          <i class="far fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default Album;
