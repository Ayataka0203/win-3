import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

const Input = styled("input")({
  display: "none"
});

class Main10 extends React.Component {
  render() {
    return (
      <div className="main9">
        <div className="jouhou">プロフィール設定</div>
        <br></br>
        <div className="profBox">
          <Box
            sx={{
              width: 300,
              height: 300,
              backgroundColor: "primary.dark",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7]
              }
            }}
          />
        </div>
        <div className="upload">
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
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

        <div className="seigen">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">閲覧制限</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="全年齢可"
              />
              <FormControlLabel value="male" control={<Radio />} label="R-18" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="R-18G"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="hani">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">公開設定</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="公開"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="非公開"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="seiteki">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">性的描写</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="なし"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="あり（軽度）"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="あり（重度）"
              />
            </RadioGroup>
          </FormControl>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}

export default Main10;
