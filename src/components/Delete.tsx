interface Remove {
  remove: number;
  id: number;
  setRemove: (remove: number) => void;
  deletePicture: (id: number) => void;
}

const Delete = ({ remove, id, setRemove, deletePicture }: Remove) => {
  return (
    <>
      {remove !== 0 && (
        <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center z-20 backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <div className="bg-header text-white text-xl p-2 w-[210px] rounded-md border-2 border-white my-[30px]">
              <p className="text-center font-semibold">Delete this picture?</p>
            </div>
            <div className="flex w-[240px] justify-between">
              <div
                className="text-white text-center font-semibold bg-background px-2 py-1 text-lg rounded-md border-2 border-white hover:scale-105 active:scale-95 cursor-pointer"
                onClick={() => {
                  setRemove(0);
                  deletePicture(id);
                }}
              >
                <p>YES</p>
              </div>
              <div
                className="text-white text-center font-semibold bg-background px-2 py-1 text-lg rounded-md border-2 border-white hover:scale-105 active:scale-95 cursor-pointer"
                onClick={() => {
                  setRemove(0);
                }}
              >
                <p>NO</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Delete;
