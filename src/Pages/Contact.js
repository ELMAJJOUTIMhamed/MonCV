// ContactPage.js
import React from 'react';
import Navigateur from '../Com/Navigation';
import '../Pages/Navigateur.css';

const ContactPage = () => {
    return (
        <div className="Contact-page">
            <Navigateur />
            <div className="content">
                <h1>Contactez-moi</h1>
                <br></br>
                <div className="contact-info">
                    <ContactItem
                        iconSrc="gmail-logo-16.png"
                        altText="Gmail"
                        contactText="mhamed.mjt18@gmail.com"
                    />
                    <br></br>
                    <ContactItem
                        iconSrc="Linkedin.png"
                        altText="LinkedIn"
                        contactText="https://www.linkedin.com/in/m-hamed-el-majjouti/"
                        isLink={true}  // Ajout de la propriété isLink
                    />
                    <br></br>
                    <ContactItem
                        iconSrc="tel.png"
                        altText="Tel"
                        contactText="0695758624"
                    />
                </div>
            </div>
        </div>
    );
};

const ContactItem = ({ iconSrc, altText, contactText, isLink }) => {
    const content = isLink ? (
        <a href={contactText} target="_blank" rel="noopener noreferrer">
            {contactText}
        </a>
    ) : (
        <p>{contactText}</p>
    );

    return (
        <div className="contact-item">
            <img src={iconSrc} alt={altText} className="contact-icon" />
            {content}
        </div>
    );
};

export default ContactPage;
