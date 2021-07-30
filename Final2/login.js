//Datos traidos desde archivo json
var logueo = []
$.get("./bd.json", function (users) {
    logueo = users;
});
//Datos traidos desde archivo json

//Funcion para el sticky note
function olvidar() {
    $(".sticky").fadeToggle("slow");
}
//Funcion para el sticky note

//Funcion que verifica datos ingresados
function login() {
    let username = $("#userLogin").val();
    let password = $("#passLogin").val();
    //NOTA: No uso for each porque la verdad son solo 2 files y preferí hacerlo simple
    if (username === logueo[0].username && password === logueo[0].password || username === logueo[1].username && password === logueo[1].password) {
        $(".sticky").hide();
        $(".logueo").hide()
        Swal.fire({
            icon: 'success',
            title: 'Bienvenido/a',
            text: 'Gracias por usar nuestra plataforma',
        })
        $(".centrito2").fadeIn("slow")
    } else {
        Swal.fire({
                    icon: 'error',
                    title: 'Denegado',
                    text: 'Datos incorrectos',
                })}}
//Funcion que verifica datos ingresados