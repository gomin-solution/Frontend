import React, { useState } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import EditIcon from "@mui/icons-material/Edit";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import HowToVoteOutlinedIcon from "@mui/icons-material/HowToVoteOutlined";
import EventNoteIcon from "@mui/icons-material/EventNote";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userKeyAtom } from "../state/atom";
import { LoginAlert } from "../elements/Alert";

const SpeedDialTooltipOpen = () => {
  const actions = [
    { icon: <EventNoteIcon />, name: "답해주기", nav: "/post-advice" },
    { icon: <HowToVoteOutlinedIcon />, name: "골라주기", nav: "/post-choice" },
  ];

  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userKey = useRecoilValue(userKeyAtom);
  const navHandler = (e) => {
    if (userKey) {
      nav(`${e}`);
    } else {
      LoginAlert();
    }
  };

  return (
    <Box
      sx={{
        transform: "translateZ(0px)",
        flexGrow: 1,
        "& .MuiSpeedDial-fab": {
          backgroundColor: "#19696A",
          borderRadius: "0.5rem",
        },
        "& .MuiSpeedDial-fab:hover": {
          backgroundColor: "#19696A",
        },
      }}
    >
      <StDial
        ariaLabel="SpeedDial tooltip example"
        icon={<EditIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => navHandler(action.nav)}
          />
        ))}
      </StDial>
    </Box>
  );
};

export default SpeedDialTooltipOpen;

const StDial = styled(SpeedDial)`
  scale: 1;
`;
