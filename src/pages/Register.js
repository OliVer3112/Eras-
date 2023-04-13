import { Avatar, Button, Grid, Paper, TextField } from '@mui/material';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import React from 'react'
import styled from 'styled-components';

const Register = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    //previene que se recarga la pagina


    //si las contraseñas no coinciden
    if( event.target.password.value!== event.target.confirm_password.value){
        console.log("Las contraseñas no coinciden")
        return;//el return hace que no se ejecute lo de abajo
    }


    const data = {

      
      name: event.target.name.value,
      last_name: event.target.last_name.value,
      study_field: event.target.study_field.value,
      hosting_country: event.target.hosting_country.value,
      hosting_city: event.target.hosting_city.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(data)
  };


  return (

    <Grid container justifyContent="center">
      <Grid item xs={10} md={9} lg={7}> {/*Tamaño de la estructura que envuelve el form */}
          <StyledPaper elevation={20}>
              <StyledGrid container direction="column" alignItems="center" >
                
                <Avatar sx={{ bgcolor: '#863f3f' }}>
                  <PersonAddOutlinedIcon />
                </Avatar>
                <Grid item textAlign="center">
                  <h2>Registro</h2>
                  <small>Por favor rellene el formulario para crear su usuario</small>
                </Grid>
              </StyledGrid>

              <StyledForm onSubmit={handleSubmit}>{/**hay que probar que const data va bien */}
                <Grid container direction="column" spacing={2}>

                  <Grid container item spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth id="outlined-basic" label="Nombre" variant="outlined" name="name"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth id="outlined-basic" label="Apellido" variant="outlined" name="last_name"/>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <TextField fullWidth id="outlined-basic" label="Campo de estudio" variant="outlined" name="study_field"/>
                  </Grid>

                  <Grid container item spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth id="outlined-basic" label="País de destino" variant="outlined" name="hosting_country"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth id="outlined-basic" label="Ciudad de destino" variant="outlined" name="hosting_city"/>
                    </Grid>
                  </Grid>
                  
                  <Grid item>
                    <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" name="email"/>
                  </Grid>
                  
                  <Grid container item spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth id="outlined-basic" label="Contraseña" variant="outlined" name="password"/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth id="outlined-basic" label="Repetir contraseña" variant="outlined" />
                    </Grid>
                  </Grid>

                  <Grid container item spacing={2}>  
                    <Grid item xs={12} sm={12}>
                      <Button type="submit" variant="contained">
                        Contained
                      </Button>
                    </Grid>
                  </Grid>

                </Grid>
              </StyledForm>
          </StyledPaper>
        </Grid>
      </Grid>

  )
}

export default Register;

//estilos de paper que funciona igual que div
const StyledPaper = styled(Paper)`
  //posicionamiento del cuadro del form
  padding: 30px 20px;
  margin: 20px auto;
  margin-top: 7%;
`
//estilo al grid del titulo
const StyledGrid = styled(Grid)`
  margin-bottom: 50px;
`;

//estilos dek formulaario
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  & Button {
    width: 100%;
  }
  

`
