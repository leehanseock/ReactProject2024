import React from "react";
import Card from "./Card";

function ProfileCard(){
    return(
        <div>
            <Card title = "React Practice" backgroundColor = "#79AAFF">
                <p>안녕하세요~ 반가워요.</p>
                <p>리액트로 카드형 템플릿을 작성 중입니다.</p>
            </Card>
            <Card title = "Final Term" backgroundColor = "#FF0000">
                <p>기말고사는</p>
                <p>리액트로 홈페이지 메인 페이지 제작하기</p>
            </Card>
            <Card title = "Final Term" backgroundColor = "#0100FF">
                <p>다음주는</p>
                <p>시험기간입니다.</p>
            </Card>
        </div>
    );
}

export default ProfileCard;