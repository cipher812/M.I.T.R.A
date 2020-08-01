<?php
	include 'database.php';

	$id=$_POST['id'];
	$name=$_POST['name'];
	$ward=$_POST['ward'];
    $pass=$_POST['password'];
	$tno=$_POST['tno'];
	
	//echo $doc,$from,$to,$pid,$misc;
	//echo $pass;
	$hashed=md5($pass);

	$sql1 = "INSERT INTO `ccc_table` (`centre_id`, `centre_name`, `centre_ward`, `total_bed`, `available_beds`, `total_cases`, `active_cases`, `recoverd`, `deaths`) VALUES ('$id', '$name', '$ward', '$tno', NULL, NULL, NULL, NULL, NULL);";
	$sql2 = "INSERT INTO `cfltc_login` (`cfltc_id`, `password`, `last_login`) VALUES ('$id', '$hashed', NULL);";

    if (mysqli_query($conn, $sql1) and mysqli_query($conn, $sql2))
    {
		echo json_encode(array("statusCode"=>200));
	} 
    else
    {
		echo json_encode(array("statusCode"=>201,"error"=>mysqli_error($conn)));
    }
    

	mysqli_close($conn);
