import { useNavigate } from "react-router-dom";

type Props = {
  post: IPost;
};

const SinglePost = (props: Props) => {
  const { post } = props;
  const navigate = useNavigate();

  const handleClick = (id: IPost["id"]) => {
    navigate(`/posts/${id}`);
  };

  return (
    <div
      onClick={() => handleClick(post.id)}
      className="block p-6 min-w-lg bg-white border border-stone-100 shadow-md hover:bg-stone-100  min-h-full cursor-pointer"
    >
      <p className="mb-2 text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-slate-900 dark:text-white ">
        {post.title.slice(0, 20)}
        {`...`}
      </p>
      <p className=" text-gray-700 text-sm md:text-md lg:text-lg line-clamp-4 font-light ">
        {post.body.slice(0, 150)}
        {"..."}
      </p>
    </div>
  );
};

export default SinglePost;
