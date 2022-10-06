import React from 'react'
import '../../App.css'
import './Resume.css'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../Footer'
import Grid from '@material-ui/core/Grid';

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 4,
          borderColor: color,
      }}
  />
);

const VerticalLine = ({ color }) => (
  <vt
      style={{
          color: color,
          backgroundColor: color,
          height: 4
      }}
  />
);


function Resume() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <main>
        <div className='resume-container'>

          <p>
          <Grid container spacing={2}>
              <Grid item xs={3}>
                <h1 style={{paddingLeft: 50}}>Education</h1>
              </Grid>
              <Grid item xs={9}>
                <p style={{paddingLeft: 120, paddingBottom: 20, textAlign: 'justify', paddingRight: 30 }}>
                  Bachelor of Applied Science
                  <br></br><strong>Computer Engineering student at the University of British Columbia.</strong>
                  <br></br>Expected Graduation Date: 2023
                </p>
              </Grid>   
          </Grid>
          <ColoredLine color="green"/>
          </p>
          <p>
          <Grid container spacing={2}>
              <Grid item xs={3}>
                <h1 style={{paddingLeft: 50, paddingTop: 40}}>Technical Skills </h1>
              </Grid>
              <Grid item xs={9}>
                <p style={{paddingLeft: 120, paddingBottom: 20, textAlign: 'justify', paddingRight: 30 }}>
                  <li><strong>Programming Languages: </strong> C, C++, Python, Java, JavaScript, CSS, MATLAB, Assembly, Verilog, Dart
                  </li>
                  <li><strong>Backend: </strong> MySQL, Firebase, Flask, GraphQL, Prisma
                  </li>
                  <li><strong>Fronted: </strong> React, React Native, Flutter, Figma, HTML
                  </li>
                  <li><strong>Tools: </strong> Android Studio, Visual Studio, 
                  Eclipse, IntelliJ, SolidWorks, Microsoft Office, Airtable, GitHub, Git, Flutter, Squish, JIRA,
                  Ansys Lumerical Software
                  </li>
                  <li><strong>Operational Systems: </strong>Windows, Linux, macOS</li>
                  <li><strong>Hardware: </strong>Arduino, Raspberry Pi, DE1-SoC</li> 
              </p>
              </Grid>   
          </Grid>
          <ColoredLine color="green" />
          </p>
          <p>
        <Grid container spacing={2}>
              <Grid item xs={3}>
                <h1 style={{paddingLeft: 50, paddingTop: 190 }}>Work Experience</h1>
              </Grid>
              <Grid item xs={9}>
                <p style={{paddingLeft: 120, paddingBottom: 20, textAlign: 'justify', paddingRight: 30 }}>

                <p><strong>Ensemble Systems, Vancouver, BC</strong></p>
                
                <p style={{paddingBottom: 10}}><strong>Software Developer (Web and Mobile) - January, 2022 &ndash; August, 2022</strong></p>
                <li>Collaborated alongside two developers to build one of Ensemble’s internal web app using Javascript frontend and GraphQL and Prisma backend</li>
                <li>Used Flutter to build a media player mobile app, using cross platform as well as native Android and iOS code</li>
                <li>Worked on building the new Ensemble website using React (TypeScript, CSS, Tailwind)</li>
                <li>Worked on developing and automating the mail service for Ensemble’s employee web app using NestJS </li>
                <br></br>

                <p><strong>Ansys, Vancouver, BC</strong></p>
                
                <p style={{paddingBottom: 10}}><strong>R&D Verification Engineer - May, 2021 &ndash; December, 2021</strong></p>
                <li>Developed and maintained accurate and reliable automated tests in Python using Squish testing tool
                </li>
                <li>Gained a basic understanding of how to operate Ansys Lumerical software products</li>
                <li>Assisted the other teams with troubleshooting and recreating customer issues</li>
                <li>Identified and reported bugs using a defect tracking system and accurately verified fixes</li>
                <li>Performed manual software testing on release candidate software builds</li>
                <li>Supported improvements to the QA process, procedures, and infrastructure</li>

                <br></br>
                <p><strong>Integrated Renewal Program (IRP), Vancouver BC</strong></p>
                
                <p style={{paddingBottom: 10}}><strong>Learning Rover Team Lead - June, 2020 &ndash; December, 2020</strong></p>
                <li>Updated the database of UBC employees through
                  Airtable management by creating Python API scripts and constantly
                  updating them to match the given data</li>
                <li>Created Excel graphs based on Airtable information to clearly present 
                  data to the IRP community</li>
                <li>Led a team of 4 Co-op students to assist the UBC 
                  community on using Workday</li>
                <li>Attended weekly meetings with the Co-op students’ supervisor 
                  to give feedback about the tasks performed, discuss new assignments, 
                  and report and solve any issues</li>
                <li>Improved teamwork and adaptability skills by working alongside 20 Co-op students</li>
                <li>Used HTML to update websites by formatting the content and 
                  constantly updating pages</li>
                <li>Taught and assisted over 200 people on using Workday through video 
                  calls and tutorials</li>
              </p>
              </Grid>   
          </Grid>
          <ColoredLine color="green" />
          </p>
          <p>
        <Grid container spacing={2}>
              <Grid item xs={3}>
                <h1 style={{paddingLeft: 50, paddingTop: 90}}>Extra Curricular Experience</h1>
              </Grid>
              <Grid item xs={9}>
                <p style={{paddingLeft: 120, paddingBottom: 20, textAlign: 'justify', paddingRight: 30 }}>
                
                <p><strong>Women in Engineering (WiE), UBC </strong></p>
                <br></br>
                <p style={{paddingBottom: 10}}><strong>Communications and Marketing Coordinator (Executive Member) - September, 2019 &ndash; April, 2020</strong></p>
                <li>Promoted a strong brand for WiE through developing unified design for 
                  poster, online communication and photos</li>
                <li>Created and monitor social media and email campaigns </li>
                <li>Communicated with executives to determine and fulfill timelines 
                  for content creation and posting</li>
                <br></br>
                <p style={{paddingBottom: 10}}><strong>Professional Development Committee member - September, 2018 &ndash; April, 2019</strong></p>
                <li>Helped organize the Women in Science and Engineering (WiSE) event – a 
                  large mentoring gathering, which connects female students with female professionals in STEM areas.</li> 
              </p>
              </Grid>   
          </Grid>
          <ColoredLine color="green" />
          </p>
        </div>
      </main>
      <Footer/>
    </React.Fragment>
  )

}

export default Resume

