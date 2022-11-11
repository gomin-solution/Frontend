import React from "react";
import { Switch } from "@mui/material";

function AdviceForm({ category }) {
  return (
    <div>
      <p>카테고리: {category}</p>
      <input type="text" placeholder="글제목" />
      <input type="textarea" placeholder="글내용" />
      <p>성인만 허용</p>
      <Switch />
    </div>
  );
}

export default AdviceForm;
