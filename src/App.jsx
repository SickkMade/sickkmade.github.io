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
    <ThinCenterBar>
      <ObserverText innerText={"Below Are some of my projects"}/>
      <ObserverText innerText={"Scroll down and click on the github pages button to see"}/>
      <ObserverText innerText={"Click on my name at the top for my github profile"}/>
      <ObserverText innerText={"This is a test for text scrolling in"}/>
      <ObserverText innerText={"Okay im done :P"}/>
    </ThinCenterBar>
    <CardSection />
    </>
  )
}

export default App
