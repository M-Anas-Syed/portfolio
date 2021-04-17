import React from 'react';

function About(){
    return(
        <section className="about_container flex" id="about">
            <div className="about_card">
                <h1>
                    About
                </h1>
                <p className="about_p">
                    Welcome to my Portfolio! This is where you can take a look at the projects that i have been working on. 
                    I have always been passionate about using my creativity to build something from scratch ever since i started 
                    my coding journey nearly 3 years ago. After taking a Web Development course at University, i was fascinated 
                    and fell in love with it. I started creating websites using vanilla Javascript, CSS and HTML, then once i became 
                    comfortable with it, i moved on to different libraries and frameworks such as React and Django. Feel free to 
                    scroll around and check out my work.
                </p>
            </div>
        </section>
    );
}

export default About;