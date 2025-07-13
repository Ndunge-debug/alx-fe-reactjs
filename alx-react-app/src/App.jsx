import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div className="App">
      <Header />
      
      <WelcomeMessage />

      <MainContent />

      <h2>Featured Users</h2>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Irene" 
        age="24" 
        bio="React learner, future frontend queen 👑" 
      />

      <Footer />
    </div>
  );
}

export default App;



