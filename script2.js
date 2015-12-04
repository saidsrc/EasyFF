var handle = setInterval(function () {
var isithidden = document.getElementById('sendFormDiv').style.length;
        if (isithidden === 0) {
        var btn = document.createElement("Input");
btn.value = "Send FFs";
btn.className = "pure-button pure-button-primary sendbutton";
btn.type = "Submit";
        var urltextarea = document.getElementsByClassName('pure-button pure-button-primary')[1];
            urltextarea.parentNode.insertBefore(btn, urltextarea);
            console.log('Not Hidden');
        var sendbtn = document.getElementsByClassName('sendbutton')[0];
        var clickaction = function () {
        var AncSel = document.getElementById('anchorSelector').value;
        var PriSel = document.getElementById('priceSelector').value;
        var StoSel = document.getElementById('stockSelector').value;

        localStorage.setItem("AncSel", AncSel);
        localStorage.setItem("PriSel", PriSel);
        localStorage.setItem("StoSel", StoSel);
        console.log(AncSel + "," + PriSel + "," + StoSel);
        }; 
        sendbtn.addEventListener("click", clickaction);
                 
            
            
            
            
clearInterval(handle);
handle = 0;};
        }, 300);

