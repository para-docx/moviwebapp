import React from 'react';
import './App.css';
//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//components
import Header from './components';
import Home from './components/home';
import Movie from './components/Movie'
import NotFound from './components/NotFound';

//styles
import { GlobalStyle } from './GlobalStyles';


const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:movieId' element={<Movie />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
