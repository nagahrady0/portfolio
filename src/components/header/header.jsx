
import './header.css';
import Image from '../../assets/person.png';
import {Link , Element} from 'react-scroll';
import hireme from '../../assets/hireme.png';

import { motion } from 'framer-motion';

const Header = ()=> {
 
	const txt =  "website";
	const second = "designer"
	const parentVarients = {
		hidden:{
			opacity:0 ,
		},
		visible:{
			opacity:1 ,
			transition:{
				staggerChildren:.1,
			}
		}
	};
	const childVarients = {
			hidden:{
			opacity:0 ,
		},
		visible:{
			opacity:1 ,
		}
	};
  return (
    <>
    	<div className="header">
    		<div className="container">
			<div className="col-left">
				<div> 	hello </div>
				<h1> i'm <span> Nagah</span> <br /> 
					<motion.span variants={parentVarients}  initial="hidden" animate="visible">
						{txt.split("").map((char , index)=>{
						return <motion.span variants={childVarients} key={index}>{char} </motion.span>
						})}
							&nbsp;
						
						{second.split("").map((char , index)=>{
						return <motion.span variants={childVarients} key={index}>{char} </motion.span>
						})}						
					</motion.span> 
				</h1>
				<p>
					i am a skilled and passionate web designer with experience in creating visually appealing 
					and user-friendly websites
				</p>
				<button>
					<img src={hireme} alt="hireme"/>
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
