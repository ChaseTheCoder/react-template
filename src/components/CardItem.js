import React from 'react';
import { Link } from 'react-router-dom';

function CardItem() {
  return(
    <>
    <li className="cards_item">
      <Link className="cards_item_link">
        <figure className="cards_item_pic-wrap">
          {/* <img src="/" alt="Travel Image" className="cards_item_img"/> */}
        </figure>
      </Link>
    </li>
    </>
  )
}