export default function jsx4() {
  const subtitle = "Estou no JSX";
  const valores = {
    valor: 30,
    min: 1,
    max: 10
  }

  return (
    <>
      <h1>jsx4</h1>
      <p>{subtitle}</p>
      <h3>{entre({ ...valores })}</h3>
    </>
  )
}

function entre({ valor, min, max }) {
  if (valor >= min && valor <= max) {
    return "Sim";
  }

  return "Não";
}
