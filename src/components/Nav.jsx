import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";
import HorizontalScroll from "./HorizontalScroll";

const Nav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);
  return (
    <div className="Nav">
      <HorizontalScroll>
        {categories.map((category) => (
          <Link
            className="category-link"
            key={category.slug}
            to={`/reviews/category/${category.slug}`}
          >
            {category.slug}
          </Link>
        ))}
      </HorizontalScroll>
    </div>
  );
};

export default Nav;
