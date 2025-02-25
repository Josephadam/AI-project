import { useState } from 'react'
import './App.css'
import LivekitModal from './components/LivekitModal';

function App() {
  const [showSupport, setShowSupport] = useState(false);

  const handleSupportClick = () => {
    setShowSupport(true);
  }

  return (
    <div className='app'>
      <header className="header">
        <div className="logo">
          Autozone
        </div>
      </header>
      <main>
        <section className="hero">
          <h1>Get the right parts. Right Now!!</h1>
          <p>Get free next day delivery on Eligible orders</p>
          <div className="search-bar">
            <input type="text" placeholder="Enter Vehicle part number" />
            <button>Search</button>
          </div>
        </section>

        <button className="support-button" onClick={handleSupportClick}>
          Talk to a parts expert
        </button>
      </main>
      {showSupport && <LivekitModal setShowSupport={setShowSupport}/>}
    </div>
  )
}

export default App
