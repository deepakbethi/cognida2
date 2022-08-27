import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './navbar';
import Drop from './body';


function Home() {
  return (
    <div  >
      <Nav/>
      <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:"180px"
}}>
  <div>
  <Drop/>
  
  </div>
  </div>
  </div>
  
  



  

   
  );
}

export default Home;
