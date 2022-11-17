import { height } from "@mui/system";
import React from "react";
import Swal from "sweetalert2";

const Alert = () => {
  const alertTest = () => {
    Swal.fire({
      title: "삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "네",
      cancelButtonText: "아니오",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      width: "85%",
      height: "100%",
      fontSize: "1rem",
    });
  };

  return <div onClick={alertTest}>Alert</div>;
};

export default Alert;
