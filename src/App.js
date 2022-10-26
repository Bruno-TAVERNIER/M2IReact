import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Table from './Components/Table';
import React from 'react';

function App() {

  return (
    <div className="App">
      <ErrorBoundary>
        <Header logo={ logo } titre="Mon Titre" slogan="Mon Slogan" />
        <Navigation />
        <h1>Ma page d'accueil</h1>
        <Table />
        <Footer mentions='ml.html' />
      </ErrorBoundary>
    </div>
  );
}

export default App;
//création d'un "contexte";
export const ThemeContext = React.createContext({color: 'light', background: 'dark'});
