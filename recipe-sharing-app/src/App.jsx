import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <h1>🍲 Recipe Sharing App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

