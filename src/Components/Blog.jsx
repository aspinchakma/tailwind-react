import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const {
    authorImage,
    authorName,
    coverPhoto,
    hashtags,
    postedDate,
    readingTime,
    title,
  } = blog;
  return (
    <div className="shadow-md rounded-lg">
      <img
        className="h-[220px] w-full object-cover rounded-lg"
        src={coverPhoto}
        alt=""
      />
      {/* content container */}
      <div className="px-3 pt-3 pb-5">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-5">
              <img
                className="w-[60px] rounded-full object-cover"
                src={authorImage}
                alt=""
              />
              <div>
                <h2 className="text-xl font-bold">{authorName}</h2>
                <p className="text-[#707070]">{postedDate}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <h4 className="text-[#707070]">0{readingTime} min read</h4>
              <div>
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="w-6 text-[#707070] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className="font-bold text-2xl my-2">{title}</h2>
        <p>
          {hashtags.map((hashtag, index) => (
            <span className="mr-2 text-[#707070] text-[17px]" key={index}>
              {hashtag}
            </span>
          ))}
        </p>
        <p className="text-[#6047ec] underline cursor-pointer mb-2">
          Mark As Read
        </p>
        <Link
          className="border border-black py-1 px-4  rounded-[4px] cursor-pointer"
          to={`/blogDetails/${blog.id}`}
        >
          Show Details
        </Link>
      </div>
    </div>
  );
};

export default Blog;
