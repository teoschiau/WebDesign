function sortElements(){
    const input = document.getElementById("numberInput").value;
    const array =  input.split(",")
                        .map(n =>parseInt(n.trim()))
                        .filter(n => !isNaN(n));

    if(array.length == 0){
        alert("Please enter valid numbers!");
    }

    array.sort((a,b) => a-b);

    const table = document.getElementById("resultTable");
    table.innerHTML = "";

    let row;
    let cell;
    array.forEach((n,i) =>{
        if(i % 5 === 0){
            row = table.insertRow();
        }
        cell = row.insertCell();
        cell.textContent = n;
    });
}