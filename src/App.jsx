
import './App.css';
import Card from './components/Card.jsx';
import Nav from './components/Nav.jsx';
import data from './data.js'

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className="app">
      <Nav />     
      {cards}
    </div>
  )
}

export default App
