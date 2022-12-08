import { Fragment } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Body from './Components/Body';
import Support from './Components/Support';
import Item4 from './Item/Item4';
import Blog from './Components/Blog';
import Line from './Line/Line';
import Pre_footer from './Components/Pre_footer';
import Footer from './Components/Footer';


function App() {
  return (
   <Fragment>
     <Nav/>
     <Body/>
     <Support/>
     <Item4/> 
     <Blog/>
     <Line/>
     <Pre_footer/>
     <Footer/>
   </Fragment>
   
  );
}

export default App;
