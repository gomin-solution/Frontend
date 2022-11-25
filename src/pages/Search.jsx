import Footer from "../elements/Footer";
import { Header7 } from "../elements/Header";
import styled from "styled-components";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Container } from "../shared/css";

const Search = () => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <>
      <Header7 title={"고민 접기"} />
      <Stcontainer>
        <StRankTitleWrap>
          <span style={{ fontWeight: "600" }}>홍길동님의 답변이 필요해요</span>
          <span style={{ fontSize: "0.875rem", color: "#627C7C" }}>
            2022. 11. 21. 기준
          </span>
        </StRankTitleWrap>
        <StRankWrap>
          <p>
            <span>1</span> [연애] 이대로 헤어지는 게 맞을까요?
          </p>
          <NorthIcon style={{ fontSize: "1rem", color: "#FF5449" }} />
        </StRankWrap>
        <StRankWrap>
          <p>
            <span>2</span> [연애] 초반엔 정말 좋았는데
          </p>
          <SouthIcon style={{ fontSize: "1rem", color: "#8CD3D4" }} />
        </StRankWrap>
        <hr style={{ marginTop: "2rem" }} />
        <StTitle>최근 검색어</StTitle>
        <Stack direction="row" spacing={1}>
          <Chip
            label="여행"
            variant="outlined"
            onDelete={handleDelete}
            sx={{
              backgroundColor: "#E0E3E2",
              border: "none",
              borderRadius: "0",
            }}
          />
        </Stack>
        <StTitle>추천 검색어</StTitle>
        <Stack direction="row" spacing={1}>
          <Chip
            label="여행"
            variant="outlined"
            sx={{
              backgroundColor: "#8CD3D4",
              border: "none",
              borderRadius: "0",
            }}
          />
        </Stack>
      </Stcontainer>
      <Footer title={"고민 접기"} />
    </>
  );
};

export default Search;

const Stcontainer = styled.div`
  ${Container}
  height: calc(100vh - 8rem);
  padding: ${(props) => props.theme.paddings.xl};
`;

const StRankTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.margins.xl};
`;

const StRankWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.margins.xsm};
  font-size: ${(props) => props.theme.fontSizes.sm};
  span {
    color: ${(props) => props.theme.Colors.blueGreen3};
  }
`;

const StTitle = styled.div`
  margin: 2.2rem 0rem 1.2rem;
  font-weight: ${(props) => props.theme.fontWeights.lg}; ;
`;
