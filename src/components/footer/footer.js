import Behance from './icons/behanse';
import Facebook from './icons/facebook';
import Github from './icons/github';
import Instagram from './icons/instagram';
import Linkedin from './icons/linkedin';
import Telegram from './icons/telegram';
import Upwork from './icons/upwork';

import clutch from './img/clutch-logo.png'
import google from './img/google-partner-logo.png'

function Footer() {
  return (
    <footer className='footer'>
      <div className="confident">
        <p>Політика конфіденційності</p>
        <p>© Galaxy IT 2024</p>
      </div>
      <ul className="social">
        <li className="social_item"><a href="https://www.behance.net/GalaxyIT" className="social_link"><Behance/></a></li>
        <li className="social_item"><a href="https://www.upwork.com/ag/galaxy/" className="social_link">{<Upwork/>}</a></li>
        <li className="social_item"><a href="https://t.me/hello_galaxy_bot" className="social_link">{<Telegram/>}</a></li>
        <li className="social_item"><a href="https://www.facebook.com/GalaxyITcompany" className="social_link">{<Facebook/>}</a></li>
        <li className="social_item"><a href="https://www.linkedin.com/in/vitalii-yakymenko/" className="social_link">{<Linkedin/>}</a></li>
        <li className="social_item"><a href="https://www.instagram.com/galaxy_it_company" className="social_link">{<Instagram/>}</a></li>
        <li className="social_item"><a href="https://github.com/Galaxy-IT" className="social_link">{<Github/>}</a></li>
      </ul>

      <div className="clutch">
        <img src={clutch} alt="clutch" className="clutch_img" />
        <img src={google} alt="google" className="google_img" />
      </div>


    </footer>
  )
}

export default Footer;