import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
import PostPagination from "@/components/posts/PostsPagination";

const PostPage = () => {
  return (
    <>
      <BackButton text="Go back" link="/" />
      <PostsTable />
      <PostPagination />
    </>
  );
};

export default PostPage;
