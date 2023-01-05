import React from "react";
 export default function D() {
    let dateObj= new Date()
    const days =["Sun","Mon","Tues","wed","Thurs","Fri","Sat"]
    const months=["Jan","Feb","march","April","May","June","July","Aug","Sept","Oct","Nov","Dec"]
    const day=days[dateObj.getDay()]
    const month =months[dateObj.getMonth()]
    const date= dateObj.getUTCDate()
    const year= dateObj.getUTCFullYear()
        return<h1 className="date"><b>{day}</b>,{month}  {date},{year}</h1>

 }