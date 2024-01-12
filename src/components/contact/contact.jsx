import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert';


import './contact.css';

import face from '../../assets/facebook-icon.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import insta from '../../assets/instagram.png';


const Contact = ()=> {
 
 	
 	
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
 	
 	
 	
 	

  return (
    <>
    	<div className="contact">
    		<div className="container">
    			<h1> contact me</h1>
    			<p>
    				please fill out the form below to discuss any work opportunities
    			</p>
    			
    			
    			<form ref={form} onSubmit={sendEmail}>
    				<div className="custom-input">

    					<input type="text" onBlur={handlelabel}  name="user_name" />
    					<label>
    						username
    					</label>    					
    				</div>
    				
    				<div className="custom-input">
   				
    					<input type="email" onBlur={handlelabel}  name="user_email" />
    					<label>
    						email
    					</label>     					
    				</div>
    				
    				<div className="custom-input">
   				
    					<textarea onBlur={handlelabel} name="message" ></textarea>
    					<label>
    						message
    					</label>     					
    				</div>
    				
    				<input type="submit" />
    			</form>
    			
    			
    			<div className="icons">
    				<a href="">
    					<img src={face} alt="face" />
    				</a>
    				<a href="">
    					<img src={twitter} alt="twitter" />
    				</a>
    				<a href="">
    					<img src={youtube} alt="youtube" />
    				</a>
    				<a href="">
    					<img src={insta} alt="insta" />
    				</a>    				    				    				
    				
    			</div>
    		</div>
    	</div>
    </>
  )
  
  
}

export default Contact;
