function calculateTip(event) {
    event.preventDefault()
    var bill = document.getElementById('bill').value;
    var serviceQual = document.getElementById('serviceQual').value;
    var pessoas = document.getElementById('pessoas').value;

    if(bill == '' | serviceQual == 0){
        alert('Por favor, preencha os valores')
        return
    }

    if(pessoas == '' | pessoas <= 1){
        pessoas = 1;
        document.getElementById("each").style.display = "none"
    }else{
        document.getElementById("each").style.display = "block"
    }

    var conta = (bill * serviceQual) / pessoas;
    conta = conta.toFixed(2);
    document.getElementById("tip").innerHTML = conta
    document.getElementById("totalTip").style.display = "block"
}
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("tipsForm").addEventListener("submit", calculateTip)

