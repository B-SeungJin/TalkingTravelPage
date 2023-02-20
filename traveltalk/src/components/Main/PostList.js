import '../../css/Main/PostList.css';
import Post from './Post';

function PostList(props){

    const result = props.postList.map(
        (data) => (<Post no={data.id}
            title={data.placeName}/>)
    )

    return(
        <div id='post-list'>
            {result}
        </div>
    )
}

export default PostList;