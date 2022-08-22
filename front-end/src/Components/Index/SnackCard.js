
import HeartHealth from '../HeartHealth.js';
import './IndexStyle.css'
import { Link } from 'react-router-dom'

function SnackCard({ snack }) {
    return (
        
        <section className="darn-snacks">
         
            <ul>
                
                
                <li>
                
                    <img className="main-snack-img"src={snack.image} alt={snack.name} />
                   
                </li>
                <main>
                <article>
                    <div className="Snack">
                
                <li>Fiber: {snack.fiber}</li>
                <li>Protein: {snack.protein}</li>
                <li>Added Sugar: {snack.added_sugar}</li>
                <h4>< HeartHealth healthCheck={snack.is_healthy} /> {snack.name}</h4>
                <Link to={`/snacks/${snack.id}`}>Nutritional Information</Link>
                </div>
                </article>
                </main>
            </ul>
           
        </section>
       
    );
}

export default SnackCard;