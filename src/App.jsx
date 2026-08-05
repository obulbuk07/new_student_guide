import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Locations from './components/Locations'
import Important from './components/important'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Important
        title="Вартість, правила поселення і проживання."
        info="Деталі про вартість, правила поселення і проживання у гуртожитках читайте на офіційній сторінці студентського профспілкового комітету."
        link="https://www.ifnmu.edu.ua/home/public-information/student-trade-union/"
      />
      <Locations/>
    </>
  )
}

export default App
