import axios from "axios";

const reviewsAPI = axios.create({
  baseURL: "https://board-game-reviews.herokuapp.com/api/",
});

export const getCategories = async () => {
  const { data } = await reviewsAPI.get("/categories");
  return data.categories;
};

export const getReviews = async (category) => {
  const { data } = await reviewsAPI.get("/reviews", {
    params: { category: category },
  });
  return data.reviews;
};
