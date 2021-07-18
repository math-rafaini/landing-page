const form = document.getElementById('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let select = document.getElementById('select').value;
    let dataReceiver = {
        name,
        email,
        select,
    }
    let convertData=JSON.stringify(dataReceiver);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');

    let carregando = `<p>Carregando...</p>`;

    let pronto = `<p>Pronto! As promoções já foram enviadas para o seu email.</p>`

    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)
})