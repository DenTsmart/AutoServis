<?php
    $name = $_POST['user_name'];
	$phone = $_POST['user_phone'];
    $email = $_POST['user_email'];
    $text = $_POST['user_point'];

	$to = "nikta.info@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Request from the site";

	
	$msg="
    I am interested in your services
    My Name: $name 
    My Phone: $phone 
    My Email: $email 
    I found you in: $text"; 	
	mail($to, $subject, $msg, "From: $to ");

?>



<p class="proof" style="text-align: center; margin-top: 40px; font-size: 2rem;">Thank you, your request has been accepted.</p>
