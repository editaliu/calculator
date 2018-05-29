function sudeti() {
    var sk1 = document.getElementById("pirmas").value;

    var sk2 = document.getElementById("antras").value;

    var suma = Number(sk1) + Number(sk2);
    document.getElementById("viso").innerHTML = suma;
}

function atimti() {
    var sk1 = document.getElementById("pirmas").value;

    var sk2 = document.getElementById("antras").value;

    var ateme = Number(sk1) - Number(sk2);
    document.getElementById("viso").innerHTML = ateme;
}

function dauginti() {
    var sk1 = document.getElementById("pirmas").value;

    var sk2 = document.getElementById("antras").value;

    var suma = Number(sk1) * Number(sk2);
    document.getElementById("viso").innerHTML = suma;
}

function dalinti() {
    var sk1 = document.getElementById("pirmas").value;

    var sk2 = document.getElementById("antras").value;

    var suma = Number(sk1) / Number(sk2);
    document.getElementById("viso").innerHTML = suma;
}
