import React from "react";
import Swiper from "./Swiper";
import Main6 from "./Main6";
import Main7 from "./Main7";
import Main8 from "./Main8";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

class Main5 extends React.Component {
  render() {
    return (
      <>
        <Swiper />
        <div className="main5">
          <div className="news">
            <div className="newsTitle">news</div>
            <List component="nav" aria-label="mailbox folders">
              <ListItem button>
                <ListItemText primary="11.5 メンテナンスのお知らせ" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="11.3 メンター一覧の更新についてのお知らせ" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="11.1 【慶應義塾大学主催】コードコンテスト" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="10.28 今月のワーカーランキング更新のお知らせ" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="10.27 リリース開始に伴って" />
              </ListItem>
            </List>
            <div className="newsBox1">
              <Box
                sx={{
                  width: 400,
                  height: 320
                }}
              />
            </div>
            <div className="newsBox2">
              <Box
                sx={{
                  width: 400,
                  height: 246
                }}
              />
            </div>
          </div>
        </div>
        <Main6 />
        <Main7 />
        <Main8 />
      </>
    );
  }
}

export default Main5;
