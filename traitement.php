<body>
<div id="message">
<?php 

if(isset($_POST) && isset($_POST['nom']) && isset($_POST['email']) && isset($_POST['message'])){




  $secret = "6LdE1Q4TAAAAABL9xyH6qVkGjgaTHd780C-2AYn1";      
  $ip = $_SERVER['REMOTE_ADDR'];        
  $captcha = $_POST['g-recaptcha-response'];       
  $rsp  = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha&remoteip$ip");      
  $arr = json_decode($rsp,TRUE);


 if($arr['success']==true){
			 if(!empty($_POST['nom']) && !empty($_POST['email']) && !empty($_POST['message'])){
					$destinataire = "mail@gmail.com";
					$sujet = "Demande de contact";
					$message .= "Nom : ".$_POST['nom']."\r\n";
					$message .= "Adresse email : ".$_POST['email']."\r\n";
					$message .= "Message : ".$_POST['message']."\r\n";
					$entete = 'From: '.$_POST['email']."\r\n".
						'Reply-To: '.$_POST['email']."\r\n".
					'X-Mailer: PHP/'.phpversion();
					if (mail($destinataire,$sujet,$message,$entete) ){
					
						echo '<span>Message envoyé</span> </br> </br>';
						echo 'Redirection dans 5s';
						
						header("refresh:5;url=index.html");
					} 
					
					else {
						echo "Une erreur est survenue lors de l'envoi du formulaire par email </br> </br>";
						echo 'Redirection dans 5s';
						header("refresh:5;url=index.html");
					}
				}
 		
		}


	
	
	else
	{
		echo "Vous devez valider le captcha pour envoyer un message </br> </br>";
			echo 'Redirection dans 5s';
			header("refresh:5;url=index.html");
	}
}

	else

	{
		echo '<span> Vous devez valider le captcha pour envoyer un message </span> </br> </br>';
		echo 'Redirection dans 5s';
		header("refresh:5;url=index.html");

	}


   
?>
</div>
<style>


@font-face
{

font-family:'Rockwell';
src:url('css/polices/Rockwell.ttf');
}
#message
{

color:black;
font-family:rockwell;
font-size:1.5em;
text-align:center;
margin-top:300px;

}

span
{

font-size:2em;
}
body
{
background-color:#d3dee5;

}
</style>

</body>