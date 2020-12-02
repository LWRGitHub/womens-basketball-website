import React from 'react';

const About = () => (
    <div class="container mb-3">
        <div class="row">
            <div class="col col-md-7 p-1">
                <div class='p-5 bg-light rounded'>
                    <img id="me" className='position-absolute rounded-circle' src='images/logan-reynolds.jpg' style={{width:'80px'}}/>
                    <img id="jt" className='position-absolute rounded-circle' src='images/jt.png' style={{width:'80px'}}/>
                    <br />
                    <p>Hello,</p>
                    <p>Thank you for visiting our website! We hope you have enjoyed the information that you have found and perhaps it has been useful for you. After all we worked very hard on this project and would hope that others would benefit from it other than ourselves.</p>
                    <p>Jordan Torres has written most of the content for this website although some was written by Logan Reynolds. As for the web development most of that was done by Logan Reynolds in a little bit was done by Jordan Torres. </p>
                    <p>We appreciate your visit,</p>
                    <p className='m-0'>Logan Reynolds & Jordan Torres</p>
                </div>
            </div>
            <div class="col-12 col-md-5 p-1">
                <img class="rounded img-fluid" src='#' />
            </div>
        </div>
    </div>
)

export default About;