import Post from "./Post";
import styles from './PostList.module.css';
import {useLoaderData} from "react-router-dom";

const PostList = () => {

    const posts = useLoaderData();

    // fetch(`http://localhost:8080/posts`);

    // const [posts, setPosts] = useState([]);
    // const [isFetching, setIsFetching] = useState(false);

    // useEffect(() => {
    //     async function fetchPosts() {
    //         setIsFetching(true);
    //
    //         setPosts(resData.posts);
    //         setIsFetching(false);
    //     }
    //
    //     fetchPosts();
    // }, []);

    function addPostHandler(postData) {

        fetch(`http://localhost:8080/posts`, {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {posts.length > 0 && <ul className={styles.posts}>
                {posts.map((post) => (
                        <Post key={post.body} author={post.author} body={post.body}/>
                    )
                )}
            </ul>}
            {posts.length === 0 && <div style={{textAlign: 'center', color: 'white'}}>
                <h2>There are no posts yet</h2>
                <p>Start adding some...</p>
            </div>}

        </>
    )
}

export default PostList;