import React from 'react'
import '../../App.css';
import './Renew.css';
import Footer from '../Footer';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import image from '../../images/renew.png';

const useStyles = makeStyles((theme) => ({
  git2: {
    color: '#000',
  },
}));


function Renew() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className="renew-container">
          <h1>Renew</h1>
          <p>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={6} md={4}>
                <img style={{ paddingLeft: 8 }} src={image} alt="image" height={350} />
              </Grid>
              <Grid item xs={8}>
                <p style={{ paddingTop: 35, paddingLeft: 5, marginLeft: 10 }}>
                In light of the war in Ukraine today, millions of Ukranians have fled into neighboring countries into a frightening and uncertain future. Our team wanted to create something to help refugees in similar situations as they navigate life in a new, unfamiliar country.
                  </p>
                  </Grid>
            </Grid>
          </p>
          <div style={{ paddingBottom: 40, paddingTop: 10 }} className='code'>
            Checkout the code &nbsp;
                <a target="_blank" href='https://github.com/sofiareis/renew' className={classes.git2}>
              <i paddingRight='20px' class="fab fa-github fa-2x" ></i>
            </a>
          </div>
          <h2>What it does?</h2>
            <p>
            Our project, renew, is an app designed to provide support and resources for immigrants in a new country. The app name was chosen to represent the fact that we want to help refugees as they start a new life in a new country, hence renew. The app features a community function where users are grouped into communities based on where they came from and where they have immigrated to. Within these communities, users can post and comment about any questions or resources for users to learn from each other. Additionally, there is a map feature which filters for nearby food banks, hospitals, and areas with recent criminal activity.
            </p>
          <h2>Technologies</h2>
            <p>
                - Figma (UI/UX design) <br></br>
                - React Native and Android Studio (interactive interface) <br></br>
                - Redux (state management) <br></br>
                - Node.js (server-side platform)<br></br>
                - Firebase (cloud storage)<br></br>
                - Google Maps API<br></br>
            </p> 
          <h2>What's next for renew ?</h2>
            <p>
                - Language: View the entire app in your native language <br></br>
                - Financing: Helpful resources to help you get started on managing your finances <br></br>
                - Local laws and Rights: Resources to help you learn about local laws and rights) <br></br>
                - Culture: Upcoming events in your community<br></br>
                - Job portal: View local entry level job postings<br></br>
            </p>

              
          
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Renew
