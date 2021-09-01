    function mudarTexto(param) {
        console.log(param);
        titulo = document.querySelector(".conteudo-titulo");
        texto = document.querySelector(".conteudo-paragrafo");
        imagem = document.querySelector(".imagem");
        parametro = param

        if (parametro == "esporte") {
            titulo.innerHTML = "Hobby!";
            texto.innerHTML =
                "Meu hobby é praticar esportes, assistir jogos de futebol, sou fanático por futebol mas sou um torcedor da paz que respeita proximo."
                +"<br>Amo jogar video games e ver conteúdos sobre tecnologias."
                +"<br>Final de semana para mim é sagrado passar com a familía e com minha Namorada.";
            imagem.src = "img/esporte.jpg";
        } else if (parametro == "perfil") {
            titulo.innerHTML = "Quem sou eu?";
            texto.innerHTML =
                "Tenho 29 anos,  sou estudante da Fatec de itaquaquecetuba,  curso gestão da tecnologia da informação e estou no 5º semestre."
               + "  <br>   Sou uma pessoa muito curiosa que adora desafios. "
               + "<br> Atualmente desenvolvo mini projetos como esse para aprimorar minhas técnicas e capacidade como desenvolvedor.";
            imagem.src = "img/perfil.jpeg";

        } else if (parametro == "job") {
            titulo.innerHTML = "Habilidades como Dev!";
            texto.innerHTML =
                "Minhas habilidades como Dev são desenvolvimentos de paginas em HTML5, CSS E JavaScript. <br> Na parte de Back-end tenho conhecimento em C#, VB.net e .Net"
                + " <br> Tenho conhecimendo em PL-SQL, na parte de CRUD e consigo entender bem alguns Scripts mais complexos.";
            imagem.src = "img/job.jpg";

        }

    }

    // function animeScroll() {
    //     const windowTop = window.pageYOffset + 500;

    //     target.forEach(function (element) {

    //         console.log(windowTop);
    //         if ((windowTop) > element.offsetTop) {
    //             element.classList.add(animationClass);
    //         } else {
    //             element.classList.remove(animationClass);
    //         }
    //     })

    // }
    // animeScroll();


    // window.addEventListener('scroll', function () {
    //     mudarTexto();
    // })
