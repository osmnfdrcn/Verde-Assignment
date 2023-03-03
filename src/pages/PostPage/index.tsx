import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { AiOutlineEdit, AiOutlineClose } from "react-icons/ai";
import {
  Button,
  Spinner,
  Title,
  Comment,
  ConfirmationModal,
  Label,
  Input,
  TextArea,
  FormRow,
} from "../../components";

import { useAppSelector, RootState, useAppDispatch } from "../../state/store";
import { setOpenConfirmModal } from "../../state/slices/app/appSlice";
import {
  deletePost,
  getPostComments,
  getSinglePost,
  resetSinglePostState,
  updatePost,
} from "../../state/slices/posts/postSlice";

const PostPage = () => {
  const [action, setAction] = useState<number>();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isEditable, setIsEditable] = useState(false);

  const post = useAppSelector((store: RootState) =>
    store.posts.posts.find((post: IPost) => post.id == id)
  );
  const { isLoading, error, comments } = useAppSelector(
    (store: RootState) => store.posts
  );
  const [title, setTitle] = useState<string | undefined>(post?.title);
  const [body, setBody] = useState<string | undefined>(post?.body);

  const { isOpenConfirmModal } = useAppSelector(
    (store: RootState) => store.app
  );

  useEffect(() => {
    dispatch(getSinglePost(id as IPost["id"]));
    dispatch(getPostComments(id as IPost["id"]));

    return () => {
      dispatch(resetSinglePostState());
    };
  }, []);

  const handleTitleChange = (e: any) => setTitle(e.target.value);
  const handleBodyChange = (e: any) => setBody(e.target.value);
  const handleButtonClick = () => navigate("/");
  const handleButtonDeleteClick = () => {
    setAction(0);
    dispatch(setOpenConfirmModal(true));
  };
  const handleSavePostClick = () => {
    if (title && body) {
      setAction(1);
      dispatch(setOpenConfirmModal(true));
    }
  };
  const handletoggle = () => {
    setIsEditable((e) => !e);
  };
  if (isLoading) {
    <Spinner />;
  }
  if (error) {
    navigate("/");
  }

  return (
    <>
      {/* header */}

      <div className="bg-indigo-50 border flex items-center justify-between  h-10 py-7 px-4 sticky top-14 left-0 right-0">
        {/* home button and text on left */}
        <div className="flex items-center gap-4">
          <Button onClick={handleButtonClick} type="rounded" text="<" />
          <span className="text-xs lg:text-sm xl:text-lg">Back to Posts</span>
        </div>

        {/* buttons on right */}
        <div className="flex items-center gap-4">
          <Button
            onClick={handleButtonDeleteClick}
            type="light"
            text="Delete"
          />
        </div>
      </div>

      {/* post form */}
      <div className="flex flex-col border bg-slate-50 mt-12 p-6 min-h-full ">
        <div className="flex justify-end">
          {isEditable ? (
            <div className="flex gap-6 items-center">
              <Button onClick={handleSavePostClick} type="dark" text="Update" />
              <div
                className="cursor-pointer w-full"
                onClick={() => setIsEditable(false)}
              >
                <AiOutlineClose />
              </div>
            </div>
          ) : (
            <div className="text-2xl cursor-pointer" onClick={handletoggle}>
              {" "}
              <AiOutlineEdit />
            </div>
          )}
        </div>

        {!isEditable ? (
          <div className="p-4">
            <p className="uppercase text-stone-700  text-lg xl:text-xl pb-4">
              {title}
            </p>
            <p className="bio text-sm">{body}</p>
          </div>
        ) : (
          <>
            <FormRow classes="mt-6">
              <Label
                id="title"
                titleText="Title"
                classes="block mb-2 text-sm font-medium text-stone-600 "
              />
              <Input
                id="title"
                type="text"
                value={title}
                onChange={handleTitleChange}
                classes="block p-2.5 w-full text-sm text-stone-900 bg-gray-50 rounded-lg border border-stone-300"
              />
            </FormRow>

            <FormRow classes="mt-10">
              <Label
                id="body"
                titleText="Post Content"
                classes="block mb-2 text-lg font-medium text-gray-900"
              />
              <TextArea
                id="body"
                rows={14}
                value={body}
                onChange={handleBodyChange}
                classes="block p-2.5 w-full text-sm  text-stone-900 bg-gray-50 rounded-lg border border-stone-300"
              />
            </FormRow>
          </>
        )}
      </div>

      <CommentSection data={comments} />

      {/* modal container */}
      {isOpenConfirmModal && (
        <ConfirmationModal
          text="Please Confirm!"
          onClick={() => {
            action
              ? dispatch(
                  updatePost({
                    id: post?.id,
                    title,
                    body,
                    userId: post?.userId,
                  })
                )
              : dispatch(deletePost(id as IPost["id"]));
          }}
        />
      )}
    </>
  );
};

const CommentSection = ({ data }: any) => {
  return (
    <div className="border mt-10 flex flex-col items-center justify-center ">
      <Title text="COMMENTS" />
      {data.map((c: IComment) => {
        return <Comment comment={c} key={uuid()} />;
      })}
    </div>
  );
};

export default PostPage;
