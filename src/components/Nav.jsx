import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";

const NavWrapper = styled.div`
  grid-area: nav;
  padding: 2.5%;
  border-top: 2px solid gold;
  background-color: #288046;
`;

const HorizontalScroll = styled.div`
  overflow: auto;
  white-space: nowrap;
`;

const CategoryLink = styled(Link)`
  padding: 0 0.5em;
  :link {
    color: white;
    text-decoration: none;
  }
  :visited {
    color: white;
    text-decoration: none;
  }
`;

const Nav = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
      setLoading(false);
    });
  }, []);

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
