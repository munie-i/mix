import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Componenets/NavBar';
import Header from './Componenets/Header';
import Home from './Componenets/Home';
import Footer from './Componenets/Footer';
import TVShow from './Componenets/TVShow';
import Animation from './Componenets/Animaiton';
import Movies from './Componenets/Movies';
import Show from './Componenets/Show'
import Seasons from './Componenets/Seasons';
import WatchEp from './Componenets/WatchEp';
import Search from './Componenets/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <NavBar />
          <Header />
          <Home />
          <Footer />
          </>
        } />
        <Route path='/movies' element={
          <>
          <NavBar />
          <Header />
          <Movies />
          <Footer />
          </>
        } />
        <Route path='/tv-show' element={
          <>
          <NavBar />
          <Header />
          <TVShow />
          <Footer />
          </>
        } />
        <Route path='/animation' element={
          <>
          <NavBar />
          <Header />
          <Animation />
          <Footer />
          </>
        } />
        <Route path='/show/:id' element={
          <>
          <NavBar />
          <Show />
          <Footer />
          </>
        } />
        <Route path='/show/:id/s/:id' element={
          <>
          <NavBar />
          <Seasons />
          <Footer />
          </>
        } />
        <Route path='/show/:id/s/:id/e/:id' element={
          <>
          <NavBar />
          <WatchEp />
          <Footer />
          </>
        } />
        <Route path='/search' element={
          <>
          <NavBar />
          <Search />
          <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
