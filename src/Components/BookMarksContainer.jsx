import BookMarks from "./BookMarks";

const BookMarksContainer = ({ bookmars }) => {
  return (
    <div>
      <h3 className="lg:p-[20px] p-[10px] bg-[#efecfd] text-[#6047ec] font-extrabold text-2xl">
        Spent time on read : 177 min
      </h3>
      <BookMarks bookmars={bookmars}></BookMarks>
    </div>
  );
};

export default BookMarksContainer;
