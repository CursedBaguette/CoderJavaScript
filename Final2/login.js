var logueo = []
$.get("./bd.json", function (users) {
    logueo = users;
});

function olvidar() {
    $(".sticky").fadeToggle("slow");
}

function login() {
    let username = $("#userLogin").val();
    let password = $("#passLogin").val();
    if (username === logueo[0].username && password === logueo[0].password || username === logueo[1].username && password === logueo[1].password) {
        $(".stricky").hide();
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