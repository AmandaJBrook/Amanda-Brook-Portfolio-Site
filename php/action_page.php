// This php gathers contact form data and submits it to my email address.

// Gathers contact form data
<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];
?>
// Composes Email
<?php
  $email_from = 'amandabrook131@gmail.com';
  $email_subject = "Website Contact Inquiry";
  $email_body = "You have received a new message from the user $name.\n".
                          "Here is the message:\n $message".
?>
// Sends composed email to my inbox
<?php
  $to = "amandabrook131@gmail.com";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  mail($to,$email_subject,$email_body,$headers);
 ?>
