import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';


const PrimaryLayout = (props) =>(

    <div>
    <Header />
    <div className="container">
    <div className="row justify-content-md-center">
      <div className={props.colum}>
      </div>
  {props.children}
    </div>
    </div>
    <Footer />
  
  </div>


);
export default PrimaryLayout;