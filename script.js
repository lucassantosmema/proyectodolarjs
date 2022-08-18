
function getValueUsd() {

    let banco = document.getElementById("banco").value;
    let rp = Number(document.getElementById("rp").value);

    fetch(`https://api-dolar-argentina.herokuapp.com/api/dolarturista`)
        .then(response => response.json())
        .then(response => mostrarData(response))
        .catch(err => console.error(err));

    const mostrarData = (response) => {
        console.log(response);


        let valorFinal = parseInt(rp * response.venta);

        let body = '';
        body += `<h3> Tus rp te cuestan ${valorFinal} pesos ,  con el banco ${banco}</h3>`;

        document.getElementById('app').innerHTML = body;


    }


}




