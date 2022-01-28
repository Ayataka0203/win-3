import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Main10 from "./Main10";
import Main2 from "./Main2";

const Main1 = () => {
  const [profSetFlag, setProfSetFlag] = useState(false);
  const [profFlag, setProfFlag] = useState(true);
  const onClickProfSet = () => {
    setProfSetFlag(!profSetFlag);
    setProfFlag(!profFlag);
  };

  return (
    <>
      {profFlag && (
        <div className="main1">
          <div className="prof-left">
            <div class="box box0">prof</div>
          </div>
          <ul className="prof-right">
            <div style={{ fontSize: "40px" }}>Ayataka0203</div>
            <Button color="primary" variant="contained">
              メンター
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={onClickProfSet}
            >
              プロフィールを編集
            </Button>
            <p>
              投稿１件　受注２件　満了２件　フォロー１４人　フォロワー１０人
            </p>
          </ul>
          <p>
            <Main2 />
          </p>
        </div>
      )}
      {profSetFlag && (
        <p>
          <Main10 />
        </p>
      )}
    </>
  );
};

export default Main1;
