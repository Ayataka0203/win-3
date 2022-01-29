import React from "react";
import "./styles.css";
import Header from "./Header";
import Main1 from "./Main1";
import Main3 from "./Main3";
import Main5 from "./Main5";
import Main9 from "./Main9";
import Footer from "./Footer";

//プロフィール画面 ：Header+Main1+Footer
//作品閲覧画面    ：Header+Main3+Footer
//ホーム画面      ：Header+Main5+Footer
//作品投稿画面    :Header+Main9+Footer
//プロフィール設定画面:Header+Main10+Footer　プロフ画面から遷移可

const App = () => {
  return (
    <div>
      <p>
        <Header />
      </p>
      {/*
        <p>
          <Main1 />
        </p>
      */}
      {
        <p>
          <Main3 />
        </p>
      }
      {/*
        <p>
          <Main5 />
        </p>
      */}
      {/*
        <p>
          <Main9 />
        </p>
      */}
      {
        <p>
          <Footer />
        </p>
      }
    </div>
  );
};

export default App;
