import axios from "axios";

const reviewsAPI = axios.create({
  baseURL: "https://board-game-reviews.herokuapp.com/api/",
});

export const getCategories = async () => {
  const { data } = await reviewsAPI.get("/categories");
  return data.categories;
};

export const getReviews = async (category, sortBy, sortOrder) => {
  const { data } = await reviewsAPI.get("/reviews", {
    params: { category: category, sort_by: sortBy, order: sortOrder },
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

export const patchReviewVotes = async (review_id) => {
  await reviewsAPI.patch(`/reviews/${review_id}`, { inc_votes: 1 });
};

export const postComment = async (review_id, user, comment) => {
  const { data } = await reviewsAPI.post(`/reviews/${review_id}/comments`, {
    username: user,
    body: comment,
  });
  return data.comment;
};

export const patchCommentVotes = async (comment_id) => {
  await reviewsAPI.patch(`/comments/${comment_id}`, { inc_votes: 1 });
};
