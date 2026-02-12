import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import homeBg from '../assets/images/cover.png';
import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${homeBg})` }}>
                    <div className="hero-content fade-in">
                        <h1 className="hero-title text-serif">המתכונים של ג'וני</h1>
                        <p className="hero-subtitle text-serif">ספר מתכונים לזכרו</p>

                        <p className="hero-text">
                            ג׳וני אהב לאכול. באמת אהב.
                            לא רק את הטעם, אלא את כל מה שמסביב: הריח במטבח, הסירים על האש, הצלחות שנערמות על השולחן,
                            והשיחה שמתארכת בדיוק כשחותכים עוד פרוסה ועוד אחת.
                            <br />
                            באתר הזה אספנו את המתכונים של אלה, של המשפחה ושל האנשים שאהבו אותו,
                            המתכונים שהוא ביקש שוב ושוב, אלה שחיכו לו בסופי שבוע ואלה שתמיד נעלמו ראשונים.
                            <br />
                            כל מתכון כאן הוא לא רק הוראות ומצרכים, הוא רגע.
                        </p>
                        <Link to="/categories" className="hero-button">
                            לעיון במתכונים
                        </Link>
                    </div>
                </section>

                <section className="quote-section">
                    <blockquote className="quote">
                        "האוכל הכי טוב הוא זה שמבושל באהבה ונאכל יחד"
                    </blockquote>
                    <cite className="quote-author">
                        - ג'וני
                    </cite>
                </section>

                <hr className="divider" />

                <section className="categories-section">
                    <h2>מתכונים לפי קטגוריה</h2>
                    <h3>בחרו קטגוריה והתחילו לדפדף בטעמים שהוא הכי אהב</h3>
                    <div className="categories-grid">
                        <Link to="/categories/starters" className="category-card">
                            <img src="https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80" alt="" />
                            <h3>מנות ראשונות</h3>
                        </Link>
                        <Link to="/categories/mains" className="category-card">
                            <img src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80" alt="" />
                            <h3>מנות עיקריות</h3>
                        </Link>
                        <Link to="/categories/desserts" className="category-card">
                            <img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80" alt="" />
                            <h3>קינוחים</h3>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
