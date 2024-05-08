import Post from "./Post";
import styles from './PostList.module.css';
const PostList = () => {
    return (
        <ul className={styles.posts}>
            <Post author='Oscar' body='ReactJS IS AWESOME'/>
            <Post author='MARCELO' body='ReactJS IS AWESOME'/>
        </ul>
    )
}

export default PostList;