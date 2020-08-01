<?php
include 'database.php';

$sql = "SELECT `centre_id`,`centre_name`,`centre_ward`,`total_bed` FROM `ccc_table`";
$result = mysqli_query($conn, $sql);

$res = array();

if (mysqli_num_rows($result) > 0) {
    while ($rows = mysqli_fetch_assoc($result)) {
        $id = $rows['center_id'];
        $sql="CALL getTotalCFLTCCount('$id')";

        $result2=mysqli_query($conn, $sql);
        $counts=mysqli_fetch_assoc($result2);


        $res[] = array(
            "center_id" => $rows['centre_id'],
            "center_name" => $rows['centre_name'],
            "center_ward" => $rows['centre_ward'],
            "total_bed" => $rows['total_bed'],
            "available_bed"=>($rows['total_bed']-$counts['active'])
            //"available_bed" => 123
        );
    }
}


$json = json_encode($res);
echo $json;

?>