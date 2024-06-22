let Attadancedetails = [
  {
    img: "../assets/images/time-logo.svg",
    time: "March 22, 2023",
    status: "on Time",
    "checkIn-Text": "Check in time",
    "checkIn-time": "08:53",
    "checkOut-Text": "Check out time",
    "checkOut-time": "17:15",
  },
  {
    img: "../assets/images/time-logo.svg",
    time: "March 12, 2023",
    status: "Late",
    "checkIn-Text": "Check in time",
    "checkIn-time": "10:53",
    "checkOut-Text": "Check out time",
    "checkOut-time": "18:15",
  },
  {
    img: "../assets/images/time-logo.svg",
    time: "March 10, 2023",
    status: "Absent",
    "checkIn-Text": "Check in time",
    "checkIn-time": "-",
    "checkOut-Text": "Check out time",
    "checkOut-time": "-",
  },
  {
    img: "../assets/images/time-logo.svg",
    time: "March 11, 2023",
    status: "on Time",
    "checkIn-Text": "Check in time",
    "checkIn-time": "09:00",
    "checkOut-Text": "Check out time",
    "checkOut-time": "18:00",
  },
  {
    img: "../assets/images/time-logo.svg",
    time: "March 12, 2023",
    status: "on Time",
    "checkIn-Text": "Check in time",
    "checkIn-time": "08:40",
    "checkOut-Text": "Check out time",
    "checkOut-time": "17:35",
  },
  {
    img: "../assets/images/time-logo.svg",
    time: "March 13, 2023",
    status: "on Time",
    "checkIn-Text": "Check in time",
    "checkIn-time": "09:20",
    "checkOut-Text": "Check out time",
    "checkOut-time": "18:35",
  },
  {
    img: "../assets/images/time-logo.svg",
    time: "March 14, 2023",
    status: "Late",
    "checkIn-Text": "Check in time",
    "checkIn-time": "11:20",
    "checkOut-Text": "Check out time",
    "checkOut-time": "18:35",
  },
  {
    img: "../assets/images/time-logo.svg",
    time: "March 15, 2023",
    status: "on Time",
    "checkIn-Text": "Check in time",
    "checkIn-time": "9:20",
    "checkOut-Text": "Check out time",
    "checkOut-time": "16:35",
  },
  {
    img: "../assets/images/time-logo.svg",
    time: "March 16, 2023",
    status: "on Time",
    "checkIn-Text": "Check in time",
    "checkIn-time": "09:10",
    "checkOut-Text": "Check out time",
    "checkOut-time": "18:05",
  },
  {
    img: "../assets/images/time-logo.svg",
    time: "March 17, 2023",
    status: "on Time",
    "checkIn-Text": "Check in time",
    "checkIn-time": "09:10",
    "checkOut-Text": "Check out time",
    "checkOut-time": "18:05",
  },
  {
    img: "../assets/images/time-logo.svg",
    time: "March 18, 2023",
    status: "on Time",
    "checkIn-Text": "Check in time",
    "checkIn-time": "09:10",
    "checkOut-Text": "Check out time",
    "checkOut-time": "18:05",
  },
  {
    img: "../assets/images/time-logo.svg",
    time: "March 19, 2023",
    status: "on Time",
    "checkIn-Text": "Check in time",
    "checkIn-time": "09:10",
    "checkOut-Text": "Check out time",
    "checkOut-time": "18:05",
  },
];

let attadancescrollsection = document.querySelector(".attadance-card-wrap-main");
let attadanceCardParent = document.getElementById("attadance-card-wrap");
let pagnationElement = document.getElementById("pagination");
let FilterDropdownBtn = document.querySelectorAll("#filter-btn .dropdown-item");
let SortBtn=document.getElementById("sort-btn")

console.log("Data", Attadancedetails);

let Attadancedata = (data) => {
  attadanceCardParent.innerHTML = "";
  data.forEach((value, index) => {

    let cardHTML = `
             <div class="attadance-card">
                                  <div class="head-wrap">
                                      <div class="month">
                                          <img src="${
                                            value.img
                                          }" alt="time-logo">
                                          <span>${value.time}</span>
                                      </div>
                                      <div class="status ${
                                        value.status === "Late"
                                          ? "warning"
                                          : value.status === "on Time"
                                          ? "success"
                                          : value.status === "Absent"
                                          ? "light"
                                          : null
                                      }">${value.status}</div>
                                  </div>
                                  <div class="attadance-time-wrap">
                                      <div class="check-time-wrap">
                                          <div class="title">${
                                            value["checkIn-Text"]
                                          }</div>
                                          <div class="time">${
                                            value["checkIn-time"]
                                          }</div>
                                      </div>
                                      <div class="check-time-wrap">
                                          <div class="title">${
                                            value["checkOut-Text"]
                                          }</div>
                                          <div class="time">${
                                            value["checkOut-time"]
                                          }</div>
                                      </div>
                                  </div>
                              </div> 
          `;
    
    document.getElementById("attadance-card-wrap").innerHTML += cardHTML;
  });
};

Attadancedata(Attadancedetails);

let dynamicpagenation = () => {
  
  const container = document.getElementById("attadance-card-wrap");
  let getNumberOfRows = (container) => {
    const attadancecard = container.querySelectorAll(".attadance-card");
    if (attadancecard.length === 0) return 0;

    let uniqueRows = new Set();
    
    attadancecard.forEach((card) => {
      const rect = card.getBoundingClientRect();
      uniqueRows.add(rect.top);
    });
    
    return uniqueRows.size;
  };
  let NumberOfrows = getNumberOfRows(container);

    pagnationElement.innerHTML=""
  for (let num = 1; num <= NumberOfrows - 1; num++) {
    const listItem = document.createElement("li");
    listItem.className = "page-item";
    listItem.innerHTML = `<button class="page-link">${num}</button>`;
    pagnationElement.append(listItem);
  }

  let pagnationbtn = document.querySelectorAll(
    ".pagination .page-item .page-link"
  );
  pagnationbtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      let attadancecard = document.querySelectorAll(
        ".attadance-card-wrap .attadance-card"
      );
      attadanceCardParent.style.transform = `translateY(-${
        index * attadancecard[0].clientHeight
      }px)`;
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
   dynamicpagenation();
  let ViewBtns = document.querySelectorAll(".view-buttons .btn");
  ViewBtns.forEach((ViewBtn, index) => {
    ViewBtn.addEventListener("click", (event) => {
     
      ViewBtns.forEach((value, index) => {
        if (value.classList.contains("active")) {
          value.classList.remove("active");
        }
      });
      ViewBtn.classList.add("active");

      if(event.target.id==="list-view" || event.target.classList.contains("fa-bars")){
          attadanceCardParent.classList.add("list-view")
          dynamicpagenation()
      }
      else{
          attadanceCardParent.classList.remove("list-view")
          dynamicpagenation()
      }
    });
  });
});


  //   Filter

  FilterDropdownBtn.forEach((filterbtn, index) => {
    filterbtn.addEventListener("click", () => {

      let FilteredData = Attadancedetails.filter((value, index) => {
        return value.status === filterbtn.innerHTML;
      });

      console.log("FilteredData", FilteredData);
      Attadancedata(FilteredData);
       dynamicpagenation()
      
    });
  });

  // Sort function

  SortBtn.addEventListener("click",(event)=>{

    if(event.target.id==="sort-btn" || event.target.innerHTML==="Sort"){

      let Sorteddata= Attadancedetails.sort((a,b)=>{
         return new Date(a.time) - new Date(b.time)

      })
      Attadancedata(Sorteddata)
      console.log("Sorteddata",Sorteddata)
    }
  })