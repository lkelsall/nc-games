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

export const getSingleReview = async (review_id) => {
  const { data } = await reviewsAPI.get(`/reviews/${review_id}`);
  return data.review;
};

export const getComments = async (review_id) => {
  const { data } = await reviewsAPI.get(`/reviews/${review_id}/comments`);
  return data.comments;
};
