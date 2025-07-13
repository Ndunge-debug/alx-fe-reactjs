import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <h1>User Profile</h1>

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
    </div>
  );
}

export default App;

