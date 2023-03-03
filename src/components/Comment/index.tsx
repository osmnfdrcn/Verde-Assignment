import { v4 as uuid } from "uuid";

type PropsProps = {
  comment: IComment;
};

function Comment({ comment }: PropsProps) {
  return (
    <div className=" w-[75%] m-auto p-3  overflow-hidden ">
      <div className="wrapper bg-white flex p-3  shadow-md">
        <div className="w-6/6 info text-left text-gray-500">
          <div className="uppercase text-stone-700  text-lg pb-2">
            {comment.name}
          </div>
          <div className="bio text-sm">{comment.body}</div>
          <div className="name font-bold text-xs flex justify-start  pt-6">
            {comment.email}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
