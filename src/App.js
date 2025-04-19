import React from 'react';
import Card from './components/Card'; // Importing the Card component
import Header from './components/Header'; // Importing the Header component
import Footer from './components/Footer'; // Importing the Footer component

const App = () => {
  return (
    <div>
      <Header />
      
      <div>
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </div>
  );
};

export default App;
