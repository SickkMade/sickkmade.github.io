import CardSection from './componenets/cardSection'
import Header from './componenets/Header'
import ThinCenterBar from './componenets/ThinCenterBar'
import ObserverText from './componenets/ObserverText'
import './App.css'
import './css/variables.css'

function App() {
  return (
    <>
    <Header HeaderText={"sickkmade"}/>
    <section className="app--scrollsection">
    <ThinCenterBar>
    </ThinCenterBar>
    </section>
    <CardSection />
    </>
  )
}

export default App
