import { useState } from "react";
import Button from "@mui/material/Button";
import style from "../css/IntroClub.module.css";
import { Link } from "react-router-dom";
import ListItem from "@mui/joy/ListItem";
import Done from "@mui/icons-material/Done";
import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";

export default function IntroClub() {
  const [value, setValue] = useState([]);
  return (
    <div>
      <div className={`${style.nav_menu}`}>
        <div className={`${style.menu}`}>
          <Link
            to="/introclub"
            className={`${style.detail_menu}`}
            style={{ fontWeight: "bold" }}
          >
            공동체 소개
          </Link>
          <div className={`${style.detail_menu}`}>|</div>
          <Link to="/recruiting" className={`${style.detail_menu}`}>
            리쿠르팅
          </Link>
        </div>
      </div>
      <div className={`${style.image_box}`}>동아리 소개 image</div>
      <Button variant="outlined" color="inherit">
        All
      </Button>
      <List
        orientation="horizontal"
        wrap
        sx={{
          "--ListItem-radius": "10px",
          "--ListItem-minHeight": "32px",
        }}
      >
        {["동아리", "학회", "동호회"].map((item, index) => (
          <ListItem key={item}>
            {value.includes(item) && (
              <Done
                fontSize="md"
                color="inherit"
                sx={{ ml: -0.5, mr: 0.5, zIndex: 2, pointerEvents: "none" }}
              />
            )}

            <Checkbox
              size="sm"
              disableIcon
              overlay
              label={item}
              checked={value.includes(item)}
              variant={value.includes(item) ? "soft" : "outlined"}
              onChange={(event) => {
                if (event.target.checked) {
                  setValue((val) => [...val, item]);
                } else {
                  setValue((val) => val.filter((text) => text !== item));
                }
              }}
              slotProps={{
                action: ({ checked }) => ({
                  sx: checked
                    ? {
                        border: "1px solid",
                        borderColor: "#7B7B7B",
                        backgroundColor: "#E8DEF8",
                        color: "black",
                      }
                    : { border: "1px solid", borderColor: "#7B7B7B" },
                }),
              }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
