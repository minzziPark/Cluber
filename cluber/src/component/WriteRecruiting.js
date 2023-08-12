import { useState } from "react";
import style from "../css/WriteRecruiting.module.css";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Button from "@mui/material/Button";
import { Done } from "@mui/icons-material";
import Checkbox from "@mui/joy/Checkbox";
import Typography from "@mui/joy/Typography";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const TitleBox = styled(TextField)(() => ({
  marginTop: "30px",
  width: "1450px",
}));

const TextBox = styled(TextField)(() => ({
  marginTop: "30px",
  width: "1450px",
}));

const ClubnameBox = styled(TextField)(() => ({
  width: "100%",
  marginTop: "35px",
  marginLeft: "25px",
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
  marginTop: "40px",
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

const DatePicker = styled(DateTimePicker)(() => ({
  marginTop: "40px",
  width: "710px",
}));

const FabButton = styled(Fab)(() => ({
  marginTop: "20px",
  backgroundColor: "#E8DEF8",
}));

const SaveRecruiting = styled(Button)(() => ({
  width: 180,
  height: 45,
  borderRadius: "10px",
  backgroundColor: "#6100AF",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontWeight: "bold",
  fontSize: 17,
  marginTop: "50px",
  marginBottom: "10px",
}));

export default function Write_Recruiting() {
  const [value, setValue] = useState([]);
  const [title, setTitle] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [description, setDescription] = useState();
  const [clubName, setClubName] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  function addRecruiting() {
    fetch(`http://localhost:8080/api/recruit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        imageUrl: "imageUrl",
        description: description,
        clubName: clubName,
        startDate: startDate,
        endDate: endDate,
        memberId: 2,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료되었습니다.");
      }
    });
  }

  return (
    <div>
      <div className={`${style.nav_menu}`}>
        <div className={`${style.menu}`}>
          <Link to="/introclub" className={`${style.detail_menu}`}>
            공동체 소개
          </Link>
          <div className={`${style.detail_menu}`}>|</div>
          <Link
            to="/recruiting"
            className={`${style.detail_menu}`}
            style={{ fontWeight: "bold" }}
          >
            리쿠르팅
          </Link>
        </div>
      </div>
      <div className={`${style.main_container}`}>
        <div className={`${style.header}`}>모집글 작성</div>
      </div>
      <hr className={`${style.line}`} />
      <div className={`${style.main_container}`}>
        <TitleBox
          id="outlined-basic"
          label="제목을 입력하세요."
          variant="outlined"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />

        <div className={`${style.sub_container}`}>
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
                {value.includes(item) && <CheckDone variant="outlined" />}
                <Checkbox
                  disableIcon
                  overlay
                  variant={"none"}
                  checked={value.includes(item)}
                  label={
                    value.includes(item) ? (
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        {item}
                      </Typography>
                    ) : (
                      <Typography
                        sx={{
                          fontWeight: "normal",
                          color: "black",
                        }}
                      >
                        {item}
                      </Typography>
                    )
                  }
                  //   variant={"none"}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setValue((val) => [item]);
                    } else {
                      setValue((val) => val.filter((text) => text !== item));
                    }
                  }}
                  slotProps={{
                    action: ({ checked }) => ({
                      sx: checked
                        ? {
                            borderTopLeftRadius: index === 0 ? "10px" : "0px",
                            borderBottomLeftRadius:
                              index === 0 ? "10px" : "0px",
                            borderTopRightRadius: index === 2 ? "10px" : "0px",
                            borderBottomRightRadius:
                              index === 2 ? "10px" : "0px",
                            borderColor: "#7B7B7B",
                            backgroundColor: "#E8DEF8",
                          }
                        : {
                            borderTopLeftRadius: index === 0 ? "10px" : "0px",
                            borderBottomLeftRadius:
                              index === 0 ? "10px" : "0px",
                            borderTopRightRadius: index === 2 ? "10px" : "0px",
                            borderBottomRightRadius:
                              index === 2 ? "10px" : "0px",
                            borderColor: "#7B7B7B",
                          },
                    }),
                  }}
                />
              </ClubCheckButton>
            ))}
          </ButtonBox>
          <ClubnameBox
            id="outlined-basic"
            label="공동체 이름을 입력하세요."
            variant="outlined"
            onChange={(event) => {
              setClubName(event.target.value);
            }}
          />
        </div>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
            <div className={`${style.sub_container}`}>
              <DatePicker
                label="모집 시작 날짜"
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock,
                  seconds: renderTimeViewClock,
                }}
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
              />
              <DatePicker
                label="모집 마감 날짜"
                viewRenderers={{
                  hours: null,
                  minutes: null,
                  seconds: null,
                }}
                value={endDate}
                onChange={(newValue) => {
                  setEndDate(newValue);
                }}
              />
            </div>
          </DemoContainer>
        </LocalizationProvider>
        <TitleBox
          id="outlined-basic"
          label="지원자격을 입력하세요."
          variant="outlined"
        />
        <TextBox
          id="outlined-basic"
          label="내용을 입력하세요."
          variant="outlined"
          multiline
          rows={15}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <div>
          <div className={`${style.img_font}`}>이미지 추가</div>
          <FabButton aria-label="add">
            <AddIcon />
          </FabButton>
        </div>
        <div className={`${style.sub_container2}`}>
          <SaveRecruiting
            variant="solid"
            color="inherit"
            onClick={addRecruiting}
          >
            모집글 게시하기
          </SaveRecruiting>
        </div>
      </div>
    </div>
  );
}
