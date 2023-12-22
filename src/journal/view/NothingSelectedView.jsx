import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Grid, Typography } from "@mui/material"


export const NothingSelectedView = () => {
  return (
    
    <Grid
      container
      spacing={5}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3}}
    >
      
      <Grid item xs={12}>
        <FontAwesomeIcon icon={faStar} fontSize={100} color="white"/>
      </Grid>
      <Grid item xs={12} >
        <Typography color='white' variant="h5" >Selecciona o crea una nota</Typography>
      </Grid>

    </Grid>

  )
}