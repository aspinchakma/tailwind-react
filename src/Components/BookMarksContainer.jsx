import BookMarks from "./BookMarks";

const BookMarksContainer = ({ bookmars, spentTime }) => {
  return (
    <div>
      {spentTime ? (
        <h3 className="lg:p-[20px] p-[10px] bg-[#efecfd] text-[#6047ec] font-extrabold rounded-[8px] mb-3">
          Spent time on read : {spentTime}
        </h3>
      ) : (
        ""
      )}
      {bookmars.length ? <BookMarks bookmars={bookmars}></BookMarks> : ""}
    </div>
  );
};

export default BookMarksContainer;
