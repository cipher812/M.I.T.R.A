<?php

include 'database.php';

$sql = "SELECT  SUM(active_cases) AS tacases , SUM(recoverd) AS trec , SUM(deaths) AS tdead FROM ccc_table;";
$result = mysqli_query($conn, $sql);

$res = array();

if (mysqli_num_rows($result) > 0) {
    while ($rows = mysqli_fetch_assoc($result)) {
        $res = array(
            "tcases" => ($rows['tacases']+$rows['trec']+ $rows['tdead']),
            "tacases" => $rows['tacases'],
            "trec" => $rows['trec'],
            "tdead" => $rows['tdead']
        );
    }
}

echo json_encode($res);

?>