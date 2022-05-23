import './App.css';
import Navbar from './components/Navbar.js';
import Card from './components/Card';
import data from './components/data'

function App() {

  const travelCards = data.map(travel => {
    return <Card
    travel={travel}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <section className="travel-cards">
      {travelCards}
      </section>
    </div>
  );
}

export default App;
