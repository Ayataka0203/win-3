import React from "react";
import "./styles.css";
import Header from "./Header";
import Main1 from "./Main1";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";
import Footer from "./Footer";
//コメントアウト　　　　　　{/*  コメント　　　　　　*/}

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
        */}
        {/*
          <p>
            <Main2 />
          </p>
        */}
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
            <Footer />
          </p>
        }
      </div>
    );
  }
}

export default App;
