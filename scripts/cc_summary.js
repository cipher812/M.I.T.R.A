function setTable(datax, json) {
    while (datax.firstChild) {
        datax.removeChild(datax.firstChild);
    }

    for (let element of json) {
        let row = datax.insertRow();

        for (value in element) {
            let cell = row.insertCell();

            var temp;
            temp = element[value]

            let text = document.createTextNode(temp);
            cell.appendChild(text);
            //console.log(value);
        }
    }

}


$(document).ready(function () {

    $.ajax({
        type: 'POST',
        url: 'scripts/cfltc_list.php',
        success: function (data) {
            //console.log(data);
            const json = JSON.parse(data);
            const datax = document.querySelector("#tbList > tbody");

            //console.log(json)
            setTable(datax, json);
        }
    });

});