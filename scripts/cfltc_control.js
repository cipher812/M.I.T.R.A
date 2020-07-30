$(document).ready(function () {

    $("#xcadd").click(function () {
        
        var aid = $('#aid').val();
        var aname = $('#aname').val();
        var apass = $('#apassword').val();
        var atno = $('#atno').val();

        //console.log(aid);
        //console.log(apass);


        $.ajax({
            type: 'POST',
            url: 'scripts/cfltc_add.php',
            cache: false,
            data: {
                id: aid,
                name:aname,
                password:apass,
                tno:atno
            },
            success: function (data) {

                console.log(data);
                const json = JSON.parse(data);

                if(json["statusCode"]==200)
                {
                    alert("CFLTC Created Sucessfully");
                }
                else
                {
                    alert("CFLTC Creation Failed - Check Center Id");
                }
  
            },
            error: function (jqXHR, status, err) {
                console.log("Error")
            }
        });


    });

    $("#xcdel").click(function () {
        
        var did = $('#did').val();
        var dpass = $('#dpass').val();

        //console.log(aid);
        //console.log(apass);


        $.ajax({
            type: 'POST',
            url: 'scripts/cfltc_del.php',
            cache: false,
            data: {
                id: did,
                password:dpass,
            },
            success: function (data) {

                //console.log(data);
                const json = JSON.parse(data);

                if(json["statusCode"]==200)
                {
                   window.alert("CFLTC Deleted Sucessfully");
                }
                else
                {
                    window.alert("CFLTC Deletion Failed - Check Password or Id");
                }
  
            },
            error: function (jqXHR, status, err) {
                console.log("Error")
            }
        });

    });

    $("#xcchg").click(function () {
        
        var cid = $('#cid').val();
        var cpass = $('#cpass').val();

        //console.log(aid);
        //console.log(apass);


        $.ajax({
            type: 'POST',
            url: 'scripts/cfltc_edit.php',
            cache: false,
            data: {
                id: cid,
                password:cpass,
            },
            success: function (data) {

                console.log(data);
                const json = JSON.parse(data);

                if(json["statusCode"]==200)
                {
                   window.alert("CFLTC Updated Sucessfully");
                }
                else
                {
                    window.alert("CFLTC Updation Failed - Check Password or Id");
                }
  
            },
            error: function (jqXHR, status, err) {
                console.log("Error")
            }
        });

    });

});