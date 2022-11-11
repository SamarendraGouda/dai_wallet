import React from 'react';
import "./App.css";


const App = () => {

  return (
    <div>
      <nav className='nav'>
        <div>
          DAI Wallet
        </div>
      </nav>
      <div className='body'>
        <div className='container'>
          <h3>Welcome, user!</h3>
          <img className="image" src='https://upload.wikimedia.org/wikipedia/commons/e/e7/Dai_Logo.png'/>
          <h2>99999.25 DAI</h2>
          <form className='form'>
            <input placeholder='Address'></input>
            <input placeholder='Amount'></input>
            <button>Pay</button>
          </form>
        </div>
      </div>
    </div>

    
  );
};

export default App;