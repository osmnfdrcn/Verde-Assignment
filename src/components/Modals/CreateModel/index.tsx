import { useState } from "react";
import { Button, Label, Input, TextArea } from "../../";
import { TfiClose } from "react-icons/tfi";
import { createPost } from "../../../state/slices/posts/postSlice";
import { setOpenCreateModal } from "../../../state/slices/app/appSlice";
import {
  useAppDispatch,
  useAppSelector,
  RootState,
} from "../../../state/store";

const CreateModel = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store: RootState) => store.users);
  const isButtonDisabled = title === "" || body === "";

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleSaveButtonClick = () => {
    dispatch(
      createPost({
        userId: user.id,
        title,
        body,
      })
    );
    dispatch(setOpenCreateModal(false));
  };

  return (
    <>
      <div className="fixed inset-0 bg-[rgba(0,0,0,.4)] z-[1000]"></div>

      <div className="max-w-2xl  w-full rounded-md fixed top-[15%] left-1/2 -translate-x-1/2 bg-white z-[1001] p-6">
        {/* Close Modal Icon */}
        <div
          className="flex justify-end cursor-pointer"
          onClick={() => dispatch(setOpenCreateModal(false))}
        >
          <TfiClose />
        </div>

        {/* Form Elements */}
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <div className="mt-10 ">
            <Label
              id="title"
              classes="block mb-2 text-sm font-medium text-stone-600"
              titleText="Title"
            />
            <Input
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              classes="block p-2.5 w-full text-sm  text-stone-900 bg-gray-50 rounded-lg border border-stone-300"
            />
          </div>
          <div className="mt-10 ">
            <Label
              id="body"
              classes="block mb-2 text-sm font-medium text-stone-600"
              titleText="Post Content"
            />
            <TextArea
              rows={8}
              id="body"
              onChange={(e) => setBody(e.target.value)}
              classes="block p-2.5 w-full text-sm  text-stone-900 bg-gray-50 rounded-lg border border-stone-300"
            />
          </div>

          {/* Create Button */}
          <div className="flex justify-end mt-4">
            <Button
              onClick={handleSaveButtonClick}
              type="dark"
              disabled={isButtonDisabled}
              text="Create Post"
            />
          </div>

          {/* Warning Text  */}
          {isButtonDisabled && (
            <p className="text-red-700 text-xs md:text-md xl:text-lg relative -top-5 xl:-top-7">
              Both Fields Must Be Provided!
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default CreateModel;
