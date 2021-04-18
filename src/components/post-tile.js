import React from 'react';
import { Link } from 'react-router-dom';

export default function PostTile(props) {
  const { title, image } = props;

  return (
    <Link>
      <div className="img-container">
        <img src={image} alt={title} />
      </div>
      <h2>{title}</h2>
      <style jsx>{`
        .img-container {
          aspect-ratio: 16/9;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }  
        } 

        h2 {
          margin-top: 10px;
        }
      `}</style>
    </Link>
  );
}