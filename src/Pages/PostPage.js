import { useParams } from "react-router-dom";

const PostPage = () => {
  const params = useParams();
  console.log(params);
  const id = params["*"] || 1;
  return (
    <div>
      <h2>post detail {id}</h2>
      <h2>params:{JSON.stringify(params)}</h2>
    </div>
  );
};

export default PostPage;
