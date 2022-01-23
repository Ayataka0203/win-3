import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

class Main9 extends React.Component {
  render() {
    return (
      <div className="main9">
        <div className="jouhou">情報入力</div>
        <div className="toukouBox">
          <Box
            sx={{
              width: 500,
              height: 320
            }}
          />
        </div>
        <p
          style={{
            marginLeft: "13px"
          }}
        >
          作品タイトル
        </p>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%"
          }}
        >
          <TextField fullWidth label="作品タイトルを入力" id="fullWidth" />
        </Box>
        <p
          style={{
            marginLeft: "13px"
          }}
        >
          キャプション
        </p>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%"
          }}
        >
          <TextField fullWidth label="キャプションを入力" id="fullWidth" />
        </Box>
        <p
          style={{
            marginLeft: "13px"
          }}
        >
          タグ
        </p>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%"
          }}
        >
          <TextField fullWidth label="タグを追加" id="fullWidth" />
        </Box>

        <div className="syurui">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              作品の種類
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="イラスト"
              />
              <FormControlLabel value="male" control={<Radio />} label="映像" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="コード"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default Main9;
