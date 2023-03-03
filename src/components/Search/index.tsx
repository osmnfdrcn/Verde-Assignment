import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "../";
import { DEBOUNCE_DELAY } from "../../config/constants";
import { useAppSelector, RootState, useAppDispatch } from "../../state/store";
import { getPosts } from "../../state/slices/posts/postSlice";

const Search = () => {
  const [searchKey, setSearchKey] = useState<string>("");
  const [debouncedSearchKey] = useDebounce(searchKey, DEBOUNCE_DELAY);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store: RootState) => store.users);

  useEffect(() => {
    dispatch(getPosts({ userId: user.id, searchKey: debouncedSearchKey }));
  }, [debouncedSearchKey]);

  const handleChange = (e: { target: HTMLInputElement }) => {
    setSearchKey(e.target.value);
  };

  return (
    <div>
      <Input
        type="text"
        isAutoFocus={true}
        classes=" block px-2 md:px-2.5 lg:px-3 py-1.5 md:py-2.5 lg:py-3 w-full text-sm text-stone-900 bg-gray-50 rounded-lg border border-stone-300"
        onChange={(e) => handleChange(e)}
        placeholder="Search by title..."
      />
    </div>
  );
};

export default Search;
