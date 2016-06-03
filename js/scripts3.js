/***********************************
****Codigo para validar password****/
var $password = $("#password");
var $confirmPassword=$("#confirm_password");

$("form span").hide();

function esPasswordValido() {
	return ($password.val().length > 8);
}

function coincidenPasswords() {
	return($password.val() === $confirmPassword.val());
}

function eventoPassword()
{
	if($password.val().length > 8)
	{
		$password.next().hide();
	}
	else {
		$password.next().show();
	}
}

function usuarioIngresado() {
	return($("#username").val().length > 0);
}

function validacionCompleta() {
	return esPasswordValido() && coincidenPasswords() && usuarioIngresado();
}

function confirmarPassword()
{
	if($password.val() === $confirmPassword.val())
	{
		$confirmPassword.next().hide();
	}
	else
	{
		$confirmPassword.next().show();
	}
}

function puedeEnviar() {
	$("#submit").prop("disabled", !validacionCompleta());
}

$password.focus(eventoPassword).keyup(eventoPassword).focus(confirmarPassword);
$confirmPassword.focus(confirmarPassword).keyup(confirmarPassword).keyup(confirmarPassword);
puedeEnviar();