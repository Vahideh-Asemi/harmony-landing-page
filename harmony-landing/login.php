<?php

require './db.php';

session_start();

$query = 'SELECT * FROM admins WHERE id = "1"';
$result = mysqli_query($con,$query);

while($row = mysqli_fetch_assoc($result)) {
  
    if($_POST['username'] == $row['username'] && $_POST['password'] == $row['password']) {
        header('Location: http://localhost/harmony-landing/users.php');
        return true;
    }
}
header('Location: http://localhost/harmony-landing/login.html');
