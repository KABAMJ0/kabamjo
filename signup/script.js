// add scripts here if you want

setInterval(() => {
    if (document.getElementById("uname").value == "" || document.getElementById("pword").value == "") {
        document.getElementById("submit").setAttribute("disabled","");
    } else {
        document.getElementById("submit").removeAttribute("disabled");
    }
});