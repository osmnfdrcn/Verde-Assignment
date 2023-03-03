import { Button } from "../";
import usePagination from "../../hooks/usePagination";
import { useAppSelector, RootState } from "../../state/store";
import { v4 as uuidv4 } from "uuid";
import SinglePost from "../SinglePost";
import Title from "../Title";

type Props = {};

function Pagination({}: Props) {
  const { posts } = useAppSelector((store: RootState) => store.posts);
  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    { data: posts, itemsPerPage: 12 }
  );
  const data = currentData();

  return (
    <div>
      <Title text="All Posts" />

      <div className="grid grid-cols-repeat gap-6 justify-center items-center relative">
        {data.map((post) => {
          return <SinglePost key={uuidv4()} post={post} />;
        })}
      </div>

      <div className="flex gap-2 items-center justify-center fixed left-0 right-0 bottom-0 py-2 bg-slate-100">
        <Button
          type="rounded"
          onClick={() => prev()}
          disabled={currentPage === 1}
          text={"<"}
        />

        <p className="text-sm lg:text-md ">
          {currentPage} of {maxPage}
        </p>

        <Button
          type="rounded"
          onClick={() => next()}
          disabled={currentPage === maxPage}
          text={">"}
        />
      </div>
    </div>
  );
}

export default Pagination;
