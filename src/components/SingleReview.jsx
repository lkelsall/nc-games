import { useParams } from "react-router-dom";

const SingleReview = () => {
  const { review_id } = useParams();
  return (
    <div>
      <h1>Single Review {review_id}</h1>
    </div>
  );
};

export default SingleReview;
