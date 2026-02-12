import type { Recipe } from '../types/recipe';
import { Link } from 'react-router-dom';
import '../styles/RecipeCard.css';

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    return (
        <div className="card">
            <div className="card-image-wrap">
                <img src={recipe.image} alt={recipe.title} className="card-image" />
            </div>
            <div className="card-content">
                <h3 className="card-title text-serif">{recipe.title}</h3>
                <p className="card-story">"{recipe.story_about_johnny.slice(0, 80)}{recipe.story_about_johnny.length > 80 ? '...' : ''}"</p>
                <Link to={`/recipe/${recipe.id}`} className="card-button">
                    למתכון
                </Link>
            </div>
        </div>
    );
};

export default RecipeCard;
