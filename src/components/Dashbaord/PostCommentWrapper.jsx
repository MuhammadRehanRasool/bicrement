import PostComment from "./PostComment";

const PostCommentWrapper = () => {
  return (
    <>
      <div className="bg-gray-100  rounded-b-[3.5rem] p-5  h-96 overflow-x-scroll coursesOutline">
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
