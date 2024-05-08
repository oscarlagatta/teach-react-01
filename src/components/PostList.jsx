import Post from "./Post";
import styles from './PostList.module.css';
import NewPost from "./NewPost.jsx";
import {useState} from "react";
import Modal from "./Modal.jsx";

const PostList = () => {

    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            {
                modalIsVisible && <Modal onClose={hideModalHandler}>
                    <NewPost
                        onBodyChange={bodyChangeHandler}
                        onAuthorChange={authorChangeHandler}
                    />
                </Modal>
            }
            <ul className={styles.posts}>
                <Post body={enteredBody} author={enteredAuthor}/>
                <Post author='MARCELO' body='ReactJS IS AWESOME'/>
            </ul>
        </>
    )
}

export default PostList;