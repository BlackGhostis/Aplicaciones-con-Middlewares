function saludar(nombre) {
    console.log("Hola "+nombre);
}
//saludar("paco");

//una funcion no es una accion
var saludar=nombre=>{
    console.log("Hola "+nombre);
}
saludar("Pancho");

var saludo2=(nombre1, nombre2)=>{
    console.log("Hola "+nombre1+" y " +nombre2);
}


var saludo3=(nombre1, nombre2)=>{
    var s="Hola "+nombre1+" y " +nombre2;
    return;
}
saludo3("Pancho","paco");

var saludo4=nombre1=>"hola "+nombre1;
console.log(saludo4("bethoveen"));

var saludo5=function(){
    console.log("hola con funcion anonima");
}

var saludo6=()=>{
    console.log("Estado en saludo6");

}

var saludo7=(nombre="anonimo", s)=>{
    console.log("hola"+nombre);
    s();
}

saludo7("Vivaldi", saludo6);
