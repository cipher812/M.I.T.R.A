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

        var lastRow = row;
        var lastCell = lastRow.cells[lastRow.cells.length - 1];

        if (element["status"] == 1) {
            lastCell.innerHTML =
                '<button type="button" class="btn waves-effect waves-light btn-success">Approved</button>';
        } else if (element["status"] == 2) {
            lastCell.innerHTML =
                '<button type="button" class="btn waves-effect waves-light btn-danger">Rejected</button>';
        } else if (element["status"] == 3) {
            lastCell.innerHTML =
                '<button type="button" class="btn waves-effect waves-light btn-primary">Moved to CFLTC</button>';
        } else {

            lastCell.innerHTML =
                '<button type="button" id="btnApprove" class="btn waves-effect waves-light btn-success">Approve</button> &nbsp; <button type="button" id="btnDelete" class="btn waves-effect waves-light btn-danger">Delete</button>';
        }
    }

}

$.ajax({
    type: 'POST',
    url: 'scripts/referal.php',
    success: function (data) {

        //console.log(data);
        const json = JSON.parse(data);
        const datax = document.querySelector("#tbUser > tbody");

        //console.log(json)
        setTable(datax, json);

    }
});


$(document).ready(function () {

    $("#tbUser").on('click', '#btnDelete', function () {
        $(this).closest('tr').remove();
        var trid = $(this).closest('tr').find('td:first').text();

        //trid= $(this).closest('tr').attr('id');

        $.ajax({
            url: "scripts/delete_ref.php",
            type: "POST",
            cache: false,
            data: {
                dat: trid
            },
            success: function (dataResult) {
                var dataResult = JSON.parse(dataResult);
                if (dataResult.statusCode == 200) {
                    $("#xscs").css("visibility", "visible");
                } else {

                }
            }
        });

    });

    $("#tbUser").on('click', '#btnApprove', function () {
        $(this).closest('tr').remove();
        var trid = $(this).closest('tr').find('td:first').text();

        //trid= $(this).closest('tr').attr('id');
        //$('#btnApprove').prop('value', 'Save');
        //console.log(trid)

        $.ajax({
            url: "scripts/approv_ref.php",
            type: "POST",
            cache: false,
            data: {
                dat: trid
            },
            success: function (dataResult) {
                var dataResult = JSON.parse(dataResult);
                if (dataResult.statusCode == 200) {
                    $("#scs").css("visibility", "visible");
                } else {

                }
            }
        });

    });

});


setInterval(function () {

    $.ajax({
        type: 'POST',
        url: 'scripts/referal.php',
        success: function (data) {

            //console.log(data);
            const json = JSON.parse(data);
            const datax = document.querySelector("#tbUser > tbody");

            //console.log(json)
            setTable(datax, json);

        }
    });


}, 1000);