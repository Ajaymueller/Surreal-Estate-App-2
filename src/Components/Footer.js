import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer_content">
                <li className="footer__item" data-testid="footer-id">
                    Aidan Mueller, 2020</li>
            </ul>
        </div>
    );
};

export default Footer;