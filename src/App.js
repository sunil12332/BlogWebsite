
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Newblog from './components/Newblog';
import NewImage from './components/NewImage';
import Gallery from './components/Gallery';


function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>} />
          <Route path="newblog" element={<Newblog/>} />
          <Route path="newimage" element={<NewImage/>} />
          <Route path="gallery" element={<Gallery/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
