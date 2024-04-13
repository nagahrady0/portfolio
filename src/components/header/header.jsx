
import './header.css';
import Image from '../../assets/person.png';
import {Link , Element} from 'react-scroll';

import Typical from 'react-typical';

import { IoBagSharp } from "react-icons/io5";

const Header = ()=> {
 
	
  return (
    <>
    	<div className="header">
    		<div className="container">
			<div className="col-left">
				<div> 	hello </div>
				<h1> 
					i'm 
					<Typical
					  steps={['Nagah Rady', 2000, 'a front end developer', 3000, 'web designer' , 3000]}
					  loop={Infinity}
					  wrapper="span"
					/>
					
				</h1>
				<p>
					i am a skilled and passionate web designer with experience in creating visually appealing 
					and user-friendly websites
				</p>
				<button>
					<IoBagSharp className="custom-icon-class"/>
					hire me
				</button>
			</div>
			<div className="col-right">
				<img src={Image} alt="person" />
			</div>
    		</div>
    	</div>
    </>
  )
  
  
}

export default Header;
