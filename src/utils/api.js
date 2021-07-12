import axios from "axios";

const reviewsAPI = axios.create({
  baseURL: "https://board-game-reviews.herokuapp.com/api/",
});

export const getCategories = async () => {
  const { data } = await reviewsAPI.get(
    "https://board-game-reviews.herokuapp.com/api/categories"
  );
  return data.categories;
};
