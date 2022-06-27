const btnSi = document.getElementById('si'),
    btnNo = document.getElementById('no');

document.addEventListener('click', e => {
    if (e.target === btnSi) {
        Swal.fire({
            title: 'Ya me esperaba esa respuesta mi amor 😍',
            confirmButtonText: 'Dale click 😊',
            width: 800,
            padding: '3em',
            color: '#716add',
            background: 'rgba(207, 208, 218, 1)',
            backdrop: `
                rgba(0,0,123,0.4)
                url("/img/cat.gif")
                left top
                no-repeat`
        }).then((result) => {
            if (result.isConfirmed) {
                let url = "https://api.whatsapp.com/send?phone=573103409782&text=" + "Si acepto mi amor 🥰" + "%0A";
                window.open(url, "Enviar");
            }
        })
    }
})

document.addEventListener('mouseover', e => {
    if (e.target == btnNo) {
        btnNo.style.left = `${numeroRandom(left1, left2, 'left')}%`;
        btnNo.style.top = `${numeroRandom(top1, top2, 'top')}%`;
    }
});

let left1 = 0, left2 = 0, top1, top2;

let numeroRandom = (x1, x2, direcction) => {
    let nRandom = Math.floor(Math.random() * (+90 + 1 - +0)) + +0;
    x1 = nRandom;

    // Estos if sirven para que los numeron random no den numeros demaciados cerca, ehemplo, si nos da el primer numero 50 y llamamos de nuevo a la funcion
    // y nos da 53 el boton no se movera mucho o incluso nos puede dar el mismo numero y por ende no se movera.

    if ((x1 - x2) <= 10 && (x1 - x2) >= 0) {
        if ((x1 + 10) > 90) {
            x1 -= 8;
        } else {
            x1 += 8;
        }
    }
    if ((x1 - x2) >= 10 && (x1 - x2) <= 0) {
        if ((x1 + 20) > 90) {
            x1 -= 20;
        } else {
            x1 += 20;
        }
    }

    if (direcction === "left") {
        left1 = x1;
        left2 = x1; //Este guarda el mismo valor ya que depues queremos comprar luego en el siguiente llamada con los if de arriba
        return left1;
    }
    if (direcction === "top") {
        top1 = x1;
        top2 = x1; //hacemos lo mismo para la direccion top
        return top1;
    }
    return x1;
}