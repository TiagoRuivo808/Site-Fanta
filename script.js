//criação de uma timeline do GSAP com animações sincronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub : true,
        markers : true, //DEPURAÇÃO
    },
});

tl.to(
    '#fanta',
    {
        top : '120%', //MOVE O ELEMENTO COM ID FANTA PARA 120% do topo
        left : '0%',
    },
    'orange'
); //Nomeando este treco de animação como 'orange' para sincronização 

tl.to(
    '#laranja-cortada',
    {
        top : '160%', //MOVE O ELEMENTO COM ID 'laranja-cortada' PARA 160% do topo
        left : '23%', //Move o elemento para 23% da esquerda
    },
    'orange'
); //Sincronizado com a animação nomeada 'orange'

tl.to(
    '#laranja',
    {
        width: '15%', //Reduz a largura do elemento com id 'laranja' para 15%
        top : '160%', //Move o elemento para 160% do topo
        right : '10%', //Move o elemento para 10% da direita
    },
    'orange'
); //Sincronizado com a animação nomeada 'orange'

tl.to(
    '#folha',
    {
        top : '110%', //MOVE O ELEMENTO COM ID 'folha' PARA 110% do topo
        rotate : '530deg', //Rotaciona o elemento em 530 graus
        left : '70%', //Move o elemento para 70% da esquerda
    },
    'orange'
); //Sincronizado com a animação nomeada 'orange'

tl.to(
    '#folha2',
    {
        top : '110%', //MOVE O ELEMENTO COM ID 'folha2' PARA 110% do topo
        rotate : '530deg', //Rotaciona o elemento em 530 graus
        left : '0%', //Move o elemento para 0% da esquerda
    },
    'orange'
); //Sincronizado com a animação nomeada 'orange'

//CRIANDO OUTRA TIMELINE


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%',  //Fim da animação (topo da tela atinge 50% da altura quando estiver 20% da seção .three)
        scrub : true,
        markers : true, //DEPURAÇÃO
    },
});

//Definindo a animação dos elementos com a timeline 'tl2'
tl2.from(
    '.lemon1',
    {
        rotate: '-90deg', //Inicia o elemento com a classe 'lemon1' rotacionado em -90 graus 
        left: '-100%', //Inicia o elemento fora da tela, à esquerda (-100%)
        top: '110%', //Inicia o elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
); //Nomeando este trecho de animação como 'ca' para sincronização 

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg', //Inicia o elemento com a classe 'lemon1' rotacionado em -90 graus 
        left: '-100%', //Inicia o elemento fora da tela, à esquerda (-100%)
        top: '110%', //Inicia o elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
); //Nomeando este trecho de animação como 'ca' para sincronização

tl2.from(
    '.lemon2',
    {
        rotate: '90deg', //Inicia o elemento com a classe 'lemon2' rotacionado em 90 graus 
        left: '100%', //Inicia o elemento fora da tela, à esquerda (-100%)
        top: '110%', //Inicia o elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
); //Nomeando este trecho de animação como 'ca' para sincronização 

tl2.from(
    '#pepsi',
    {
        rotate: '90deg', //Inicia o elemento com a classe 'lemon2' rotacionado em 90 graus 
        left: '100%', //Inicia o elemento fora da tela, à esquerda (-100%)
        top: '110%', //Inicia o elemento ligeiramente abaixo da tela (110% do topo)
    },
    'ca'
); //Nomeando este trecho de animação como 'ca' para sincronização 

tl2.to(
    '#laranja-cortada',
    {
        width: '18%', //Aumenta a largura do elemento com id 'laranja-cortada'para 18%
        left: '42%', //Move o elemento para 42% a esquerda
        top: '204%', //Move o elemento para 204% do topo
    },
    'ca'
); //Sincronizado com a animação nomeada 'ca'

tl2.to(
    '#fanta',
    {
        width: '35%', //Aumenta a largura do elemento com id 'fanta' para 35%
        left: '33%', //Move o elemento para 33% a esquerda
        top: '210%', //Move o elemento para 210% do topo
    },
    'ca'
); //Sincronizado com a animação nomeada 'ca'

gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".nav-container", { opacity: 0, y: -20, duration: 1, delay: 0.5 });
