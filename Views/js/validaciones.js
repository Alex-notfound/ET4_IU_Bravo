/*La función setTimeout controla que la ventana de alerta no se quede en bucle infinito*/
/*Variable empleada para controlar el alert*/
var avisado = false;

/*Comprueba si el campo es null o 0 y devuelve false, si existe algo devuelve true*/
function comprobarVacio( campo ) {
	if ( ( campo.value == null ) || ( campo.value.length == 0 ) ) {//comprueba si es null o 0
            campo.style.border = "2px solid red";
            return false;
	} else {//si existe algo devuelve true
            campo.style.border = "2px solid green";
            return true;
	}
}

/*Comprueba que sólo haya caracteres alfanuméricos*/
/*abc-es una expresión regular que comprueba si el carácter es alfanuméricos de principio a fin*/
function comprobarAlfabetico(campo, size) {
	var abc =/^\w*$/;
	if(!comprobarExpresionRegular(campo,abc,size)){//comprueba que la expresión enviada en abc sea cumplida por el campo enviado si no lo hace devuelve false
	return false;
	}
	return true;
}

/*Comprueba que el texto sea alfabético y que pueda tener espacios*/
/*comprueba- es una variable que se utiliza para la comprobación y observa que no haya carácteres no alfabéticos (también permite que haya espacios entre palabras)*/
function comprobarTexto( campo, size ) {
	var comprueba=/^[a-záéíóú]{1}[a-záéíóú ]*[a-záéíóú]$/i;
	if(!comprobarExpresionRegular(campo,comprueba,size)){//comprueba que la expresión enviada en comprueba sea cumplida por el campo enviado si no lo hace devuelve false
		return false;
	}//envía true en caso contrario
        else {
            campo.style.border = "2px solid green";
            return true;
	}
}

/*Comprueba si cumple la expresión reguladora enviada,si tiene valores diferentes al enviado devuelve false*/
function comprobarExpresionRegular(campo, exprreg, size) {
	if(!comprobarVacio(campo)){//si está vacío devuelve false
		return false;
	}
	else if ( exprreg.test( campo.value ) == false ) {//si no cumple la expresión regular devuelve false
            campo.style.border = "2px solid red";
            return false;
	}
	else if(!comprobarTamaño(campo,size)){//si es mayor que el tamaño indicado devuelve false
	return false;
	}//si cumple todas las condiciones devuelve true
        else {
            campo.style.border = "2px solid green";
            return true;
	}
}

/*Comprueba que no se exceda el tamaño máximo*/
function comprobarTamaño( campo, size ) {
	if(!comprobarVacio(campo)){//si está vacío devuelve false
		return false;
	}
	else if ( campo.value.length > size ) {//si no está vacío devuelve false si excede el tamaño máximo
            campo.style.border = "2px solid red";
            return false;
	}//si está correcto el tamaño y no excede devuelve true
        else {
            campo.style.border = "2px solid green";
            return true;
	}
}
/*Comprueba que el número real enviado está entre el valor menor y mayor, y que no sobreexceda los números decimales permitidos*/
/*Decimal-comprueba que el número enviado no sobreexceda los números decimales permitidos*/	
function comprobarReal(campo, numerodecimales, valormenor, valormayor) {
	var decimal= campo.value.substring( campo.value.indexOf('.' , ',')+ 1, campo.value.length);	
	
	if (!comprobarVacio(campo)){//comprueba si está vacío
		return false;
	}
	else if (campo.value < valormenor || campo.value > valormayor){//comprueba que le dígito enviado se haya entre sus valores menor y mayor
            campo.style.border = "2px solid red";
            return false;
	}
	else if ( decimal.length > numerodecimales){//si el numero de decimales que tiene el dígito es mayor que el numero de decimales indicado produce un error
            campo.style.border = "2px solid red";		
            return false;
	}
        else {
            campo.style.border = "2px solid green";
            return true;
	}
}

/*Comprueba que el telefono tenga un formato nacional o internacional*/
/*telef- permite comprobar que el teléfono tenga un formato de 9 dígitos, 34 y 9 dígitos, +34 y 9 dígitos o 0034 y 9 dígitos*/
function comprobarTelf( campo ) {
	var telef = /^(\+34|0034|34)?([0-9]){9}$/;
	if(!comprobarExpresionRegular(campo,telef,13)){//comprueba que la expresión enviada en telef sea cumplida por el campo enviado si no lo hace devuelve false
	return false;
	}
        else {
            campo.style.border = "2px solid green";
            return true;
	}
}

/*Comprueba si el DNI enviado está bien escrito*/
/*letras-Comprueba que la letra del DNI enviado es correcta*/
function comprobarDni(campo) {
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	if(!comprobarVacio(campo)){//comprueba si está vacío
		return false;
	}
	else if( !(/^\d{8}[A-Z]$/.test(campo.value)) ) {//comrueba que el DNI esté formado por 8 digitos y una letra
                    campo.style.border = "2px solid red";		
                    return false;
		
	}
	else if(campo.value.charAt(8) != letras[(campo.value.substring(0, 8))%23]) {//en el caso de que tenga los 8 digitos y la letra comprueba que la letra sea correcta
                    campo.style.border = "2px solid red";		
                    return false;
	}
        campo.style.border = "2px solid green";
	return true;
}
/*Comprueba si el CIF enviado está bien escrito*/
/*CIF-Comprueba que la expresión regular del CIF esté bien hecha*/
/*    function comprobarCIFv2( campo ) {
	var CIF = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
	if(!comprobarExpresionRegular(campo,CIF,9)){//comprueba que la expresión enviada en CIF sea cumplida por el campo enviado si no lo hace devuelve false
	return false;
	}
        else if ( (/[PQRSW]/.test(campo.value.charAt(0))) || ((/0/.test(campo.value.charAt(1))) && (/0/.test(campo.value.charAt(2))) ) ) {//en el caso de que empiece por PQRSW o sus dos primeros valores sean 00 comprobará si el codigo de control es una letra en caso erroneo devuelve false
        campo.style.border = "2px solid green";
        return true;//da siempre true hasta nuevo aviso
        }
        else if ( (/[ABEH]/.test(campo.value.charAt(0))) ) {//en el caso de que empiece por ABEH comprobará si el codigo de control es una digito en caso erroneo devuelve false
        campo.style.border = "2px solid green";
        return true;//da siempre true hasta nuevo aviso
        }
        else {// en el caso de que todo esté correctamente comprobará si el codigo de control es el correcto
            campo.style.border = "2px solid green";
            return true;
	}
}*/
/*Comprueba que todos los campos obligatorios estén escritos y que todos los campos escritos estén cubiertos correctamente,se envía en Empresas_ADD_view */
/*En el momento que correcto sea 1 significará que algún campo no es correcto*/
function validarEmpresasADD(Formu){
    var correcto=0;
	if(!comprobarCIF(Formu.CIFempresa)){//comprueba que el CIF esté correctamente escrito
            Formu.CIFempresa.style.border = "2px solid red";		
            correcto=1;
	}
	if(!comprobarTexto(Formu.nombreempresa,30)){//comprueba que el nombre esté correctamente escrito
            Formu.nombreempresa.style.border = "2px solid red";		
            correcto=1;
	}
	if(!comprobarTelf(Formu.telefonoempresa)){//comprueba que el telefono esté correctamente escrito
            Formu.nombreempresa.style.border = "2px solid red";		
            correcto=1;
	}
	if(!comprobarTexto(Formu.localizacionempresa,50)){//comprueba que la localizacion esté correctamente escrito
            Formu.localizacionempresa.style.border = "2px solid red";		
            correcto=1;
	}                                                       	
	if(correcto==0){	
            return true;
        }		
	else{
            return false;
        }	
	

	return true;
}
/*Comprueba que todos los campos obligatorios estén escritos y que todos los campos escritos estén cubiertos correctamente,se envía en Usuarios_ADD_view */
/*En el momento que correcto sea 1 significará que algún campo no es correcto*/
function validarUsuariosADD(Formu){
    var correcto=0;
	if(!comprobarAlfabetico(Formu.login,15)){//comprueba que el login esté correctamente escrito
            Formu.login.style.border = "2px solid red";		
            correcto=1;
	}
	if(!comprobarAlfabetico(Formu.password,25)){//comprueba que el contraseña esté correctamente escrito
            Formu.password.style.border = "2px solid red";		
            correcto=1;
	}
	if(!comprobarDni(Formu.DNI)){//comprueba que el DNI esté correctamente escrito
            Formu.DNI.style.border = "2px solid red";		
            correcto=1;
	}
	if(!comprobarTexto(Formu.nombre,30)){//comprueba que la nombre esté correctamente escrito
            Formu.nombre.style.border = "2px solid red";		
            correcto=1;
	}  
	if(!comprobarTexto(Formu.apellidos,50)){//comprueba que la apellidos esté correctamente escrito
            Formu.apellidos.style.border = "2px solid red";		
            correcto=1;
	}
	if(!comprobarTelf(Formu.telefono)){//comprueba que el telefono esté correctamente escrito
            Formu.telefono.style.border = "2px solid red";		
            correcto=1;
	}
	if(!comprobarExpresionRegular(Formu.email,/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/,60)){//comprueba que el email esté correctamente escrito
            Formu.email.style.border = "2px solid red";		
            correcto=1;
	}
	if(correcto==0){	
            return true;
        }		
	else{
            return false;
        }	
	

	return true;
}
/*Comprueba que todos los campos obligatorios estén escritos y que todos los campos escritos estén cubiertos correctamente,se envía en Empresas_EDIT_view */
/*En el momento que correcto sea 1 significará que algún campo no es correcto*/
function validarEmpresasEDIT(Formu){
    var correcto=0;
	if(!comprobarTexto(Formu.nombreempresa,30)){//comprueba que el nombre esté correctamente escrito
            Formu.nombreempresa.style.border = "2px solid red";		
            correcto=1;
	}
	if(!comprobarTelf(Formu.telefonoempresa)){//comprueba que el telefono esté correctamente escrito
            Formu.nombreempresa.style.border = "2px solid red";		
            correcto=1;
	}
	if(!comprobarTexto(Formu.localizacionempresa,50)){//comprueba que la localizacion esté correctamente escrito
            Formu.localizacionempresa.style.border = "2px solid red";		
            correcto=1;
	}                                                       	
	if(correcto==0){	
            return true;
        }		
	else{
            return false;
        }	
	

	return true;
}
/*Comprueba que todos los campos obligatorios estén escritos y que todos los campos escritos estén cubiertos correctamente,se envía en Usuarios_EDIT_view */
/*En el momento que correcto sea 1 significará que algún campo no es correcto*/
function validarUsuariosEDIT(Formu){
    var correcto=0;
	if(!comprobarAlfabetico(Formu.password,25)){//comprueba que el contraseña esté correctamente escrito
            Formu.password.style.border = "2px solid red";		
            correcto=1;
	}
	if(!comprobarDni(Formu.DNI)){//comprueba que el DNI esté correctamente escrito
            Formu.DNI.style.border = "2px solid red";		
            correcto=1;
	}
	if(!comprobarTexto(Formu.nombre,30)){//comprueba que la nombre esté correctamente escrito
            Formu.nombre.style.border = "2px solid red";		
            correcto=1;
	}  
	if(!comprobarTexto(Formu.apellidos,50)){//comprueba que la apellidos esté correctamente escrito
            Formu.apellidos.style.border = "2px solid red";		
            correcto=1;
	}
	if(!comprobarTelf(Formu.telefono)){//comprueba que el telefono esté correctamente escrito
            Formu.telefono.style.border = "2px solid red";		
            correcto=1;
	}
	if(!comprobarExpresionRegular(Formu.email,/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/,60)){//comprueba que el email esté correctamente escrito
            Formu.email.style.border = "2px solid red";		
            correcto=1;
	}
	if(correcto==0){	
            return true;
        }		
	else{
            return false;
        }	
	

	return true;
}
/*Comprueba que al menos un campo esté escrito, se envía en Empresas_SEARCH_View*/
/*Campo-En el caso de que no haya ningún campo escrito se muestra un alert*/
function validarSearchEmpresas(Formu){
	var campo = false;
	if ( !( Formu.cif.value == null ) && ( Formu.cif.value.length != 0 ) ) {//comprueba si el campo está vacío o no
		campo=true;
	}
	if( !(Formu.nombre.value == null) && (Formu.nombre.value != 0 )) {//comprueba si el campo está vacío o no
		campo=true;
	}
	if ( !( Formu.tipo.value == null ) && ( Formu.tipo.value.length != 0 ) ) {//comprueba si el campo está vacío o no
		campo=true;
	}        
	if ( !( Formu.telefono.value == null ) && ( Formu.telefono.value.length != 0 ) ) {//comprueba si el campo está vacío o no
		campo=true;
	}
	if ( !( Formu.localizacion.value == null ) && ( Formu.localizacion.value.length != 0 ) ) {//comprueba si el campo está vacío o no
		campo=true;
	}        
	if(campo==false){//en el caso de que estén todos los campos vacíos se muestra que hay que cubrir al menos uno
		alert("Cubra al menos un campo");
		avisado = true;
		setTimeout( 'avisado=false', 50 );
		return false;
	}
	return true;
}
/*Comprueba que al menos un campo esté escrito, se envía en Usuario_SEARCH_View*/
/*Campo-En el caso de que no haya ningún campo escrito se muestra un alert*/
function validarSearchUsuarios(Formu){
	var campo = false;
	if ( !( Formu.login.value == null ) && ( Formu.login.value.length != 0 ) ) {//comprueba si el campo está vacío o no
		campo=true;
	}
	if( !(Formu.DNI.value == null) && (Formu.DNI.value != 0 )) {//comprueba si el campo está vacío o no
		campo=true;
	}
	if ( !( Formu.nombre.value == null ) && ( Formu.nombre.value.length != 0 ) ) {//comprueba si el campo está vacío o no
		campo=true;
	}        
	if ( !( Formu.apellidos.value == null ) && ( Formu.apellidos.value.length != 0 ) ) {//comprueba si el campo está vacío o no
		campo=true;
	}
	if ( !( Formu.telefono.value == null ) && ( Formu.telefono.value.length != 0 ) ) {//comprueba si el campo está vacío o no
		campo=true;
	}
	if ( !( Formu.email.value == null ) && ( Formu.email.value.length != 0 ) ) {//comprueba si el campo está vacío o no
		campo=true;
	} 
	if ( !( Formu.rol.value == null ) && ( Formu.rol.value.length != 0 ) ) {//comprueba si el campo está vacío o no
		campo=true;
	}         
	if(campo==false){//en el caso de que estén todos los campos vacíos se muestra que hay que cubrir al menos uno
		alert("Cubra al menos un campo");
		avisado = true;
		setTimeout( 'avisado=false', 50 );
		return false;
	}
	return true;
}

    function comprobarCIF( campo ) {
	var CIF = /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/;
        var control=3;//lo utilizaremos para ver si es necesario una letra y/o numero
	if(!comprobarExpresionRegular(campo,CIF,9)){//comprueba que la expresión enviada en CIF sea cumplida por el campo enviado si no lo hace devuelve false
	return false;
	}
        else if ( (/[PQRSW]/.test(campo.value.charAt(0))) || ((/0/.test(campo.value.charAt(1))) && (/0/.test(campo.value.charAt(2))) ) ) {//en el caso de que empiece por PQRSW o sus dos primeros valores sean 00 comprobará si el codigo de control es una letra en caso erroneo devuelve false
        //campo.style.border = "2px solid purple";
        control=1;//debe ser letra
        //return false;
        }
        else if ( (/[ABEH]/.test(campo.value.charAt(0))) ) {//en el caso de que empiece por ABEH comprobará si el codigo de control es una digito en caso erroneo devuelve false
        //campo.style.border = "2px solid yellow";
        control=2;//debe ser digito
        //return false;
        }// pasado lo anterior se sabrá que está bien escrito y se debe comprobar el codigo de control
	//Quitamos el primer caracter y el ultimo digito

        var sumaPar=parseInt(campo.value.substr(2,1))+parseInt(campo.value.substr(4,1))+parseInt(campo.value.substr(6,1));  
        var result=0;//para el for
        var i=0;//ya que empezaremos a coger a partir del primer numero impar        
        var sumaImpar=0;
        var sumatotal=0;
        var unidad=0;
        var codigo=0;
        var comprobar=0;//utilizaremos esto para comprobar con el dígito de control, ya que si es una letra tendremos que pasarlo a un número
 
	//Sumamos las cifras impares de la cadena
        
	  for(i=1;i<8;i=i+2){
          result=parseInt(campo.value.substr(i,1))*2;
          if(String(result).length==1){
            // Un solo caracter
            sumaImpar+=parseInt(result);
          }
          else{//Dos caracteres
          sumaImpar += parseInt(String(result).substr(0,1))+parseInt(String(result).substr(1,1));
          }
          }
	// Sumamos las dos sumas que hemos realizado
	sumatotal=sumaPar+sumaImpar;
        unidad=sumatotal%10;//nos intersa el segundo digito o en el caso de que haya sólo uno pues ese
        
        codigo =10-unidad;//conocemos el valor del codigo de controlJ = 0, A = 1, B = 2, C= 3, D = 4, E = 5, F = 6, G = 7, H = 8, I = 9
        
        if(control==2){
            comprobar=campo.value.charAt(8);
        }
        if(control==1){//si el control es 1 significa que el codigo de control debe ser una letra entre A-J, en el caso de que no sea así devuelve falso
            if(campo.value.charAt(8)=="J") comprobar=0;
            else if(campo.value.charAt(8)=="A") comprobar=1;
            else if(campo.value.charAt(8)=="B") comprobar=2;
            else if(campo.value.charAt(8)=="C") comprobar=3;
            else if(campo.value.charAt(8)=="D") comprobar=4;
            else if(campo.value.charAt(8)=="E") comprobar=5;
            else if(campo.value.charAt(8)=="F") comprobar=6;
            else if(campo.value.charAt(8)=="G") comprobar=7;
            else if(campo.value.charAt(8)=="H") comprobar=8;
            else if(campo.value.charAt(8)=="I") comprobar=9;
            else{
                campo.style.border = "2px solid red";
                return false;
            }
        }
        if(control==3){//si el control es 3 significa que el codigo de control puede ser una letra entre A-J o un numero
            if(campo.value.charAt(8)=="J") comprobar=0;
            else if(campo.value.charAt(8)=="A") comprobar=1;
            else if(campo.value.charAt(8)=="B") comprobar=2;
            else if(campo.value.charAt(8)=="C") comprobar=3;
            else if(campo.value.charAt(8)=="D") comprobar=4;
            else if(campo.value.charAt(8)=="E") comprobar=5;
            else if(campo.value.charAt(8)=="F") comprobar=6;
            else if(campo.value.charAt(8)=="G") comprobar=7;
            else if(campo.value.charAt(8)=="H") comprobar=8;
            else if(campo.value.charAt(8)=="I") comprobar=9;
            else{
                comprobar=campo.value.charAt(8);
            }
        }        
        if(codigo==comprobar){
            campo.style.border = "2px solid green";
            return true;    
        }
        if(codigo!=comprobar){
            campo.style.border = "2px solid red";
            return false;    
        }
}
        /*if(codigo==1){
                    campo.style.border = "2px solid purple";		
                    return true;            
        }
        else{
                    campo.style.border = "2px solid yellow";		
                    return true;             
        }  */   
//}