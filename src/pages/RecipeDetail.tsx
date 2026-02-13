import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import { recipes } from "../data/recipes";
import "../styles/RecipeDetail.css";
import { Clock, Utensils, Flame, BarChart } from "lucide-react";

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="container section text-center">
        <h2>מתכון לא נמצא</h2>
        <Link to="/categories">חזרה למתכונים</Link>
      </div>
    );
  }

  return (
    <>
      <Header />
      <article
        className="recipe-page container section fade-in"
        style={{ margin: "0 auto", padding: "0 12px" }}
      >
        <header className="recipe-header text-center">
          <h1 className="recipe-title text-serif">{recipe.title}</h1>
          <div className="recipe-meta">
            <span>
              {recipe.category === "starters"
                ? "מנה ראשונה"
                : recipe.category === "mains"
                  ? "מנה עיקרית"
                  : "קינוח"}
            </span>
          </div>
        </header>

        <div className="recipe-image-container">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="recipe-hero-image"
          />
        </div>

        <section className="recipe-story-section">
          <h2 className="story-title text-serif">הקשר של ג'וני למנה</h2>
          <p className="story-text">{recipe.story_about_johnny}</p>
        </section>

        <div className="recipe-content-grid">
          <aside className="recipe-sidebar">
            <div className="recipe-details-card">
              <div className="detail-item">
                <Utensils size={18} className="icon" />
                <strong>כמות:</strong> {recipe.servings}
              </div>
              <div className="detail-item">
                <Clock size={18} className="icon" />
                <strong>הכנה:</strong> {recipe.prep_time}
              </div>
              <div className="detail-item">
                <Flame size={18} className="icon" />
                <strong>בישול:</strong> {recipe.cook_time}
              </div>
              <div className="detail-item">
                <BarChart size={18} className="icon" />
                <strong>קושי:</strong>{" "}
                {Array(recipe.difficulty).fill("★").join("")}
              </div>
            </div>

            <div className="ingredients-section">
              <h3 className="section-title text-serif">מצרכים</h3>
              <ul className="ingredients-list">
                {recipe.ingredients.map((ing, idx) => (
                  <li key={idx} className="ingredient-item">
                    <input type="checkbox" id={`ing-${idx}`} />
                    <label htmlFor={`ing-${idx}`}>{ing}</label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <section className="instructions-section">
            <h3 className="section-title text-serif">אופן ההכנה</h3>
            <ol className="instructions-list">
              {recipe.instructions.map((inst, idx) => (
                <li key={idx} className="instruction-step">
                  <span className="step-number">{idx + 1}</span>
                  <p>{inst}</p>
                </li>
              ))}
            </ol>

            <div className="home-tip-box">
              <h4 className="tip-title text-serif">💡 טיפ של הבית</h4>
              <p>{recipe.home_tip}</p>
            </div>
          </section>
        </div>
      </article>
    </>
  );
};

export default RecipeDetail;
