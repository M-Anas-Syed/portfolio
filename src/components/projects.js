import React from 'react';
import easybank from './images/easybank.png';
import todo from './images/todo.png';
import countdown from './images/countdown.png';
import todo_react from './images/todo-react.png';
import rango from './images/rango.png';

function Projects(){
    return(
        <section className="bgcolour">
            <h2>Projects</h2>
            <div className="projects_container project_flex">

                <div className="project_div">
                    <div id="easybank" className="adjusted_padding p_padding_right">
                        <div className="cards">
                            <h3 className="desktop">EasyBank</h3>
                            <p className="projects_p">
                                Welcome to the world of online digital banking! Easybank gives you the best online banking experience. 
                                This project is a landing page and was a challenge created by Frontend Mentor. It was built using 
                                Vanilla Javascript, CSS and HTML. This single page website is mobile and tablet friendly. Click on the 
                                image to visit the website. <br /><a href="https://github.com/M-Anas-Syed/easybank" target="_blank" rel="noreferrer">GitHub Link</a>
                            </p>
                        </div>
                    </div>
                    <div>
                        <a href="https://easybank-ebon.vercel.app/" target="_blank" rel="noreferrer">
                            <img src={easybank} alt="Easybank"></img>
                        </a>
                    </div>
                </div>
                
                
                <div className="project_div">
                    <div>
                        <a href="https://anasafzal.pythonanywhere.com/" target="_blank" rel="noreferrer">
                            <img src={rango} alt="Rango"></img>
                        </a>
                    </div>
                    <div id="rango" className="adjusted_padding p_padding_left">
                        <div className="cards">
                            <h3 className="desktop">Rango</h3>
                            <p className="projects_p">
                                Rango is a multifunctional web application that was made using Django framework. It can be used to 
                                create category folders, in which web pages can be added and/or removed and also keeps track of the 
                                number of views each webpage gets. Rango also makes use of user authentication which means that users 
                                can create accounts, login and logout. <br /><a href="https://github.com/M-Anas-Syed/tango_with_django_project" target="_blank" rel="noreferrer">GitHub Link</a>
                            </p>
                        </div>
                    </div>
                </div>
                
                
                <div className="project_div">
                    <div id="todo" className="adjusted_padding p_padding_right">
                        <div className="cards">
                            <h3 className="desktop">Todo</h3>
                            <p className="projects_p">
                                Todo is an app that lets you create and edit lists. It was also a challenge from Frontend Mentor and was 
                                created using only Vanilla Javascript, CSS and HTML. This app has changeable light and dark themes and is 
                                mobile friendly too. List items can be added and removed and the list view can be changed from active items 
                                to completed items. <br /><a href="https://github.com/M-Anas-Syed/todo_project" target="_blank" rel="noreferrer">GitHub Link</a>
                            </p>
                        </div>
                    </div>
                    <div>
                        <a href="https://todo-project-pi.vercel.app/" target="_blank" rel="noreferrer">
                            <img src={todo} alt="Todo"></img>
                        </a>
                    </div>
                </div>
                
                
                <div className="project_div">
                    <div>
                        <a href="https://todo-react-rouge.vercel.app/" target="_blank" rel="noreferrer">
                            <img src={todo_react} alt="Todo with React"></img>
                        </a>
                    </div>
                    <div id="todoreact" className="adjusted_padding p_padding_left">
                        <div className="cards">
                            <h3 className="desktop">Todo with React</h3>
                            <p className="projects_p">
                                This is also a todo app where you can create and edit lists but it was built using React. It has similar 
                                functionalities such as adding and removing items, changeable list views. The app also makes use of local 
                                storage in order to save the list. <br /><a href="https://github.com/M-Anas-Syed/todoreact/tree/main/todo_react" target="_blank" rel="noreferrer">GitHub Link</a>
                            </p>
                        </div>
                    </div>
                </div>
               
                

                <div className="project_div">
                    <div id="countdown" className="adjusted_padding p_padding_right">
                        <div className="cards">
                            <h3 className="desktop">Countdown</h3>
                            <p className="projects_p">
                                Countdown is an app that displays the remaining time for a website to be launched. It was created using 
                                Vanilla Javascript, CSS, HTML and was a challenge from Frontend Mentor. It has a cool animation with every 
                                passing moment and is also mobile friendly. <br /><a href="https://github.com/M-Anas-Syed/countdown" target="_blank" rel="noreferrer">GitHub Link</a>

                            </p>
                        </div>
                    </div>
                    <div>
                        <a href="https://countdown-gules.vercel.app/" target="_blank" rel="noreferrer">
                            <img src={countdown} alt="Countdown"></img>
                        </a>
                    </div>
                </div>
                
                
            </div> 
        </section>
    );
}

export default Projects;