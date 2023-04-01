const monthNameEle= document.getElementById("month-name");
const dayNameEle= document.getElementById("day-name");
const dayNumEle= document.getElementById("day-number");
const yearEle=document.getElementById("year");

const date = new Date();

monthNameEle.innerText=date.toLocaleString("en",{month: "long"});
dayNameEle.innerText=date.toLocaleString("en",{weekday:"long"});
dayNumEle.innerText=date.getDate();
yearEle.innerText=date.getFullYear();