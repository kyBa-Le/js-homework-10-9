
function Add(){
    var pimg = document.getElementById("p-img").value;
    var pname = document.getElementById("p-name").value;
    var newPrice = document.getElementById("in-new-price").value;
    var oldPrice = document.getElementById("in-old-price").value;
    var type = document.getElementById("type").value;
    var pcode = document.getElementById("p-code").value;
    var valid = true;
    const input = document.getElementsByTagName("input");
    Array.prototype.slice.call(input, 1, input.length).forEach(element => {
        console.log(element.value);
        if(element.value == ""){
            valid = false;
        }
    });
    if(valid == false){
        window.alert("Vui lòng nhập đầy đủ thông tin!");
    }else{
        var node = document.querySelectorAll(".card")[0];
        var clone = node.cloneNode(true);
        clone.querySelector("img").src = pimg;
        var cardBody = clone.querySelector(".card-body");
        cardBody.querySelector(".card-title").innerHTML = pname + " - " + pcode;
        cardBody.querySelector(".price").querySelector("#new-price").textContent = newPrice;
        cardBody.querySelector(".price").querySelector("#old-price").textContent = oldPrice;
        var productType;
        if (type == "men") {
            document.getElementById("men-fashion").querySelector(".product").appendChild(clone);
        } else {
            document.getElementById("women-fashion").querySelector(".product").appendChild(clone);
        }
    }
}

function Clear(){
    const input = document.querySelectorAll("input");
    input.forEach(element => {
        element.value = "";
    });
}
function Close(){
    document.querySelector(".form").style.display = 'none';
    document.querySelector(".container").style.filter = 'none';
}
function openForm(){
    document.querySelector(".form").style.display = 'flex';
    document.querySelector(".container").style.filter = 'blur(5px)';
}