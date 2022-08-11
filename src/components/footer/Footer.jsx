import React from 'react';
import "./Footer.css";
import hugo from '../../media/hugo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h3>Contact me!</h3>
      </div>
      <div className="footer-sns">
        <div className="diseño"> By Hugo Carrasco</div>
        <img src={hugo} alt="hugo" id='hugo'/>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/hugo-carrasco-a03304219?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxoAx5tmaS3G0OAGOeGdIBw%3D%3D"
            target="_blank"
          >
            <i className="fab fa-linkedin linkedin "></i>
          </a>
          <a href="https://twitter.com/?lang=es" target="_blank">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer