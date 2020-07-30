$.ajax({
    type: 'POST',
    url: 'scripts/data_district.php',
    success: function (data) {
        const json = JSON.parse(data);
        //console.log(data)

        $("#tcases").text(json['tcases']);
        $("#tacases").text(json['tacases']);
        $("#trec").text(json['trec']);
        $("#tdead").text(json['tdead']);

    },
    error: function (jqXHR, status, err) {
        console.log("Error")
    }
});

$(document).ready(function () {

    $("#cfltcData").hide();

    $("#txtSearch").change(function () {

        var id = $('#txtSearch').val();
        $("#cfltc_data").show();
        //console.log(id);

        $.ajax({
            type: 'POST',
            url: 'scripts/data_cfltc.php',
            cache: false,
            data: {
                dat: id
            },
            success: function (data) {
                const json = JSON.parse(data);
                //console.log(data)

                if (json["status"] == true) {
                    alert("Showing data for : " + id);
                    $("#subx").text("CFLTC Wise - Dashboard")

                    $("#cfltcData").show();
                    $("#cid").text(id);
                    $("#cname").text(json['center_name']);
                    $("#cplc").text(json['center_ward']);
                    $("#cbed").text(json['total_bed']);


                    $("#tcases").text(json['tcases']);
                    $("#tacases").text(json['tacases']);
                    $("#trec").text(json['trec']);
                    $("#tdead").text(json['tdead']);
                } else {
                    alert("Please check CFLTC Id");
                }

            },
            error: function (jqXHR, status, err) {
                console.log("Error")
            }
        });


    });

});