import PostComment from "./PostComment";

const PostCommentWrapper = () => {
  return (
    <>
      <div className="bg-gray-100  md:rounded-b-[3.5rem] p-5 md:h-[70vh]  md:max-h-[40rem]  md:overflow-x-scroll coursesOutline">
        <PostComment />
        <PostComment />
        <PostComment />
        <PostComment />
        <PostComment />
      </div>
    </>
  );
};

export default PostCommentWrapper;
