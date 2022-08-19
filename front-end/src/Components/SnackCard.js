import HeartHealth from './HeartHealth.js'

function SnackCard ({snack}) {

    return (
        <div>
        <ul>
            <li><img src={snack.image} alt={snack.name} /></li>
            <li>{snack.name}</li>
            <li>{snack.fiber}</li>
            <li>{snack.protein}</li>
            <li>{snack.added_sugar}</li>
            <li>{snack.is_healthy}  <HeartHealth snackHealth={snack}/></li>
        </ul>
    
        </div>  

    )

}


export default SnackCard;