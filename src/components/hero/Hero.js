import React from "react";
import HeroEmail from "./HeroEmail";
import HeroTitle from "./HeroTitle";
import HeroMedia from "./HeroMedia";
import { HeroWrap } from "./heroStyles";

export default function Hero(){

    return (
        <div>
            <HeroWrap>
                <HeroTitle  data-aos="fade-in" data-aos-once="true"/>
                <HeroMedia />
                <HeroEmail />
            </HeroWrap>
        </div>
    )
}