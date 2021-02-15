import React from 'react';
//Components
import Header from '../../components/header';
import Footer from '../../components/footer';
import Alphabet from '../../components/alphabetic';
import '../../App.css';

function Alphabetic() {
  return (
    <div className="container">
      <Header />
      <Alphabet/>
      <Footer />
    </div>

  );
}

export default Alphabetic;
