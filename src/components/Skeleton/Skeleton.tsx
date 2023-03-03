import { useAppSelector, RootState } from "../../state/store";

const Skeleton = () => {
  const { posts } = useAppSelector((store: RootState) => store.posts);

  return (
    <div className="grid grid-cols-repeat gap-6 justify-center items-center  mt-4">
      {/* itemsPerPage in Pagination components = 12 */}
      {[...Array(12).keys()].map((i) => {
        return (
          <div
            key={i}
            className=" relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md  "
          >
            <div className="animate-pulse flex space-x-4 ">
              <div className="flex-1 space-y-4 py-1">
                <div className="space-y-4">
                  <div className="h-6 bg-gray-200 rounded w-full"></div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Skeleton;
