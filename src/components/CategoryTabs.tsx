import { NavLink } from "react-router-dom";
import type { Category } from "../types/recipe";
import "../styles/categories-tabs.css";

type Tab = {
    to: string;
    label: string;
    key?: Category;
};

const tabs: Tab[] = [
    { to: "/categories", label: "הכל" },
    { to: "/categories/starters", label: "מנות ראשונות", key: "starters" },
    { to: "/categories/mains", label: "מנות עיקריות", key: "mains" },
    { to: "/categories/desserts", label: "קינוחים", key: "desserts" },
];

export default function CategoryTabs() {
    return (
        <nav className="category-tabs" aria-label="סינון קטגוריות">
            {tabs.map((tab) => (
                <NavLink
                    key={tab.to}
                    to={tab.to}
                    end={tab.to === "/categories"}
                    className={({ isActive }) =>
                        `category-tab${isActive ? " is-active" : ""}`
                    }
                >
                    {tab.label}
                </NavLink>
            ))}
        </nav>
    );
}
