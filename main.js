const r = document.getElementById("r");
const t = document.getElementById("t");

function c(){
    t.value = this.value;
}

r.oninput = c;

