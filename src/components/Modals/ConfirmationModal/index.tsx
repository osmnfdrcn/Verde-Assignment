import { useNavigate } from "react-router-dom";
import { Button } from "../../";
import { setOpenConfirmModal } from "../../../state/slices/app/appSlice";
import {
  useAppDispatch,
  useAppSelector,
  RootState,
} from "../../../state/store";

interface IConfirmationModal {
  text: string;
  onClick: () => void;
}

const ConfirmationModal = ({ text, onClick }: IConfirmationModal) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store: RootState) => store.users);

  const { isOpenConfirmModal } = useAppSelector(
    (store: RootState) => store.app
  );

  const handleConfirm = () => {
    onClick();
    dispatch(setOpenConfirmModal(false));
    navigate(`/`);
  };

  return (
    <>
      <div className="fixed inset-0 bg-[rgba(0,0,0,.4)] z-[1000]"></div>
      <div className=" flex flex-col gap-7 items-center max-w-xl w-full rounded-md fixed top-[25%] left-1/2 -translate-x-1/2 bg-white z-[1001] p-10">
        <p className="text-md md:text:lg lg:text-xl">{text}</p>
        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => dispatch(setOpenConfirmModal(false))}
            type="dark"
            text="Cancel"
          />
          <Button onClick={handleConfirm} type="light" text="Confirm" />
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
