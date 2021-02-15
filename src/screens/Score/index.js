import React from 'react';
//Components
import Header from '../../components/header';
import Footer from '../../components/footer';
import Score1 from '../../components/score';
import '../../App.css';

function Score() {
  return (
    <div className="container">
      <Header />
      <Score1/>
      <Footer />
    </div>

  );
}

export default Score;
