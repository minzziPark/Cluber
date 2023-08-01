import { useState } from "react";
import style from "../css/IntroClub.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { styled } from "@mui/material";
import { Done } from "@mui/icons-material";
import Checkbox from "@mui/joy/Checkbox";
import Typography from "@mui/joy/Typography";

const AllBox = styled(Button)(() => ({
  width: 50,
  height: 45,
  borderRadius: "10px",
  border: "1px solid",
  borderColor: "#7B7B7B",
  justifyContent: "center",
  alignItems: "center",
}));

const ButtonBox = styled(ButtonGroup)(() => ({
  width: 450,
  height: 45,
  borderRadius: "10px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "#7B7B7B",
  justifyContent: "center",
  alignItems: "center",
}));

const ClubCheckButton = styled(Button)(() => ({
  width: 150,
  height: 45,
  justifyContent: "center",
  alignItems: "center",
  color: "black",
  fontSize: 16,
}));

const CheckDone = styled(Done)(() => ({
  fontSize: 18,
  color: "black",
  ml: -0.5,
  mr: 0.5,
  zIndex: 2,
  pointerEvents: "none",
  marginRight: 10,
}));

export default function IntroClub() {
  const [value, setValue] = useState([]);
  const [isAll, setIsAll] = useState(false);
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
      <AllBox variant="outlined" color="inherit">
        <Checkbox
          label={
            isAll ? (
              <Typography sx={{ fontWeight: "bold" }}>ALL</Typography>
            ) : (
              "ALL"
            )
          }
          disableIcon
          overlay
          checked={isAll}
          variant={"none"}
          onChange={(event) => {
            if (event.target.checked) {
              setIsAll(true);
            } else {
              setIsAll(false);
            }
          }}
          slotProps={{
            action: ({ checked }) => ({
              sx: checked
                ? {
                    borderRadius: "10px",
                    borderColor: "#7B7B7B",
                    backgroundColor: "#E8DEF8",
                  }
                : {
                    borderRadius: "10px",
                    borderColor: "#7B7B7B",
                  },
            }),
          }}
        />
      </AllBox>

      <ButtonBox variant="solid" aria-label="outlined button group">
        {["동아리", "학회", "동호회"].map((item, index) => (
          <ClubCheckButton
            key={item}
            sx={{
              borderTopLeftRadius: index === 0 ? "10px" : "0px",
              borderBottomLeftRadius: index === 0 ? "10px" : "0px",
              borderTopRightRadius: index === 2 ? "10px" : "0px",
              borderBottomRightRadius: index === 2 ? "10px" : "0px",
              borderColor: "#7B7B7B",
            }}
          >
            {value.includes(item) && <CheckDone />}
            <Checkbox
              disableIcon
              overlay
              checked={value.includes(item)}
              label={
                value.includes(item) ? (
                  <Typography sx={{ fontWeight: "bold" }}>{item}</Typography>
                ) : (
                  item
                )
              }
              variant={"none"}
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
                        borderTopLeftRadius: index === 0 ? "10px" : "0px",
                        borderBottomLeftRadius: index === 0 ? "10px" : "0px",
                        borderTopRightRadius: index === 2 ? "10px" : "0px",
                        borderBottomRightRadius: index === 2 ? "10px" : "0px",
                        borderColor: "#7B7B7B",
                        backgroundColor: "#E8DEF8",
                      }
                    : {
                        borderTopLeftRadius: index === 0 ? "10px" : "0px",
                        borderBottomLeftRadius: index === 0 ? "10px" : "0px",
                        borderTopRightRadius: index === 2 ? "10px" : "0px",
                        borderBottomRightRadius: index === 2 ? "10px" : "0px",
                        borderColor: "#7B7B7B",
                      },
                }),
              }}
            />
          </ClubCheckButton>
        ))}
      </ButtonBox>
    </div>
  );
}
