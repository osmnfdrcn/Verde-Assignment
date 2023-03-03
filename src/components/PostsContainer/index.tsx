import { useNavigate } from "react-router-dom";
import { useAppSelector, RootState, useAppDispatch } from "../../state/store";
import { Skeleton, Pagination } from "../";

const PostsContainer = () => {
  const { isLoading } = useAppSelector((store: RootState) => store.posts);

  if (isLoading) {
    return <Skeleton />;
  }

  return <Pagination />;
};

export default PostsContainer;
