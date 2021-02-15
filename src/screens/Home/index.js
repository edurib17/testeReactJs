import React from 'react';
//Components
import Header from '../../components/header';
import Footer from '../../components/footer';
import MainContent from '../../components/mainContent';
import '../../App.css';


function Home() {
  return (
    <div className="container">
      <Header />
      <MainContent/>
      <Footer />
    </div>

  );
}

export default Home;
