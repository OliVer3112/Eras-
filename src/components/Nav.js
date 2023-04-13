import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import ToggleButton from './ToggleButton'



const Nav = () => {

    const [click, setClick] = useState(false)
    
    console.log(click)
    const handleClick = () => {
        //cambia el estado de click a su contrario, si esta true a false y al revés
        setClick(!click)
    }



  return (
    <>
        <NavBar>
            <h2>Eras<span>+</span></h2>
            <div className={`links ${click ? 'active' : ''}`}> {/*si click es true activa la clase active sino nada*/}
               
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Registro</NavLink>
                <NavLink to="/forum">Foro</NavLink>
                        
                
            </div>
            <div className='toggle'>
                <ToggleButton click={click} handleClick={handleClick}/>
            </div>
            <ModDiv className={`initial ${click? 'active' : ''}`}></ModDiv>
            
            
        </NavBar>

        
        <Outlet />{/*para que sepa donde aparece el contenido propio de cada pagina */}
    </>
    
  )
}

export default Nav


const NavBar = styled.nav`
    h2{
        color: #ffffff;
        font-weight: 400;
        font-size: 1.5rem;
        margin-left: .3rem;
        //padding-left: 5rem;
        span{
            font-weight: bold;
        }
    }
    
    height: 50px;
    padding: .4rem;
    background-color: #221b1bc7;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
    //NavLink sigue siendo un 'a'
        color: #ffffff;
        text-decoration: none;
        margin-right: 1rem;
    }

    .links{//texto de los links con toggle desactivado
        position: absolute;
        top: -700px;
        left: -2000px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all 0.7s ease-in-out;//transición del bloque al darle al boton de toggle
        a{
            color: #ffffffff;
            font-size: 1.5rem;
            display: block;
        }
        @media(min-width: 768px){//ampliando sin toggle activado
            position: initial;
            margin: 0;
            a{
                font-size: 1.5rem;
                color: #ffffff;
                display: inline;
            }
        }
    }

    .links.active{//entra al activarse el toggle
        width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        top: 10%;//donde aparece el texto
        left: 0;
        right: 0;
        a{
            font-size: 2rem;
            color: #ffffffff;
            margin-top: 1rem;
        }
        @media(min-width: 768px){//cuando la ventana se agranda con toggle activado
            text-align:right;
            font-size: 1.5rem;
        }
        @media(max-height: 860px){//para ventanas mas reducidas como telefonos movil
            a{
                font-size: 1.7rem;
                margin-top: 0.8rem;
                color: #ffffffff;
            } 
        }
        @media(max-height: 660px){//para ventanas muy pequeñas de largo
            a{
                font-size: 1.5rem;
                margin-top: 0.6rem;
                color: #ffffffff;
            } 
        }
        
    }
    

    .toggle{
    /* Estilos para el componente ToggleButton */
        @media(min-width: 768px){
            display: none;
        }
    }
`
const ModDiv = styled.div`
    position: absolute;
    background-color: #0f0e0eff;
    top: -1000px;
    z-index: -1;//para que el width 100% no inutilice el toggle

    transition: all 0.7s ease-in-out;//transición del bloque al darle al boton de toggle
    
    &.active{//cuando esta activo el toggle
        height: 40%;
        width: 100%;
        top: 0;
        left: 0;
        @media (min-width: 768px) {
        height: 64px; /* Establecer la altura en un 10% en pantallas más grandes */
    }
    }
    
    
`
