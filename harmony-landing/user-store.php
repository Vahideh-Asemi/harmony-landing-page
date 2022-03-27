<?php

require './db.php';

$fullname = $_POST['fullname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$created_at = date_default_timezone_get();

$sql = "INSERT INTO `users`(`fullname`, `phone`, `email`) VALUES ('$fullname' , '$phone' , '$email')";
if (mysqli_query($con, $sql)) {
    return true;
} else {
    return false;
}
