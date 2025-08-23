import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
<<<<<<< HEAD
=======
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';
>>>>>>> 88a0050a03e5e51c49d765e9039a0d6cad74632e

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
<<<<<<< HEAD
                <RecipeList />
=======
                <SearchBar />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
>>>>>>> 88a0050a03e5e51c49d765e9039a0d6cad74632e
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

