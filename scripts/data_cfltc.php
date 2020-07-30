<?php

include 'database.php';

$id = $_POST['dat'];

$sql = "SELECT center_name , center_ward , total_bed , active_cases , recoverd , deaths FROM ccc_table WHERE center_id =  '$id'";
$result = mysqli_query($conn, $sql);

$res = array();

if (mysqli_num_rows($result) > 0) {
    while ($rows = mysqli_fetch_assoc($result)) {
        $res = array(
            "center_name" => $rows['center_name'],
            "center_ward" => $rows['center_ward'],
            "total_bed" => $rows['total_bed'],

            "tcases" => ($rows['active_cases'] + $rows['recoverd'] + $rows['deaths']),
            "tacases" => $rows['active_cases'],
            "trec" => $rows['recoverd'],
            "tdead" => $rows['deaths'],
            "status" => true
        );
    }
} else {
    $res = array("status" => false);
}

echo json_encode($res);

?>