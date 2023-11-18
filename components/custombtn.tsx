"use client";

import { CustombtnProps } from "@/types";

const Custombtn = ({ title, containerStyles, handleClick }: CustombtnProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={"flex-1"}>{title}</span>
    </button>
  );
};

export default Custombtn;
