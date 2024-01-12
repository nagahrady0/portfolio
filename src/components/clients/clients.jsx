
import './clients.css';

import walmart from '../../assets/walmart.png';
import adobe from '../../assets/adobe.png';
import microsoft from '../../assets/microsoft.png';
import facebook from '../../assets/facebook.png';



const Clients = ()=> {
 

  return (
    <>
    	<div className="clients">
		<div className="container">
			
			<h2> my clients </h2>
			<p>
				i have had the opportunity to work with a diverse group of companies. some of the notable 
				companies i have worked with includes  
			</p>
			<div>
				<img src={walmart} alt="walmart" />
				<img src={adobe} alt="adobe" />
				<img src={microsoft} alt="microsoft" />
				<img src={facebook} alt="facebook" />

			</div>	
						
		</div>
    	</div>
    </>
  )
  
  
}

export default Clients;
