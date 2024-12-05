import React from "react";
import bgImage from '../imgs/bg.jpg'

function Hero(){
    return(
      <div className="hero" style={{backgroundImage: `url(${bgImage})`}}>
          <h1>비키니시티에 오신 것을 환영합니다.</h1>
          <p>가고 싶은 곳을 찾아보세요.</p>
      </div>
    );
}

export default Hero;