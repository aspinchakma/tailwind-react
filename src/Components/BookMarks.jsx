const BookMarks = ({ bookmars }) => {
  return (
    <div className="p-[10px] lg:p-[20px] bg-[#f3f3f3] rounded-[8px]">
      {bookmars.length ? (
        <h2 className="text-xl font-bold">
          Bookmarked Blogs: {bookmars.length}
        </h2>
      ) : (
        ""
      )}
      <div>
        {bookmars.map((blog, inx) => (
          <p className="bg-white p-3 rounded-[8px] mt-4" key={inx}>
            {blog.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BookMarks;
