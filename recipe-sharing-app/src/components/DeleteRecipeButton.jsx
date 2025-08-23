import { useRecipeStore } from '../store/recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/');
  };

  return <button onClick={handleDelete}>Delete</button>;
};

<<<<<<< HEAD
export default DeleteRecipeButton;
=======
export default DeleteRecipeButton;
>>>>>>> 88a0050a03e5e51c49d765e9039a0d6cad74632e
