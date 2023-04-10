import { Avatar, Button, Grid, Paper, TextField } from '@mui/material';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import React from 'react'
import styled from 'styled-components';

const Register = () => {
  return (

    <Grid>
      <StyledPaper elevation={20}>
          <Grid align="center">
            <Avatar sx={{ bgcolor: '#863f3f' }}>
              <PersonAddOutlinedIcon />
            </Avatar>
            
            
            
              
              <h2>Register</h2>
              <small>Por favor rellene el formulario para crear su usuario</small>
            
          </Grid>
          <StyledForm>
            <div>
              <TextField id="outlined-basic" label="Nombre" variant="outlined" />
              <TextField id="outlined-basic" label="Apellido" variant="outlined" />
            </div>
            <TextField id="outlined-basic" label="Campo de estudio" variant="outlined" />
            <div>
            <TextField id="outlined-basic" label="País de destion" variant="outlined" />
              <TextField id="outlined-basic" label="Ciudad de destino" variant="outlined" />
            </div>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <div>
              <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
              <TextField id="outlined-basic" label="Repetir contraseña" variant="outlined" />
            </div>
            
            <Button variant="contained">Contained</Button>
            
            

          </StyledForm>
      </StyledPaper>
    </Grid>
    /**
     * 
    <StyledDiv>

        <FormRegister action='POST'>
          <div>
            <h3>Registro</h3>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <h3>Registro</h3>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          </div>
        </FormRegister>
    </StyledDiv>
     */

  )
}

export default Register;

//estilos de paper que funciona igual que div
const StyledPaper = styled(Paper)`
//posicionamiento del cuadro del form
  padding: 30px 20px;
  margin: 20px auto;
  width: 30%;
  margin-top: 7%;
  @media(max-width: 960px){
    width: 80%;
  }
  
`


//estilos dek formulaario
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    display: flex;
    margin-right: 7px;
    margin-top: 10px;
    width: 100%;
  }
  & Button {
    width: 100%;
    margin-top: 10px;
    position: flex;
    align-self: flex-end;
  }
  ç// Eliminar margin-right para TextField de Apellido, Ciudad de destino y País de destion y Repetir contraseña
  & div > :nth-child(2), & div > :nth-child(5), & div > :nth-child(7) {
    margin-right: 0px;
  }
  @media(max-width: 960px){
    div{
      display: block;
      margin-right: auto;
    }
  }

`