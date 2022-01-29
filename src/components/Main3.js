import React, { useState } from "react";
import Main1 from "./Main1";
import Main4 from "./Main4";
import Button from "@material-ui/core/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArticleIcon from "@mui/icons-material/Article";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Main3 = () => {
  const [taskFlag, setTaskFlag] = useState(true);
  const [profFlag, setProfFlag] = useState(false);
  const onClickProf = () => {
    setProfFlag(!profFlag);
    setTaskFlag(!taskFlag);
  };

  return (
    <>
      {taskFlag && (
        <>
          <div className="main3">
            <div className="prof-left">
              <div class="box box6">picture</div>
            </div>
            <ul className="task">
              <div style={{ fontSize: "40px" }}>Summer sea</div>
              <div className="icons4">
                <FavoriteBorderIcon />
                <ArticleIcon />
              </div>
              <Button color="primary" variant="contained" onClick={onClickProf}>
                by Ayataka0203
              </Button>
              <p>作品解説</p>
            </ul>
          </div>
          <Main4 />
        </>
      )}
      {profFlag && <Main1 />}
    </>
  );
};

export default Main3;
