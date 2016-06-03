alert("Bienvenidos a nuestra sección de buques; encuentra los ultimos arribos");

var maria =
{tipocarga  
	: "vehiculos", bandera:"peru", capitan:"johao" ,compañiaNaviera: "prcf",tipo:"panama"};
var maravilla =
{tipocarga: "tanquero", bandera:"ecuador", capitan:"richard" ,compañiaNaviera: "real",tipo:"panama "};
var estrella de mar =
{tipocarga: "bananero", bandera:"colombia", capitan:"angel" ,compañiaNaviera: "salica",tipo:"panama"};
var rey neptuno=
{tipocarga: "mercantil", bandera:"panama", capitan:"fabian" ,compañiaNaviera: "rey mar",tipo:"panama"};
var san jose =
{tipocarga: "viveres", bandera:"chile", capitan:"jose" ,compañiaNaviera: "mas sal",tipo:"pepsi"};
var buques =[];
buques.push(maria);buque.push(maravilla);buque.push(estrella de mar);buque.push(rey neptuno);buque.push(san jose);

function imprimirLista (lista)
{
	var listHTML = '<ul>';
	for (var i=0; i < lista.length; i ++)
	{
		listHTML += '<li>' + lista[i].tipocarga + '<br>'+lista[i].bandera+ '<br>'+lista[i].capitan+'<br>'+lista[i].compañiaNaviera+'<br>'+lista[i].tipo+'</li><br>';
	}
	listHTML += '</ul>';
	return listHTML;
}

do{
var opcion = prompt("Escoge una opción: a)maria - b)Gmaravilla - c)estrella de mar - d)rey neptuno - e)san jose - l)lista - s)salir").toLowerCase();
if (opcion == "a")
{
	var mensaje = "<p>Perfil Gerente Administrativo:<br><ul><li>"+admin.nombre+"</li><li>"+admin.edad+"</li><li>"+admin.profesion+"</li></p>";
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML=mensaje;
}
else if (opcion == "b")
{
	var mensaje = "<p>Perfil Gerente Financiero:<br><ul><li>"+finan.nombre+"</li><li>"+finan.edad+"</li><li>"+finan.profesion+"</li></p>";
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML=mensaje;
}
else if (opcion == "c")
{
	var mensaje = "<p>Perfil Gerente Comercial:<br><ul><li>"+comer.nombre+"</li><li>"+comer.edad+"</li><li>"+comer.profesion+"</li></p>";
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML=mensaje;
}
else if (opcion == "l")
{
	var mensaje = "<h3>Nuestros Directivos:</h3>"+imprimirLista(buques);
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML=mensaje;
}
else if (opcion == "s")
{
	break;
}
}while(true);


/******Creacion de menu responsive******/
//crear elemento select
var $select = $("<select></select>");
$("#menu").append($select);

//recorrer el menu con la funcion each
$("#menu a").each(function()
{
	var $anchor = $(this);
	//crear una opcion para el select por cada elemento
	var $option=$("<option></option>");
	//obtener cada valor de la opcion del atributo href
	$option.val($anchor.attr("href"));
	//obtener el texto de cada opcion
	$option.text($anchor.text());
	//agregar option al select
	$select.append($option);

	//obtener si el link en la pagina actual (tiene clase selected)
	if($(this).hasClass("selected"))
	{
		$option.prop("selected",true);
	}

});

$select.change(function()
	{
		window.location=$select.val();
	});

