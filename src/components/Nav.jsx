import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";

const Nav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);
  return (
    <div className="Nav">
      {categories.map((category) => (
        <Link to={`/reviews/category/${category.slug}`}>{category.slug}</Link>
      ))}
    </div>
  );
};

export default Nav;
