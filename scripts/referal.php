<?php
include 'database.php';

$sql = "SELECT referals.refer_id,referals.referd_from,referals.referd_to,referals.patient_id,dailyrecord.doctor,referals.comment,referals.status FROM `referals` INNER JOIN dailyrecord ON referals.record_id = dailyrecord.record_id";
$result = mysqli_query($conn, $sql);

$res = array();

if (mysqli_num_rows($result) > 0) {
	while ($rows = mysqli_fetch_assoc($result)) {
		$res[] = array(
			'ref_id' => $rows['refer_id'],
			'ref_from' => $rows['referd_from'],
			'ref_to' => $rows['referd_to'],
			'pat_id' => $rows['patient_id'],
			'doc' => $rows['doctor'],
			'misc' => $rows['comment'],
			'status' => $rows['status']
		);
	}
}

$json = json_encode($res);
echo $json;

	//mysqli_close($conn);
?>