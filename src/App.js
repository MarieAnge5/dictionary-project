import './App.css';
import logo from  "./logo.png"; 
import Dictionary from "./Dictionary"; 

export default function App() {
  return (
    <div className="App">
      <div className="Container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo"/>
      </header>
      <main>
        <Dictionary defaultKeyword="sunset"/>
      </main>
      <footer className="App-footer">
       <small> Coded by Marie Ange</small>
      </footer>
      </div>
    </div>
  );
}

