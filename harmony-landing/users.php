<?php require './db.php' ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="./assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="./assets/css/form.css" rel="stylesheet" />

</head>

<body>
    <div class="text-center tableTitle">
        <h1>User List</h1>
    </div>
    <div class="container">
        <div class="tableBox">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>fullname</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>created at</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $sql = "SELECT * FROM users";
                    $result = mysqli_query($con, $sql);

                    if (mysqli_num_rows($result) > 0) {
                        // output data of each row
                        while ($row = mysqli_fetch_assoc($result)) {
                             ?>
                                <tr>
                                   <td><?php echo $row['id'] ?></td>
                                   <td><?php echo $row['fullname'] ?></td>
                                   <td><?php echo $row['email'] ?></td>
                                   <td><?php echo $row['phone'] ?></td>
                                   <td><?php echo $row['created_at'] ?></td>
                                </tr>
                             <?php
                        }
                    }
                    ?>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>