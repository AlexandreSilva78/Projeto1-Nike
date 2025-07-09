
    let body = document.querySelector("body");
    let tenis = document.querySelector(".nike1");

    function mudarVisual(cor, imagem) {
        tenis.classList.add("troca-efeito"); // Adiciona a classe para efeitos

        body.style.background = cor; // Muda a cor de fundo

        setTimeout(() => {
            tenis.src = imagem; // Troca a imagem do tênis
            tenis.classList.remove("troca-efeito"); // Remove a classe de efeito
        }, 500);
    }

    // Aguardando 5 segundos antes de iniciar a animação
setTimeout(() => {
    const orbit = document.querySelector('.orbit');
    orbit.classList.add('start-animation');
}, 5000);