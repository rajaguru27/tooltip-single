var section =document.getElementById("about");
var div =document.createElement("div");
 section.appendChild(div)
 div.classList.add("container");

 var card = document.createElement("div");
 div.appendChild(card);
 card.classList.add("card");

 var image_card =document.createElement("div");
 card.appendChild(image_card);
 image_card.classList.add("image-card");



 var image =document.createElement("img");
 image_card.appendChild(image);
 image.classList.add("imgs");
 image.src ="image/images.jpeg";

 var detail =document.createElement("detail");
 card.append(detail);
 detail.classList.add("detail");

 var head =document.createElement("h1");
 head.classList.add("head");
 detail.appendChild(head);
 head.innerHTML =" RC_390";

 var para =document.createElement("p");
 para.classList.add("para");
 detail.appendChild(para);
 para.innerHTML ="BRAND:KTM";

 var para =document.createElement("p");
 para.classList.add("para");
 detail.appendChild(para);
 para.innerHTML ="milage:40km";

 var para =document.createElement("p");
 para.classList.add("para");
 detail.appendChild(para);
 para.innerHTML ="price:30000";

 

 var para1 =document.createElement("p");
 para1.classList.add("para1");
 detail.appendChild(para1);
 para1.innerHTML ="bike_cc:390";

 var button =document.createElement("a");
 image_card.appendChild(button);
 button.classList.add("button_card");
 button.innerHTML="More detail";
 button.setAttribute("href","#");
 button.setAttribute("onclick","viewdetails()");

var icon =document.getElementById("icon-close");
detail.appendChild(icon);
icon.setAttribute("onclick","hidedetails()");



 function viewdetails(){
    image_card.nextElementSibling.classList.add("view");
 }
 function hidedetails(){
    icon.parentNode.classList.remove("view");
 }


