import React from 'react';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <UserProfile 
        name="Irene Kilonzo"
        age={25}
        bio="Passionate front-end developer and lifelong learner."
      />
      <Footer />
    </div>
  );
}

export default App;