

export default function Snack({ snack }) {
  return (
    <div className='snack-card'>
      <image className='snack'>{snack.image}</image>
      <p>{snack.name}</p>
      <p>{snack.fiber}</p>
      <p>{snack.protein}</p>
      <p>{snack.is_healthy ? '❤️' : 'nope'}</p>
    </div>
  );
}
