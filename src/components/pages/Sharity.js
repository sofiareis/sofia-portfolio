import React from 'react'
import '../../App.css';
import './Sharity.css';
import Footer from '../Footer';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import image from '../../images/sharity2.png';

const useStyles = makeStyles((theme) => ({
  git2: {
    color: '#000',
  },
}));


function Sharity() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className="sharity-container">
          <h1>Sharity</h1>
          <p>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={6} md={4}>
                <img style={{ paddingLeft: 8 }} src={image} alt="image" height={300} />
              </Grid>
              <Grid item xs={8}>
                <p style={{ paddingTop: 35, paddingLeft: 160, marginLeft: 30 }}>
                  
                  Inspired by the words: she, share, and charity, we created Sharity,
                   a female empowerment donation app. Sharity promotes women empowerment in 
                   the community and sustainability by encouraging users to donate their used 
                   or new items to local female’s shelters. An additional feature is that the 
                   app allows for charities to sort through donation items, to obtain items 
                   to match their needs and ensure quality. Additionally, our team is
                    passionate about raising awareness and bringing down the stigma
                    around menstruation products. As the developers of Sharity, we
                    have created our own fundraiser: Period Positivity, where users
                    can donate money to this cause and support local women's health.
                  </p>
                  </Grid>
            </Grid>
          </p>
          <div style={{ paddingBottom: 40, paddingTop: 50 }} className='code'>
            Checkout the code &nbsp;
                <a target="_blank" href='https://github.com/sofiareis/Sharity' className={classes.git2}>
              <i paddingRight='20px' class="fab fa-github fa-2x" ></i>
            </a>
          </div>
          <h2>Product Description</h2>
          <p>
          On the user side, Sharity allows users to connect to women shelters and donate clothing articles and period products.
                    <br></br>
                    <li>Users can take pictures of their items, upload them to the app, and donate to selected organizations.</li>
                    <li>Users can search local shelters on the built in maps function and they can also view each shelter’s donation wishlist.</li>
                    <li>Users also have access to the Period Positivity fundraiser, in which funds go towards purchasing period products for local Vancouver organizations.</li>
                    <br></br>
                    On the Charities side:
                    <li>Organizations can swipe left and right on donation items they wish accept or decline</li>
                    <li>They may chat with users about donation pickup/drop-off information</li>
                    <li>Organizations can also edit their account and donation wishlist</li>
            </p>
          <h2>Technologies</h2>
          <p>
            - Figma UI design <br></br>
            - React Native frontend <br></br>
            - Google Maps API to locate nearby shelters <br></br>
            - Node.js and Firebase backend<br></br>
          </p> 

          <h2>Prizes</h2>
          <p>
            - Pinnacle Prize: Top Project <br></br>
            - Hootsuite #SocialForGood Award <br></br>
            - Telus Women's Health Award (Best Pitch) <br></br>
          </p>

              
          
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Sharity
