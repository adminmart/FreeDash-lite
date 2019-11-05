<?php

if ( isset( $_POST['emailid'] ) ){

    $to         = $_POST['emailid'];
    $subject    = 'Download AdminMart';
    $message    = "<html><head><title>Download AdminMart</title></head><body><p>Download AdminMart</p></body></html>";     
    $headers    = 'MIME-Version: 1.0' . "\r\n";
    $headers    .= "Content-type:text/html;charset=UTF-8" . "\r\n"; // Always set content-type when sending HTML email
    $headers    .= 'From: <webmaster@adminmart.com>' . "\r\n";
    $headers    .= 'Reply-To: webmaster@adminmart.com' . "\r\n";
    //$headers    .= 'Cc: fcthemedesigns@gmail.com' . "\r\n";

    if ( mail( $to, $subject, $message, $headers ) ){

        echo json_encode( array( 'status' => true, 'message' => 'Download link has been sent successfully in email.' ) );
    } else {

        echo json_encode( array( 'status' => false, 'message' => 'Opps! Something went wrong. Email not sent.' ) );
    }

    die();
}