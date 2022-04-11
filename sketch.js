const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var solo;
var fruta, corda;
var conexao_fruta_corda;
var botao;

var cenarioIMG, frutaIMG, coelhoIMG, coelho;

var piscando, triste, comendo;

var botaoVentilador;

function preload() {

    cenarioIMG = loadImage("background.png");
    frutaIMG = loadImage("fruta.png");
    coelhoIMG = loadImage("coelho.png");

    piscando = loadAnimation("piscar1.png", "piscar2.png", "piscar3.png");
    comendo = loadAnimation("comer1.png", "comer2.png", "comer3.png", "comer4.png", "comer5.png");

    //adicionar a animação triste


    //configurar as animações
    piscando.playing = true;
    comendo.playing = false;
    

    piscando.looping = true;
    comendo.looping = false;



}


function setup() {
    createCanvas(500, 700);
    frameRate(80);


    botao = createImg("botãoCortar.png");
    botao.position(245, 25);
    botao.size(50, 50);
    botao.mouseClicked(soltar);


    engine = Engine.create();
    world = engine.world;
    solo = new Ground(200, 690, 600, 20);

    corda = new Rope(7, { x: 245, y: 30 });
    fruta = Bodies.circle(300, 300, 20);
    Composite.add(corda.body, fruta);

    con_fruta_corda = new Link(corda, fruta);

    //definir a velocidade das animações
    piscando.frameDelay = 20;
    comendo.frameDelay = 20;



    coelho = createSprite(245, 650, 50, 50);
    coelho.addImage(coelhoIMG);
    //adicionar as animações
    coelho.addAnimation("comendo", comendo);
    coelho.addAnimation("piscando", piscando);


    coelho.changeAnimation("piscando")

    coelho.scale = 0.15

    rectMode(CENTER);
    ellipseMode(RADIUS);

    textSize(50)


}

function draw() {
    image(cenarioIMG, 0, 0, width, height);
    corda.show();
    imageMode(CENTER);
    coelho.x = mouseX;

    Engine.update(engine);
    solo.show();

    if (fruta !== null) {
        image(frutaIMG, fruta.position.x, fruta.position.y, 60, 60);
    }

    //verificar se a fruta colidiu com o coelho


    //verificar se a fruta colidiu com o solo



    drawSprites();

}

function soltar() {
    corda.break();
    con_fruta_corda.detach();
    con_fruta_corda = null;
}

function colidiu(corpo, sprite){

    if(corpo  !== null){
        var d = 0;
    }
}