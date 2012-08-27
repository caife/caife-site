<?php
if ($_POST) {

    include("class.phpmailer.php");
    $mail = new PHPMailer();

    $mail->From = "caife@caife.com.br";
    $mail->FromName = "Caife Software";

    $mail->AddReplyTo($_POST['email']);
    $mail->IsHTML(false);
    $mail->Subject = "[CAIFE] Contato";
    $mail->Body = "Formulário de contato enviado pelo site em " . date("d/m/Y H:i") . ":

E-mail: " . $_POST['email'] . "

IP: " . $_SERVER['REMOTE_ADDR'] . "
____________________________________________________________
Caife Software
www.caife.com.br";

    $mail->AddAddress('caife@caife.com.br', 'Caife Software'); //para quem vai ser enviado o email de contato
    #$mail->AddAddress('suporte@caife.com.br', 'Suporte - Caife Software'); //pode ser adicionado um segundo contato

    if($mail->Send()){
        echo 'E-mail enviado com sucesso';
    }else{
        echo 'Erro ao enviar email. Tente Novamente';
    }
    $mail->ClearAddresses();
}
?>