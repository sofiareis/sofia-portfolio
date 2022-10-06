import React from 'react'
import '../../App.css';
import './Moko.css';
import Footer from '../Footer';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import image from '../../images/moko2.png';

const useStyles = makeStyles((theme) => ({
  git2: {
    color: '#000',
  },
}));


function Moko() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className="moko-container">
          <h1>Moko</h1>
          <p>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={6} md={4}>
                <img style={{ paddingLeft: 8 }} src={image} alt="image" height={325} />
              </Grid>
              <Grid item xs={8}>
                <p style={{ paddingTop: 35, paddingLeft: 160, marginLeft: 30 }}>
                Inspired by the words local and markets, moko is an app that aims to promote sustainable development by minimizing CO2 emissions from food transportation and encouraging eating local and fresh produce. Moko also strives to encourage discovery and support for local businesses and foster community bonding. Through moko, users can buy and sell fresh produce within their local communities.
                Submitted to Pinnacle Hackathon 2021
                  </p>
                  </Grid>
            </Grid>
          </p>
          <div style={{ paddingBottom: 40, paddingTop: 50 }} className='code'>
            Checkout the code &nbsp;
                <a target="_blank" href='https://github.com/sofiareis/moko' className={classes.git2}>
              <i paddingRight='20px' class="fab fa-github fa-2x" ></i>
            </a>
          </div>
          <h2>How we built it</h2>
          <p>
          To bring our idea to life, our team used a variety of tools to create moko. For the frontend, Figma was used to plan and design the app flow. React Native and Android Studio were used to implement these designs and develop an interactive interface. The backend of this project was hosted on an Amazon EC2 server and it was built with node.js, SQL, S3 for image storage, and a Google Maps geocoding API.
          </p>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Moko
