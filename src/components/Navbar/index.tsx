import { BsBellFill, BsFillGridFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import Logo from "./Logo";
import { useAppSelector, RootState } from "../../state/store";

const Navbar = () => {
  const { user } = useAppSelector((store: RootState) => store.users);
  const { posts } = useAppSelector((store: RootState) => store.posts);

  return (
    <nav className="flex justify-between fixed z-[1005] top-0 right-0 left-0 bg-gray-100  text-stone-500 py-2 px-4 md:px-8 lg:px-12  xlg:px-16  h-10 lg:h-12 xlg-h-14 text-lg lg:text-xl xl:text-2xl ">
      <Logo />

      {/* Header Right */}
      <div className="h-full flex items-center gap-4 lg:gap-5 xl:gap-6 2xl:gap-7">
        <div className="relative">
          <span className="text-lg">Posts</span>
          <span className=" absolute flex items-center justify-center -top-1 -right-3 w-5 h-5 bg-black p-2 text-white rounded-full text-xs">
            {posts.length}
          </span>
        </div>
        <BsBellFill />
        <BsFillGridFill />
        <div className="flex flex-col items-center justify-center">
          <AiOutlineUser />
          <p className="text-sm">{user.name}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
