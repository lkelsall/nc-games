import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { NavWrapper, HorizontalScroll, CategoryLink } from "./styled/Lib";

const Nav = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  return (
    <NavWrapper>
      <HorizontalScroll>
        {categories.map((category) => (
          <CategoryLink
            key={category.slug}
            to={`/reviews/category/${category.slug}`}
          >
            {category.slug[0].toUpperCase() + category.slug.slice(1)}
          </CategoryLink>
        ))}
      </HorizontalScroll>
    </NavWrapper>
  );
};

export default Nav;
