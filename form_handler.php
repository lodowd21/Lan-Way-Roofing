
<?php
/*
 TODO: send an automatic email
	if (isset($_POST["submit"])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
        $address = $_POST['address']
		$message = $_POST['message'];
		$human = intval($_POST['human']);
		$from = $email; 
		
		$to = 'lodowd@unca.edu'; 
		
		$subject = "Message from ".$name." ";
		
		$body = "From: $name\n "Address: $address\n "E-Mail: $email\n Message:\n $message";
 
		// Check if name has been entered
		if (!$_POST['name']) {
			$errName = 'Please enter your name';
		}

        // Check if address has been entered
		if (!$_POST['address']) {
			$errAddress = 'Please enter your address';
		}
		
		// Check if email has been entered and is valid
		if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Please enter a valid email address';
		}
		
 
// If there are no errors, send the email
if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
	if (mail ($to, $subject, $body, $from)) {
		$result='<div class="alert alert-success">Thank You! I will be in touch</div>';
	} else {
		$result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
	}
}
	}
?>
*/