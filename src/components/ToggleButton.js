import React from 'react'
import styled from 'styled-components'

const ToggleButton = (props) => {
  return (
    <Toggle>
        <div onClick={props.handleClick}
             className={`icon nav-icon ${props.click ? 'open' : ''}`}>
        {/*al hacer click se llama a handleCLick y si props.click true entonces existe open */}
        
            <span></span>
            <span></span>
            <span></span>

        </div>
    </Toggle>
  )
}

export default ToggleButton


const Toggle = styled.div`
.nav-icon{
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;
}
.nav-icon span{
  background-color:#fff;
  position: absolute;
  border-radius: 2px;
  transition: .3s cubic-bezier(.8, .5, .2, 1.4);
  width:100%;
  height: 4px;
}
.nav-icon span:nth-child(1){
  top:0px;
  left: 0px;
}
.nav-icon span:nth-child(2){
  top:13px;
  left: 0px;
}
.nav-icon span:nth-child(3){
  bottom:0px;
  left: 0px;
}
.nav-icon:not(.open):hover span:nth-child(1){
  transform:  scaleY(1.2);
  left: -5px;
}
.nav-icon:not(.open):hover span:nth-child(2){
  transform: rotate(5deg) scaleY(1.1);
}
.nav-icon:not(.open):hover span:nth-child(3){
  transform:  scaleY(1.2);
  left: 5px;
}
.nav-icon.open span:nth-child(1){
  transform: rotate(45deg) scaleX(0.7);
  top: 13PX;
  left: -8px;
}
.nav-icon.open span:nth-child(2){
  transform: scale(0);
  transition-duration: 50ms
}
.nav-icon.open span:nth-child(3){
  transform: rotate(-45deg) scaleX(0.7);
  top: 13PX;
  left: 7px;
}
`