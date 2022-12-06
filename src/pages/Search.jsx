import Footer from "../elements/Footer";
import { Header7 } from "../elements/Header";
import styled from "styled-components";
import { Container } from "../shared/css";
import { useQuery } from "react-query";
import { userSearch } from "../api/searchApi";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const Search = () => {
  // const handleDelete = () => {
  //   console.info("You clicked the delete icon.");
  // };

  const { data } = useQuery("userSearch", userSearch, {
    refetchOnWindowFocus: false,
  });
  const nowTime = dayjs().format("YYYY-MM-DD HH:mm");
  const nav = useNavigate();

  return (
    <>
      <Header7 title={"고민접기"} />
      <Stcontainer>
        <StRankTitleWrap>
          <span style={{ fontWeight: "600" }}>
            {data?.nickname}의 답변이 필요해요.
          </span>
          <span style={{ fontSize: "0.875rem", color: "#627C7C" }}>
            {nowTime}
          </span>
        </StRankTitleWrap>
        {data?.advice.map((item, idx) => (
          <StRankWrap key={item.adviceId}>
            <p
              onClick={() =>
                nav(`/board-advice/${item.adviceId}`, { state: "/search" })
              }
            >
              <span>{idx + 1}</span>
              <span className="cate">[{item.category}]</span>
              {item.title}
            </p>
          </StRankWrap>
        ))}
      </Stcontainer>
      <Footer title={"고민접기"} />
    </>
  );
};

export default Search;

const Stcontainer = styled.div`
  ${Container}
  margin-top: 4rem;
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
    font-weight: ${(props) => props.theme.fontWeights.lg};
  }
  .cate {
    margin: 0 0.5rem;
    color: ${(props) => props.theme.Colors.blueGreen3};
  }
`;

// const StTitle = styled.div`
//   margin: 2.2rem 0rem 1.2rem;
//   font-weight: ${(props) => props.theme.fontWeights.lg}; ;
// `;

{
  /* <hr style={{ marginTop: "2rem" }} />
<StTitle>최근 검색어</StTitle>
<Stack direction="row" spacing={1}>
  <Chip
    label="여행"
    variant="outlined"
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
</Stack> */
}

// import NorthIcon from "@mui/icons-material/North";
// import SouthIcon from "@mui/icons-material/South";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
