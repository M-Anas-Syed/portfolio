import React from 'react';
import phone from './images/call.svg';
import whatsapp from './images/whatsapp.svg';
import email from './images/email.svg';

function Contact(){
    return(
        <section className="contactsec">
            <div>
                <h4>Contact Us</h4>
                <div className="contactsubsec">
                    <div>
                        <h1 className="contactheadings">Socials</h1>
                        <div className="socialicons">
                            <div className="icons">
                                <img className="contactimg" src={phone}></img>
                                <p className="socialp">+44 7934985618</p>
                            </div>
                            <div className="icons">
                                <img className="contactimg" src={email}></img>
                                <p className="socialp">manasafzal123@outlook.com</p>
                            </div>
                            <div className="icons">
                                <img className="contactimg" src={whatsapp}></img>
                                <p className="socialp">+44 7305410114</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="contactheadings">Based in Leicester, UK</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19373.10946663803!2d-1.139109083051795!3d52.630373213086024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48776123460408a7%3A0xddad62b795166ddf!2sLeicester%20LE1%207GN!5e0!3m2!1sen!2suk!4v1634172868416!5m2!1sen!2suk" width="100%" height="450" className="contactmap" allowFullScreen="" loading="lazy"></iframe>                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;