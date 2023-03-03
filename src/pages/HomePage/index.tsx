import { Button, CreateModel, PostsContainer, Search } from "../../components";
import { setOpenCreateModal } from "../../state/slices/app/appSlice";
import { useAppSelector, RootState, useAppDispatch } from "../../state/store";

const HomePage = () => {
  const { isOpenCreateModal } = useAppSelector((store: RootState) => store.app);
  const dispatch = useAppDispatch();

  return (
    <div className="relative">
      <div className="flex items-end justify-between mb-8 ">
        {isOpenCreateModal ? <CreateModel /> : null}
        <Search />
        <Button
          onClick={() => dispatch(setOpenCreateModal(true))}
          type="dark"
          text="CreatePost"
        />
      </div>
      <PostsContainer />
    </div>
  );
};

export default HomePage;
