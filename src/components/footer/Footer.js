import React from "react";
import Logo from '../header/Logo'
import NavLists from "./NavLists";
import SignUp from "../signUp/SignUp";

export default function Footer(){

    return (
        <div>
            <Logo />
            <NavLists />
            <SignUp />
        </div>
    )
}