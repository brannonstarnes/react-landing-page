import React from "react";
import HeroEmail from "./HeroEmail";
import HeroTitle from "./HeroTitle";
import HeroMedia from "./HeroMedia";

export default function Hero(){

    return (
        <div>
            <HeroTitle />
            <HeroMedia />
            <HeroEmail />
        </div>
    )
}