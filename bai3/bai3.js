var no = 0;
var total = 0;
function Add(){
    no ++;
    var pname = (document.getElementById("pname").value);
    var qty = parseFloat(document.getElementById("qty").value);
    var pp = parseFloat(document.getElementById("pp").value);
    var subTotal = qty * pp;
    total += subTotal;
    var row = "<tr>";
    row += "<td>" + no + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + pp + "</td>";
    row += "<td>" + subTotal + "</td>";
    row += "</tr>";
    document.getElementById("table").innerHTML += row;
    var lRow = document.getElementById("last-row");
    document.getElementById("total").innerHTML = total;
    document.getElementById("table").appendChild(lRow);
}