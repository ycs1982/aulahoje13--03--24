function relogio() {
    let d = new Date();
    var rel = document.querySelector("#relogio");
    rel.innerHTML = "<h1>Time right now is:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
    "</h1>"
}