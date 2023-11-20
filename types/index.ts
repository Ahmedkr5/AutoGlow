import { MouseEventHandler } from "react";

export interface CustombtnProps {
    title: string;
    containerStyles?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
    manufacturer : string;
    setManuFacturer: (manufacturer : string) => void;
}
