import { useState } from "react";
import style from "../css/IntroClub.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import { styled } from "@mui/material";
import { Done } from "@mui/icons-material";
import Checkbox from "@mui/joy/Checkbox";
import Typography from "@mui/joy/Typography";
import Autocomplete from "@mui/joy/Autocomplete";
import Paper from "@mui/material/Paper";

const AllBox = styled(Button)(() => ({
  width: 50,
  height: 45,
  borderRadius: "10px",
  border: "1px solid",
  borderColor: "#7B7B7B",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px",
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
  margin: "10px",
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

const AutocompleteBox = styled(Autocomplete)(() => ({
  width: 350,
  height: 45,
  border: "1px solid",
  borderColor: "#7B7B7B",
  borderRadius: "10px",
  color: "black",
  margin: "10px",
}));

const clubs = [
  { label: "Motion In Christ" },
  { label: "하나님을 향한 춤" },
  { label: "Amazing Story" },
];

const SearchBox = styled(Button)(() => ({
  width: 80,
  height: 45,
  borderRadius: "10px",
  backgroundColor: "#6100AF",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px",
  color: "white",
  fontWeight: "bold",
  fontSize: 16,
}));

const ClubItem = styled(Paper)(() => ({
  width: 450,
  height: 300,
  backgroundColor: "white",
  borderRadius: "10px",
  margin: "20px",
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
      <div className={`${style.select_box}`}>
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
              {value.includes(item) && !isAll && <CheckDone />}
              <Checkbox
                disableIcon
                disabled={isAll ? true : false}
                overlay
                checked={value.includes(item)}
                label={
                  value.includes(item) ? (
                    <Typography
                      sx={{
                        fontWeight: isAll ? "normal" : "bold",
                        color: isAll ? "#8E8B92" : "black",
                      }}
                    >
                      {item}
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        fontWeight: "normal",
                        color: isAll ? "#8E8B92" : "black",
                      }}
                    >
                      {item}
                    </Typography>
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
                          backgroundColor: isAll ? "white" : "#E8DEF8",
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
        <AutocompleteBox
          startDecorator={
            <Typography
              sx={{
                fontWeight: "bold",
                color: "black",
              }}
            >
              분야
            </Typography>
          }
          variant="plain"
          placeholder="동아리, 학회 및 단체명"
          options={clubs}
        />
        <SearchBox variant="solid" color="inherit">
          검색
        </SearchBox>
      </div>
      <hr className={`${style.line}`} />
      <div className={`${style.club_item}`}>
        <ClubItem elevation={2}></ClubItem>
        <ClubItem elevation={2}></ClubItem>
        <ClubItem elevation={2}></ClubItem>
      </div>
    </div>
  );
}
