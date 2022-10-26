import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Composant1 from './Components/Composant1';
import Composant2 from './Components/Composant2';
//pour redux, il faut un store et provider
import store from './Redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store } >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App /> } />
        <Route path='/p1' element={<Page1 />} />
        <Route path='/p2' element={<Page2 />} />
        <Route path='/p3' element={<Page3 />} />
        <Route path='/p3/:id' element={<Page3 />} />
        <Route path='/p3/:id/:type' element={<Page3 />} />
        <Route path='/p4' element={ <Page4 /> } >
          <Route path='s1' element= { <Composant1 /> } />
          <Route path='s2' element= { <Composant2 /> } />
        </Route>
        <Route path="*" element = {<main style={{ padding: "1rem"}}>
                                    <p>There's nothing here...</p>
                                  </main>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
