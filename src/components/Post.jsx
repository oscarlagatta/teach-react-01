// const names = ['Oscar', 'Marcelo'];

import styles from './Post.module.css';
import {Link} from "react-router-dom";

const Post = ({id, author, body}) => {

    return (
        <Link to={id}>
            <li className={styles.post}>
                <p className={styles.author}>{author}</p>
                <p className={styles.text}>{body}</p>
            </li>
        </Link>

    )
}

export default Post;