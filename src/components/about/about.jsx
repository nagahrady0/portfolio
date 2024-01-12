
import './about.css';
import UI from '../../assets/ui-design.png';
import website from '../../assets/website-design.png';
import app from '../../assets/app-design.png';


const About = ()=> {
 

  return (
    <>
    	<div className="about">
		<div className="container">
			
			<div>
				what i do
			</div>
			<p>
				i am a skilled and passionate web designer with experience in creating visually appealing 
				and user-friendly websites. ihave a strong understanding of design and a keen eye for detail 
				i am proficient in HTML , CSS and javascript as well as design software such a adobe photoshop
				and illustrator			
			</p>
			
			<div>
				<div className="icon">
					<img src={UI} alt="image"/>
				</div>
				<div>
					<h2>
						ui/ux design	
					</h2>
					<p>
						this is a demo text , you can write your content here
					</p>
				</div>
			</div>
			<div>
				<div className="icon">
					<img src={website} alt="image"/>
				</div>
				<div>
					<h2>
						website design	
					</h2>
					<p>
						this is a demo text , you can write your content here
					</p>
				</div>
			</div>	
			<div>
				<div className="icon">
					<img src={app} alt="image"/>
				</div>
				<div>
					<h2>
						App design	
					</h2>
					<p>
						this is a demo text , you can write your content here
					</p>
				</div>
			</div>					
		
		
		</div>
    	</div>
    </>
  )
  
  
}

export default About;
