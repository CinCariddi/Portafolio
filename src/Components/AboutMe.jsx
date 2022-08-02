import { Grid, Box, Typography } from "@mui/material";
import '../Style/AboutMe.css'

export default function AboutMe() {

    return (
        <Grid width='90%'  fontFamily='monospace'>
            <Box item sx={{color:'#37474f',  fontFamily:'monospace'}}>
                <Typography variant="body1" align="center" component="div">
                    Full Stack developer proactiva y eficiente, rápida para adquirir nuevos conocimientos, que puede adaptarse fácilmente a entornos de cambios constantes y sin miedo para trabajar bajo presión. Lista para integrarse en equipos multidisciplinarios y trabajar bajo metodologías agiles orientadas hacia objetivos.
                </Typography>
            </Box>
        </Grid>
    )
}