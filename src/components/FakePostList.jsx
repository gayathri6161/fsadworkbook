import { useEffect, useState } from "react";
import axios from "axios";

function FakePostList() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchPosts = () => {
    axios.get("https://dummyjson.com/posts")
      .then(res => setPosts(res.data.posts))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = filter
    ? posts.filter(p => p.userId === Number(filter))
    : posts;

  return (
    <div>
      <h2>Fake Posts</h2>

      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Users</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
      </select>

      <button onClick={fetchPosts}>Refresh</button>

      {filteredPosts.map(post => (
        <div key={post.id} className="card">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <p><b>User ID:</b> {post.userId}</p>
        </div>
      ))}
    </div>
  );
}

export default FakePostList;