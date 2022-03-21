function Bt() {
    var A = window.document.getElementById("user").value;
    if (A == "" || A == null) {

        alert("عفوا ادخل الاسم");
    }
    var bb = window.document.getElementById("checkbox").getAttribute('checked');
    if (bb) {
        alert(09);
    }
}

function mal() {
    var x = window.document.getElementById('inb1').value;
    var z;
    alert(z);
}

function c1(f) {
    document.body.style.background = f;
}
// --------------------

function Bt() {

    var v = window.document.getElementById("user").value;


    var x = new Date();

    if (x.getHours() < 12) {

        alert("صباح الخير" + " " + v + " " + "الزمن الان" + " " + x.getHours() + " " + " " + "مساء");
    } else if (x.getHours() > 12 && x.getHours() < 18) {
        alert("نهار سعيد" + " " + v + " " + "الزمن الان" + " " + x.getHours() + " " + " " + "مساء")
    } else {

        alert("مساء الخير" + " " + v + " " + "الزمن الان" + " " + x.getHours() + " " + " " + "مساء")

    }
}
// ------------------
function fact() {
    let x, y = 1,
        i;
    x = document.getElementById("inpt").value;
    for (i = x; i >= 1; i--) {
        y = y * i;
    }
    document.getElementById("result").textContent = y;
}