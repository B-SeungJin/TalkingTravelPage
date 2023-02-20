import '../../css/Main/Post.css';


function Post(props){
    return(
        <div id='post'>
            <span>{props.no}</span>
            <span>{props.title}</span>
        </div>
    )
}

export default Post;