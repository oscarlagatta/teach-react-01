import Post from "./Post";
import styles from './PostList.module.css';
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";
import {useState} from "react";

const PostList = ({isPosting, onStopPosting}) => {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {
                isPosting && (
                    <Modal onClose={onStopPosting}>
                        <NewPost
                            onCancel={onStopPosting}
                            onAddPost={addPostHandler}
                        />
                    </Modal>
                )
            }
            <ul className={styles.posts}>

                <Post author='MARCELO' body='ReactJS IS AWESOME'/>
            </ul>
        </>
    )
}

export default PostList;