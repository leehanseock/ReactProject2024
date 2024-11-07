import React from "react";
import Comment2 from "./Comment2";

function CommentList2(props){
    return(
        <div>
            <Comment2 name = {"바보"} comment = {"이불킥"}/>
            <Comment2 name = {"바보"} comment = {"늘 의욕만 먼저 앞서지"}/>
        </div>
    );
}

export default CommentList2;