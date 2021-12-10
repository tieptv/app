import React from 'react';

function App() {
     const myFunction = () => {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.ghepchu.crud_example';
      }
  return (
    <div className="App" style={{height:'100%',overflow:'auto'}}>
      <h1>Game trò chơi ghép chữ</h1>
      <button type="button" onClick={myFunction}>Trang game trên google play</button>
    </div>
  );
}

export default App;
