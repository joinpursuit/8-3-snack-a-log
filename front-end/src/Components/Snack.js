import { Link } from 'react-router-dom';

export default function Snack({ snack }) {
  return (
    <div className='allsongs'>
      <image className='snack'>{snack.image}</image>
      <p>{snack.name}</p>
      <p>{snack.fiber}</p>
      <p>{snack.protein}</p>
      <p>{snack.is_healthy ? '❤️' : 'nope'}</p>
    </div>
  );
}
