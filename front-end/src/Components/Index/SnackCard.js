import HeartHealth from '../HeartHealth.js';
import './IndexStyle.css'
import { Link } from 'react-router-dom'

function SnackCard({ snack }) {
	return (
		<div className="darn-snacks">
          
			<ul>
                
                <HeartHealth healthCheck={snack.is_healthy} />
				<li>
              
					<img src={snack.image} alt={snack.name} />
                   
				</li>
				<h4>Name: <a className="links"href={`/snacks/${snack.id}`}> &nbsp;{snack.name}</a></h4>
				<li>Fiber: {snack.fiber}</li>
				<li>Protein: {snack.protein}</li>
				<li>Added Sugar:{snack.added_sugar}</li>
				
			
			</ul>
		</div>
	);
}

export default SnackCard;
