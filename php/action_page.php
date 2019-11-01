<?php
// This php file gathers contact form data and submits it to my email address.

// Error Reporting
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");

// Gathers contact form data
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

// Confirms message sent
if ($_POST['submit']) {
     if (mail ($name, $email, $subject)) {
      echo '<p>Your message has been sent!</p>';
        }
     else {
      echo '<p>Something went wrong, go back and try again!</p>';
     }
}

// Composes Email
$email_from = 'amandabrook131@gmail.com';
$email_subject = "Website Contact Inquiry";
$email_body = "You have received a new message from the user $name.\n".
              "Here is the message:\n $message".

// Sends composed email to my inbox
$to = "amandabrook131@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
mail($to,$email_subject,$email_body,$headers);
?>
