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
                            <img className="contactimg" src={phone}></img>
                            <p className="socialp">+44 7762136905</p>
                            <img className="contactimg" src={whatsapp}></img>
                            <p className="socialp">+44 7305410114</p>
                            <img className="contactimg" src={email}></img>
                            <p className="socialp">manasafzal123@outlook.com</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="contactheadings">Based in Leicester</h1>
                        [um-iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.722292436426!2d-1.1257624120233358!3d52.628862422338486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48776123460408a7%3A0xddad62b795166ddf!2sLeicester%20LE1%207GN!5e0!3m2!1sen!2suk!4v1634169933640!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"]
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;