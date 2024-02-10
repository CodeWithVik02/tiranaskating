
import React from "react";
import MyHero from "./Main/Hero";
import Features from "./Features";
import Info from "./Main/Info";
import Location from "./Loacation/Loaction";
import Form from "./Form/Form";

export default function Home(){
const paddignTop = '100px'
return(
<>
<MyHero/>
<Features/>
<Info/>
<Location/>
<Form paddingTop={paddignTop}/>
</>
)

}