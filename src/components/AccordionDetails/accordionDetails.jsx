import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './accordionDetails.css';
import Grid from '@mui/material/Grid'
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
        <div className="wrapperAccordionDetails">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1') }>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          
        >
          <Container maxwidth="lg">
            <Grid container spacing={2}>
            <Grid item xs={12} lg={4} >
          <Box className="boxDetails" sx={{}}>
            <img className="imgDetails" src={process.env.PUBLIC_URL + `/img/berlin.jpg`}/>
          </Box>
          </Grid>
          <Grid item xs={12} lg={8} >
          <Box className="headerDetailsCard" sx={{}}>
          <Box className="itineraryDetail"> 
          <Typography mx={0} sx={{ color: 'text.secondary' }}>Duration: 4 hours.</Typography>
          <Typography mx={0} sx={{ color: 'text.secondary' }}>Price: 5u$d</Typography>
          </Box> 
          <Box className="profileDetails"> 
            <img className="imgProfileDetails" src={process.env.PUBLIC_URL + `/img/profile/4.jpg`}/>
            <Typography mx={1} sx={{ color: 'text.secondary' }}>Greg Geller.</Typography>
            </Box>
          </Box>
          <Typography my={1} sx={{ color: 'text.secondary', fontWeight: 'bold' }}>Exciting time travel back to the German Democratic Republic.</Typography>
          <Typography sx={{ color: 'text.secondary' }}>The Wall and barbed wire shielded the GDR from the outside world. But what was everyday life like under socialism? Discover Berlin's largest and most diverse exhibition on the subject with more than 35 thematic areas and an original furnished tower block apartment! ​​​Under the scientific direction of the renowned historian Dr. Stefan Wolle we resurrect the past for you."</Typography>
          <Box className="bottomDetails"> 
          <Typography className="hashDetails" fontSize={12} my={1} sx={{ color: 'text.secondary' }}>#berlin #germany #history #wall</Typography>
          <Typography className="likeDetails" fontSize={12} my={1} sx={{ color: 'text.secondary' }}> <ThumbUpIcon className="iconLike"/>Roger and 1 more like this! </Typography>
          
          </Box>
          </Grid>
          </Grid>
          </Container>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sorry! We're under construction.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      
      </div>
    </div>
  );
}
