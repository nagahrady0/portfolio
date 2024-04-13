import React, { useRef , useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './contact.css';



import { FaWhatsapp , FaTelegram , FaFacebook, FaInstagram , FaTwitter , FaYoutube} from 'react-icons/fa';


const Contact = ()=> {
 
    useEffect(() => {
        AOS.init();
      }, [])
 	
 	
 	const handlelabel = ()=>{
 		if(event.target.value != ''){
 		event.target.classList.add('has-data');
 		}
 		else{
  		event.target.classList.remove('has-data');		
 		}
 	}
 	
 	
 	
 	
 	
  const form = useRef();
  let formError = [];

  const sendEmail = (e) => {
  
   	e.preventDefault();
	
	if(document.querySelectorAll('input')[0].value == "")
		formError.push("user empty");
	if(document.querySelectorAll('input')[1].value == "")
		formError.push("email empty");	
	if(document.querySelector('textarea').value == "")
		formError.push("message empty");			
	
	if(formError.length == 0){
	  	emailjs.sendForm('service_l6zyc5h', 'template_sdgzr85', form.current, 'KUFSDDPWFSLwpoQZJ')
	     	 .then((result) => {

		  reset();
		  showAlert("message sent successfully");
		  
	      }, (error) => {
		  console.log(error.text);
	      });
      }
      else{
      	
      showAlert(formError[0]);
      
      console.log(formError);
      formError = [];
      }
  }; 
  
  
  
  	
 	
 	
 const reset = ()=>{
 const input = document.querySelectorAll('input');
 input[0].value = "";
 input[1].value = "";
 
 const message = document.querySelector('textarea');
 message.value = "";
 }
 	
 	
 const showAlert = (e) => {
    Swal(e);
  };	
 	
 
 
 const phoneNumber = '01027149300'; // Replace with the actual phone number

  const openWhatsAppChat = () => {
    // Create a WhatsApp chat link
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    // Open the link in a new tab or window
    window.open(whatsappLink, '_blank');
  };
  
  
  

  const openTelegramChat = () => {
    // Create a Telegram chat link with a phone number
    const telegramLink = `https://t.me/add?phone=${encodeURIComponent(phoneNumber)}`;

    // Open the link in a new tab or window
    window.open(telegramLink, '_blank');
  };  
  
  	

  return (
    <>
    	<div className="contact">
    		<div className="container">
    			<h1> contact me</h1>
    			<p>
    				please fill out the form below to discuss any work opportunities
    			</p>
    			
    			
    			<form ref={form} onSubmit={sendEmail}>
    				<div className="custom-input" data-aos="fade-right">

    					<input type="text" onBlur={handlelabel}  name="user_name" />
    					<label>
    						username
    					</label>    					
    				</div>
    				
    				<div className="custom-input" data-aos="fade-left">
   				
    					<input type="email" onBlur={handlelabel}  name="user_email" />
    					<label>
    						email
    					</label>     					
    				</div>
    				
    				<div className="custom-input" data-aos="fade-right">
   				
    					<textarea onBlur={handlelabel} name="message" ></textarea>
    					<label>
    						message
    					</label>     					
    				</div>
    				
    				<input type="submit"  value="send" data-aos="fade-left" />
    			</form>
    			
    			
    			<div className="icons">
    					<FaWhatsapp className="custom-social-icon whats"  onClick={openWhatsAppChat}/>
    					<FaTelegram className="custom-social-icon telegram"  onClick={openTelegramChat} />
    					
    					<a href="https://www.facebook.com/nagah.rady.10" target="_blank">
    						<FaFacebook className="custom-social-icon face" />
    					</a>
    					
    					<a href="" target="_blank"> 
    						<FaTwitter className="custom-social-icon twitter" />
    					</a>
    					
    					<a href="" target="_blank"> 
    						<FaInstagram className="custom-social-icon insta" />
    					</a>
    					
    					<a href="" target="_blank"> 	
    						<FaYoutube className="custom-social-icon youtube" />
    					</a>	
    			</div>
    		</div>
    	</div>
    </>
  )
  
  
}

export default Contact;
