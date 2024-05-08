import Post from "./Post";
import styles from './PostList.module.css';
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";

const PostList = ({isPosting, onStopPosting}) => {
    return (
        <>
            {
                isPosting && (
                    <Modal onClose={onStopPosting}>
                        <NewPost
                            onCancel={onStopPosting}
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