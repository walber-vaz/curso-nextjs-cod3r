/*
  <div>
    <span></span>
  </div>
*/

export default function lista1() {
  return (
    <div>
      {genSpan(10)}
    </div>
  )
}

function genSpan(numbers) {
  const array = Array(numbers).fill(0);
  return array.map((_, i) => <span key={i}>{i + 1},</span>);
}
