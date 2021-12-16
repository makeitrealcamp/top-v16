import React from "react";

const Album = props => {
  return (
    <div className='album__container'>
      <img src={props.img} alt=''></img>
      <div className='album__info-container'>
        <div className='album__description_container'>
          <h1>{props.title}</h1>
          <h6>{props.artist}</h6>
          <p className='album__name'>{props.albumName}</p>
          <p className='album__year'>{props.albumYear}</p>
        </div>
        <div className='album__btn-container'>
          <button className='btn'>dance</button>
          <i class="far fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default Album;