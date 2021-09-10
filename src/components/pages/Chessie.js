import React from 'react'
import '../../App.css';
import './Chessie.css';
import Footer from '../Footer';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import image from '../../images/chessie.png';

const useStyles = makeStyles((theme) => ({
  git2: {
    color: '#000',
  },
}));


function Chessie() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className="chessie-container">
          <h1>Chessie</h1>
          <p>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={6} md={4}>
                <img style={{ paddingLeft: 30}} src={image} alt="image" height={390} />
              </Grid>
              <Grid item xs={8}>
                <p style={{ paddingTop: 35, paddingLeft: 30, marginLeft: 30 }}>
                <p>
                ChessMate is a one player chess engine where the user plays 
                against an AI opponent. Not only can the player play a game 
                of chess, they can save their games to replay for analysis 
                and pause games in the middle of playing. The majority of
                the processing is done on the ARM chip on the DE1-SoC with 
                rendering and move input being done on an Android phone. 
                The DE1 and the phone are supposed to communicate over Bluetooth. 
                </p>
                <br></br>
                <p>This project aims to attract tech savvy people who are interested in 
                learning how to play chess or improve their existing skill. Our design 
                takes into consideration that not everyone has a pre-existing knowledge of 
                chess, therefore it will perform move validation and automatically prevent 
                illegal moves from being played. </p>
                </p>
                </Grid>
            </Grid>
          </p>
          <div style={{ paddingBottom: 70 }} className='code'>
            Checkout the code &nbsp;
                <a target="_blank" href='https://github.com/sofiareis/ChessMate' className={classes.git2}>
              <i paddingRight='20px' class="fab fa-github fa-2x" ></i>
            </a>
          </div>

                <h2>Product Description</h2>
                <p>
                - Interactive user interface  <br></br>
                - AI provides potential moves  <br></br>
                - AI support for different levels of chess proficiency <br></br>
                - Chess timer that enforces users to think on their feet <br></br>
                - Ability to replay past games to allow users to analyse their strategy <br></br>
                </p>
                <h2>Technologies</h2>
                <p>
                - Android Studio for the frontent <br></br>
                - Node.js and MySQL backend  <br></br>
                - ARM chip on DE1-SoC <br></br>
                </p>
          
        </div>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Chessie
