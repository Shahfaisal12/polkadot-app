import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Base from '../layout/Base';
import Home from '../pages/Home';
import Technology from '../pages/Technology';
import PageNotFound from '../elements/PageNotFound';
import Community from '../pages/Community';
import About from '../pages/About';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Build from '../pages/Build';


const Routs = () => {
  return (
    <>
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path='/' element={<Home />}/>
          <Route  path='/technology' element={<Technology />}/>
          <Route  path='/community' element={<Community />}/>
          <Route  path='/about' element={<About />}/>
          <Route  path='/blog' element={<Blog />}/>
          <Route  path='/contact' element={<Contact />}/>
          <Route  path='/build' element={<Build />}/>
          <Route path='/*' element={<PageNotFound />}/>
        </Routes>
      </Base>
     </BrowserRouter>
    </>
  )
}

export default Routs