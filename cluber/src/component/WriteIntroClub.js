import { useState } from "react";
import style from "../css/WriteIntroClub.module.css";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Button from "@mui/material/Button";
import { Done } from "@mui/icons-material";
import Checkbox from "@mui/joy/Checkbox";
import Typography from "@mui/joy/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Autocomplete from "@mui/material/Autocomplete";

const TitleBox = styled(TextField)(() => ({
  marginTop: "30px",
  width: "1450px",
}));

const TextBox = styled(TextField)(() => ({
  marginTop: "30px",
  width: "1450px",
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
  marginTop: "30px",
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

export default function WriteIntroClub() {
  const [value, setValue] = useState([]);
  const [name, setName] = useState();
  const [imageUrl, setImageUrl] = useState("imageUrl");
  const [description, setDescription] = useState();
  const [category, setCategory] = useState(["aaa", "bbb"]);
  const [memberId, setMemberId] = useState(2);

  function addClub() {
    fetch(`http://localhost:8080/api/club`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        imageUrl: imageUrl,
        description: description,
        categories: category,
        memberId: memberId,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("게시글이 업로드되었습니다.");
      }
    });
  }

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
      <div className={`${style.main_container}`}>
        <div className={`${style.header}`}>소개글 작성</div>
      </div>
      <hr className={`${style.line}`} />

      <div className={`${style.main_container}`}>
        <TitleBox
          id="outlined-basic"
          label="공동체 이름을 입력하세요."
          variant="outlined"
          onChange={(event) => {
            setName(event.target.value);
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
        </div>

        <Autocomplete
          multiple
          onChange={(event, newValue) => {
            setCategory(newValue);
          }}
          id="tags-outlined"
          options={categories}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="카테고리 선택"
              placeholder="카테고리"
            />
          )}
          className={`${style.category_box}`}
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
          <SaveRecruiting variant="solid" color="inherit" onClick={addClub}>
            모집글 게시하기
          </SaveRecruiting>
        </div>
      </div>
    </div>
  );
}

const categories = [
  "공연",
  "사역",
  "힙합",
  "음악",
  "태권도",
  "정치",
  "경제",
  "경영",
  "춤",
  "연극",
  "노래",
  "밴드",
  "운동",
  "공부",
  "글로벌리더십학부",
  "기계제어공학부",
  "국제어문학부",
  "콘텐츠융합디자인학부",
  "경영경제학부",
  "생명과학부",
  "법학부",
  "전산전자공학부",
  "커뮤니케이션학부",
  "상담심리사회복지학부",
  "공간환경시스템공학부",
  "ICT창업학부",
];
