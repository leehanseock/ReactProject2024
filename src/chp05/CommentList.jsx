import React from "react";
import Comment from "./Comment"

const comments = [
    {
        name : "이한석",
        comment : "오늘은 목요일입니다",
    },
    {
        name : "최주진",
        comment : "내일은 금요일이죠.",
    },
    {
        name : "김초원",
        comment : "어제는 수요일이여.",
    },
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name = {comment.name} comment={comment.comment}/>
            );
        })}
        </div>
    );
}


export default CommentList;