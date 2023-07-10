
import "./Footer.css";

function Footer() {
  return (
      <div className="footer">
      <h1 >Author: Ghofran Daradkh</h1>
     <a className="media" href="https://www.facebook.com/"><img src="../facebook.png"  style={{ width: '40px', height: '40px' }}/></a> 

     <a  className="media" href="https://www.instagram.com/"><img src="/instagram.png"  style={{ width: '40px', height: '40px' }}/></a> 

     <a className="media"  href="https://twitter.com/i/flow/login?redirect_after_login=%2F"><img src="./twitter.png" style={{ width: '40px', height: '40px' }} /></a> 
      
    </div>
  );
}

export default Footer;
