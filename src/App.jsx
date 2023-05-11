import './App.css'

import Title from './components/Title'
import Counter from './components/Counter'

import Fundo from './assets/fundo.png'
import useCountdown from './hooks/useCountdown'

function App() {
  // Digite logo após o useCountdown a o mês, dia, ano e o horário que quer a contagem
  const [day, hour, minute, second] = useCountdown("May 11, 2023 06:45:00")

  return (
    <div className='App' style={{backgroundImage: `url(${Fundo})` }}>
      <div className="container">
        <Title title="Cronômetro" />
        <div className="countdown_container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  )
}

export default App
