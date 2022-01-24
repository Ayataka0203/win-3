import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

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
        <p
          style={{
            marginLeft: "13px"
          }}
        >
          ペンネーム
        </p>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%"
          }}
        >
          <TextField fullWidth label="ペンネームを入力" id="fullWidth" />
        </Box>
        <p
          style={{
            marginLeft: "13px"
          }}
        >
          ポートフォリオ
        </p>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%"
          }}
        >
          <TextField fullWidth label="ポートフォリオURLを入力" id="fullWidth" />
        </Box>
        <p
          style={{
            marginLeft: "13px"
          }}
        >
          Twitter
        </p>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%"
          }}
        >
          <TextField fullWidth label="Twitter IDを入力" id="fullWidth" />
        </Box>

        <div className="gender">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">性別</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="男性"
              />
              <FormControlLabel value="male" control={<Radio />} label="女性" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="その他"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
  }
}

export default Main10;
