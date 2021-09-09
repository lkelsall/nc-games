import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { NavWrapper, HorizontalScroll, CategoryLink } from "./styled/Lib";

const Nav = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    getCategories()
      .then((categories) => {
        setCategories(categories);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);

  if (err) {
    return (
      <div>
        <p>{err.message}</p>
      </div>
    );
  }
  if (loading) return <div></div>;
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
