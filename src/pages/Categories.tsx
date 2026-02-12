import { useEffect } from "react";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import { recipes } from "../data/recipes";
import type { Category } from "../types/recipe";
import CategoryTabs from "../components/CategoryTabs";
import { useParams, Link } from "react-router-dom";
import "../styles/Categories.css";

export default function Categories() {
    const { category } = useParams<{ category?: Category }>();

    const categories: { key: Category; label: string }[] = [
        { key: "starters", label: "מנות ראשונות" },
        { key: "mains", label: "מנות עיקריות" },
        { key: "desserts", label: "קינוחים" },
    ];

    const isValidCategory =
        !category || categories.some((c) => c.key === category);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [category]);

    const filteredRecipes = category
        ? recipes.filter((r) => r.category === category)
        : recipes;

    const pageTitle = category
        ? categories.find((c) => c.key === category)?.label ?? "קטגוריה"
        : "המתכונים של ג'וני";

    return (
        <>
            <Header />
            <main className="categories-page container section">
                <h1 className="page-title text-center text-serif fade-in">{pageTitle}</h1>

                <CategoryTabs />

                {!isValidCategory ? (
                    <div className="text-center" style={{ marginTop: 24 }}>
                        <p>קטגוריה לא נמצאה.</p>
                        <Link to="/categories">חזרה לכל הקטגוריות</Link>
                    </div>
                ) : (
                    <div className="recipes-grid">
                        {filteredRecipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </div>
                )}
            </main>
        </>
    );
}
