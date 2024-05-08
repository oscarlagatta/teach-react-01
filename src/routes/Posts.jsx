import PostList from "../components/PostList.jsx";
import {Outlet} from "react-router-dom";

function Posts() {
    return (
        <>
            <Outlet />
            <main>
                <PostList/>
            </main>
        </>
    );
}

export default Posts;