let mainPart = document.getElementById("mainTestWeb");
let saveButton = document.getElementById("confirmChangeTestWeb");
let style = document.querySelector("style");
let script = document.getElementById("scriptTagTestWeb");

let el = document.createElement("p");
el.innerHTML = "";
el.style.margin = 0;
el.style.display = "inline";


saveButton.addEventListener("click", function(){
    el.innerHTML = inp1TestWeb.value;
    mainPart.append(el);

    style.innerText = "";
    style.append(inp2TestWeb.value);

    script.innerText = "";
    script.append(inp3TestWeb.value);
})