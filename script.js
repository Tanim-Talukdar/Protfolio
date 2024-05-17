var idlinks = document.getElementsByClassName("id-link");
var tabcontents = document.getElementsByClassName("tab");


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


