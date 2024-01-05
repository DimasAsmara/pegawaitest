<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["add"])) {
    include 'connection.php';

    $name = $_POST["name"];
    $jabatan = $_POST["jabatan"];
    $gaji = $_POST["gaji"];

    // Perhatikan penggunaan kolom yang sesuai di dalam query INSERT
    $sql = "INSERT INTO data (name, jabatan, gaji) VALUES ('$name', '$jabatan', '$gaji')";

    if ($conn->query($sql) === TRUE) {
        header("Location: index.php");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
