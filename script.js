function click() {
const btnMore = document.querySelector(".time_trip_more");
const timeList = document.querySelector(".time_more");
const flexToday = document.querySelector(".details_trip_item_more");

btnMore.onclick = function (e) {
    e.preventDefault();
    btnMore.remove();
    //flexToday.style.display = "block";
    flexToday.style.flexWrap = "wrap";
    timeList.innerHTML += `<li class= "added_elem time_trip_desktop">12:00</li>
    <li class="added_elem time_trip_desktop">12:00</li>
    <li class="added_elem time_trip_desktop">12:00</li>
    <button class="added_elem time_trip_less">свернуть</button>`;
    
    const btnLess = document.querySelector(".time_trip_less");
    const addedElem = Array.from(document.getElementsByClassName("added_elem"));
    if(btnLess) {
    btnLess.onclick = function(e) {
        e.preventDefault();
        timeList.insertAdjacentHTML("beforeend", '<button class="time_trip_more">eщё...</button>');
        flexToday.style.display = "flex";
        for(let i = 0; i < addedElem.length; i++) {
        timeList.removeChild(addedElem[i]);
        location.reload();
        }
    }
}
   
}


}

click();