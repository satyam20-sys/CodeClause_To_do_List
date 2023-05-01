<?php
$file = "tasks.txt";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $task = $_POST["task"];
  $priority = $_POST["priority"];
  $data = $task . "|" . $priority . "\n";
  file_put_contents($file, $data, FILE_APPEND);
  header("Location: " . $_SERVER["PHP_SELF"]);
  exit();
}

if (file_exists($file)) {
  $tasks = file($file);
} else {
  $tasks = array();
}

?>
