<?php

include("db.php");
$table = "CREATE TABLE users (
id int(6) AUTO_INCREMENT COMMENT 'รหัสผู้ใช้',
name varchar(100) COMMENT 'ชื่อ-นามสกุล',
email varchar(100) COMMENT 'email',
username varchar(100) COMMENT 'ชื่อผู้ใช้',
password varchar(100) COMMENT 'รหัสผ่าน',
created_at timestamp default CURRENT_TIMESTAMP COMMENT 'วันที่สมัครสมาชิก',
updated_at timestamp default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'วันที่อัปเดต',
PRIMARY KEY (id)
)";

if ($conn->query($table) === TRUE) {
    echo "Table users created successfully";
}else{
    echo "Error creating table: ". $conn->error;
}

$conn->close();

?>