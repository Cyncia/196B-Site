<?php 

// Include the database configuration file
include("dbConfig.php");
$statusMsg = '';

echo "first";
// File upload path
$targetDir = "uploads/";
//$fileName = basename($_FILES["file"]["name"]);
//$targetFilePath = $targetDir . $fileName;
//$fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);

if(isset($_POST['submit'] && !empty($_FILES["file"]["name"])){
 echo "second";
 // Allow certain file formats
 // $allowTypes = array('jpg','png','jpeg','gif','pdf');

 // Count total files
 $countfiles = count($_FILES['file']['name']);

 // Looping all files
 for($i=0;$i<$countfiles;$i++){
 	$filename = $_FILES['file']['name'][$i];
 	$targetFilePath = $targetDir . $fileName;
 
	// Upload file
	if(move_uploaded_file($_FILES['file']['tmp_name'][$i],$targetFilePath)) {
		//$insert = $db->query("INSERT into images (file_name, uploaded_on) VALUES ('".$fileName."', NOW())");
		
	}

		//if($insert){
		//	$statusMsg = "The file ".$fileName. " has been uploaded successfully.";
		//} else{
		//	$statusMsg = "File upload failed, please try again.";
		//} 

	else{
		$statusMsg = "Sorry, there was an error uploading your file.";
	} 
}

else{
   	$statusMsg = 'Please select a file to upload.';
}

// Display status message
echo $statusMsg;
}

?>