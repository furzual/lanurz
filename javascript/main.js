const emails = [];

function search_product(n) {
    console.log(n);
}

function suscribe(n) {
    emails.push({"id":emails.length + 1, "email": n});
    console.log(emails);
}

document.getElementById("search_btn").onclick = function () {
    event.preventDefault();
    const regex = new RegExp(/^[A-Za-z0-9\s]+$/g);
    let form_text = document.getElementById("product_name").value;
    let product_text = regex.test(form_text);
    if(product_text){
        search_product(form_text);
    }
    else{
        console.warn("Se ingreso un producto inválido");
        alert("Favor de solo ingresar letras y números");
    };
  };

document.getElementById("email_btn").onclick = function () {
    event.preventDefault();
    const regex2 = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let e_text = document.getElementById("email_text").value;
    let susc_text = regex2.test(e_text);
    if(susc_text){
        suscribe(e_text);
    }
    else{
        console.warn("Se ingreso un correo inválido");
        alert("Favor de ingresar un correo válido");
    };
  };

