import Button from './Button_ib';

function Modal({
  openModal,
  closeModal,
}: {
  openModal: VoidFunction;
  closeModal: VoidFunction;
}) {
  return (
    <div className="text-center w-full h-full bg-zinc-300 flex flex-col justify-center items-center">
      <div className="container bg-white w-[283px] pt-[20px] p-[25px] rounded-[20px] border-[2px] border-solid border-blue-500 bg-gradient-to-br from-white to-white flex-col flex">
        <div className="w-full h-[18px] mb-[20px] text-[13px] font-semibold leading-[18px] text-center">
          Further action required?
        </div>
        <div className="h-[40px] rounded-[50px] flex gap-[13px]">
          <Button handleClick={openModal}>YES</Button>
          <Button handleClick={closeModal} variant="red">
            NO
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
