// alert('test');

// var idlinks = document.getElementsByClassName("id-link");
// var tabcontents = document.getElementsByClassName("tab");

// function opentab(tabname, event) {
//     // Remove "active" class from all id links
//     for (var i = 0; i < idlinks.length; i++) {
//         idlinks[i].classList.remove("active");
//     }
//     // Remove "active-tab" class from all tab contents except the one being activated
//     for (var i = 0; i < tabcontents.length; i++) {
//         if (tabcontents[i].id === tabname) {
//             tabcontents[i].classList.add("tab[i]");
//         } else {
//             tabcontents[i].classList.remove("active-tab");
//         }
//     }
//     // Add "active" class to the clicked id link
//  event.currentTarget.classList.add("active");
// }










// alert('test');

// var idlinks = document.getElementsByClassName("id-link");
// var tabcontents = document.getElementsByClassName("tab");

// function opentab(tabname, event) {
//     // Remove "active" class from all id links
//     for (var i = 0; i < idlinks.length; i++) {
//         idlinks[i].classList.remove("active");
//     }
//     // Remove "active-tab" class from all tab contents
//     for (var i = 0; i < tabcontents.length; i++) {
//         tabcontents[i].classList.remove("active-tab");
//     }
//     // Add "active" class to the clicked id link
//     event.currentTarget.classList.add("active");
//     // Show the corresponding tab content
//     document.getElementById(tabname).classList.add("active-tab");
// }

var idlinks = document.getElementsByClassName("id-link");
var tabcontents = document.getElementsByClassName("tab");











// function opentab(tabname) {
//     // সমস্ত আইডি লিঙ্ক থেকে "active" ক্লাস অপসারণ করুন
//     for (var i = 0; i < idlinks.length; i++) {
//         idlinks[i].classList.remove("active");
//     }
//     // সমস্ত ট্যাব কন্টেন্ট থেকে "active-tab" ক্লাস অপসারণ করুন
//     for (var i = 0; i < tabcontents.length; i++) {
//         tabcontents[i].classList.remove("active-tab");
//     }
//     // ক্লিক করা আইডি লিঙ্কে "active" ক্লাস যোগ করুন
//     event.currentTarget.classList.add("active");
//     // মূল্যায়নের অনুযায়ী সাপেক্ষে ট্যাব কন্টেন্ট দেখান
//     document.getElementById(tabname).classList.add("active-tab");
// }


function opentab(tabname, event) {
    // Remove "active" class from all id links
    for (var i = 0; i < idlinks.length; i++) {
        idlinks[i].classList.remove("active");
    }
    // Remove "active-tab" class from all tab contents
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    // Add "active" class to the clicked id link
    event.currentTarget.classList.add("active");
    // Show the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}


// function opentab(tabname, event){
//     for(idlink of idlinks){
//         tablink.classlist.remove("active")};
//     for(tabcontent of tabcontents){
//         tabcontent.classlist.remove("active-tab")}
//     event.currentTarget.classlist.add("active");
//     document.getElementById(tabname).classList.add("active-tab");
// }


