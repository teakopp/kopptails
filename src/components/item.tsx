import React from "react";
import "./item.css";

// Export it so we can use it to define data
// at grid level to typecheck data from request
export interface ItemProps {
  id: string;
  src: string;
  title: string;
}

function Item(props: ItemProps) {
  return (
    <div className="item" id="props.id">
      <div className="item-image-container">
        <img className="item-image" src={props.src} alt="" />
      </div>
      <div className="item-title-container">
        <p className="item-title">{props.title}</p>
      </div>
    </div>
  );
}

export default Item;
