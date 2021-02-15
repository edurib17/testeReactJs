import React from 'react';
//Components
import Header from '../../components/header';
import Footer from '../../components/footer';
import SaleI from '../../components/sale';
import '../../App.css';

function Sale() {
  return (
    <div className="container">
      <Header />
      <SaleI/>
      <Footer />
    </div>

  );
}

export default Sale;
