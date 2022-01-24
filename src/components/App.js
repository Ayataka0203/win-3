import React from "react";
import "./styles.css";
import Header from "./Header";
import Main1 from "./Main1";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";
import Main5 from "./Main5";
import Main6 from "./Main6";
import Main7 from "./Main7";
import Main8 from "./Main8";
import Main9 from "./Main9";
import Main10 from "./Main10";
//import Swiper from "./Swiper";
import Footer from "./Footer";

//コメントアウト　　　　　　{/*  コメント　　　　　　*/}
//プロフィール画面 ：Header+Main1+Main2+Footer
//作品閲覧画面    ：Header+Main3+Main4+Footer
//ホーム画面      ：Header+Main5+Main6+Main7+Main8+Footer
//作品投稿画面    :Header+Main9+Footer
//プロフィール設定画面:Header+Footer

class App extends React.Component {
  render() {
    return (
      <div>
        <p>
          <Header />
        </p>
        {/*
          <p>
            <Main1 />
          </p>
        }
        {
          <p>
            <Main2 />
          </p>
        }
        {
          <p>
            <Main3 />
          </p>
        }
        {
          <p>
            <Main4 />
          </p>
        }
        {
          <p>
            <Main5 />
          </p>
        }
        {
          <p>
            <Main6 />
          </p>
        }
        {
          <p>
            <Main7 />
          </p>
        }
        {
          <p>
            <Main8 />
          </p>
        }
        {
          <p>
            <Main9 />
          </p>
        */}
        {
          <p>
            <Main10 />
          </p>
        }
        {
          <p>
            <Footer />
          </p>
        }
      </div>
    );
  }
}

export default App;
