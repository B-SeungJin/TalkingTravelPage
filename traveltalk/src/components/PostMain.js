import '../css/PostMain.css';
import PostList from './Main/PostList';
import Pagination from './Main/Pagination';

function PostMain(props){
    return(
        <div id='post-main'>
            <PostList postList={props.postList}/>
            <Pagination/>
        </div>
    )
}

export default PostMain;