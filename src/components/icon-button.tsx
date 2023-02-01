import React from "react"
import "./icon-button.css"

interface ButtonProps{
  src:string;
  alt: string;
  handleClick?:React.MouseEventHandler<HTMLImageElement>;
}

function IconButton(props: ButtonProps){
  return(
      <button className="icon-button">
	<img src={props.src} alt={props.alt} onClick={props.handleClick}/>
      </button>
  )
}

export default IconButton;
