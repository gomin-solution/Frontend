import React, { useState } from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import EditIcon from "@mui/icons-material/Edit";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const actions = [
  { icon: <FileCopyIcon />, name: "골라주기", nav: "/post-choice" },
  { icon: <SaveIcon />, name: "조언하기", nav: "/post-advice" },
];

export default function SpeedDialTooltipOpen() {
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navHandler = (e) => {
    nav(`${e}`);
  };

  return (
    <Box sx={{ height: 330, transform: "translateZ(0px)", flexGrow: 1 }}>
      <Backdrop open={open} />
      <StDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", bottom: "1rem", right: "1rem" }}
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
}

const StDial = styled(SpeedDial)`
  scale: 0.8;
`;
