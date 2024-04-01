import { useModalStore } from "@/_states";

export const Modal = () => {
  const { modal, confirm, closeModal, closeConfirm } = useModalStore();

  return (
    <>
      {modal.isOpen && (
        <>
          <div
            onClick={closeModal}
            className="absolute bottom-0 left-0 w-full h-full bg-grey-900 opacity-60 z-20 cursor-pointer"
          />
          <dialog
            open={modal.isOpen}
            className="absolute bottom-0 flex flex-col w-full pb-[1rem] bg-white rounded-t-[1rem] z-30 text-black text-14-400-17.5"
          >
            <button
              className="w-[5rem] h-[0.4rem] bg-grey-500 mx-auto my-[1.6rem] rounded-[0.5rem]"
              onClick={closeModal}
            />
            {modal.content.map((props, index) => (
              <button
                key={"modal_button" + index}
                className="w-full px-[2.4rem] py-[1.4rem] h-[4.6rem] text-left"
                onClick={props.onClick}
              >
                {props.text}
              </button>
            ))}
          </dialog>
          {confirm.isOpen && (
            <>
              <div
                onClick={closeConfirm}
                className="absolute bottom-0 left-0 w-full h-full z-[35] cursor-pointer"
              />
              <dialog
                open={confirm.isOpen}
                className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] grid grid-cols-[12.5rem_12.5rem] grid-rows-[6.4rem_4.6rem] bg-white rounded-[1rem] z-40"
              >
                <div className="flex items-center justify-center col-span-2 text-black text-16-500-20 border-b-[0.1rem] border-solid border-grey-300">
                  {confirm.message}
                </div>
                <button
                  className="rounded-bl-[1rem] text-14-400-17.5 text-black border-0 border-r-[0.1rem] border-solid border-grey-300"
                  onClick={closeConfirm}
                >
                  취소
                </button>
                <button
                  className="rounded-br-[1rem] text-14-400-17.5 text-primary"
                  onClick={() => {
                    confirm.callback();
                    closeModal();
                  }}
                >
                  확인
                </button>
              </dialog>
            </>
          )}
        </>
      )}
    </>
  );
};
