 function sum(num,num2,num3,num4,num5,num6) {
    var num = parseInt(document.getElementById("a").value);
    var num2 = parseInt(document.getElementById("b").value);
    var num3 = parseInt(document.getElementById("c").value);
    var num4 = parseInt(document.getElementById("d").value);
    var num5 = parseInt(document.getElementById("e").value);
    var num6 = parseInt(document.getElementById("f").value);

    if (!/^[0-9]+$/.test(num && num2 && num3 && num4 && num5 && num6)) {
        alert("Wrong input data")
    } else {

        document.getElementById('output').value = num + num2 + num3 + num4 + num5 + num6;
    }
    return num + num2 + num3 + num4 + num5 + num6;
}
  function sub(num , num2,num3,num4,num5,num6) {
    var num = parseInt(document.getElementById("a").value);
    var num2 = parseInt(document.getElementById("b").value);
    var num3 = parseInt(document.getElementById("c").value);
    var num4 = parseInt(document.getElementById("d").value);
    var num5 = parseInt(document.getElementById("e").value);
    var num6 = parseInt(document.getElementById("f").value);

    if (!/^[0-9]+$/.test(num && num2 && num3 && num4 && num5 && num6)) {
        alert("Wrong input data")
    } else {

        document.getElementById('output').value = num - num2 - num3 - num4 - num5 - num6;
    }
    return num - num2 - num3 - num4 - num5 - num6;
}
  function mull(num,num2,num3,num4,num5,num6) {
    var num = parseInt(document.getElementById("a").value);
    var num2 = parseInt(document.getElementById("b").value);
    var num3 = parseInt(document.getElementById("c").value);
    var num4 = parseInt(document.getElementById("d").value);
    var num5 = parseInt(document.getElementById("e").value);
    var num6 = parseInt(document.getElementById("f").value);

    if (!/^[0-9]+$/.test(num && num2 && num3 && num4 && num5 && num6)) {
        alert("Wrong input data")
    } else {

        document.getElementById('output').value = num * num2 * num3 * num4 * num5 * num6;
    }
    return num * num2 * num3 * num4 * num5 * num6;
}


