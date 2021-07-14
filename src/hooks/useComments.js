import { useEffect, useState } from "react";
import { getComments } from "../utils/api";

const useComments = (review_id) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id]);

  return { comments };
};

export default useComments;
