import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

<<<<<<< HEAD
  const handleSubmit = (e) => {
    e.preventDefault();
=======
  const handleSubmit = (event) => {
    event.preventDefault(); // 
>>>>>>> 88a0050a03e5e51c49d765e9039a0d6cad74632e
    updateRecipe({ ...recipe, title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
<<<<<<< HEAD
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
=======
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
>>>>>>> 88a0050a03e5e51c49d765e9039a0d6cad74632e
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
