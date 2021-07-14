import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";

const NavWrapper = styled.div`
  grid-area: nav;
  padding: 2.5%;
`;

const HorizontalScroll = styled.div`
  overflow: auto;
  white-space: nowrap;
`;

const CategoryLink = styled(Link)`
  padding: 2.5%;
`;

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <NavWrapper>
      <HorizontalScroll>
        {categories.map((category) => (
          <CategoryLink
            key={category.slug}
            to={`/reviews/category/${category.slug}`}
          >
            {category.slug}
          </CategoryLink>
        ))}
      </HorizontalScroll>
    </NavWrapper>
  );
};

export default Nav;
