

const canvas = document.querySelector('canvas');
let div = document.querySelector('div');
const c = canvas.getContext('2d');
canvas.width = 900
canvas.height = 800

// div.style.display = "flex"
// div.style.justifyContent = "center"



c.fillRect(0, 0, canvas.width, canvas.height)


//Creation du personnage

const gravity = 0.2
class Sprite {
    constructor({position,velocity, color = 'red'}) {

        //determine la position {position en x, position en y}
        this.position = position //( accessorement , le haut du recctangle)

        //velocity determine la vitesse {vitesse en x, vitesse en y}
        this.velocity = velocity

        this.width = 25
        //la taille du resctangle player( accessorement , le bas du recctangle)
        this.height= 50 

        this.lastKey = ""

        //AttackBox
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            width: 100,
            height: 25

        }
        this.color = color
        this.isAttacking = false


    }
    
    draw() {
        c.fillStyle = this.color //couleur de l'objet
        c.fillRect(this.position.x, this.position.y, this.width, this.height)


        //AttackBox
        if (this.isAttacking) {
            
            c.fillStyle = 'tan'
            c.fillRect( this.attackBox.position.x, 
                this.attackBox.position.y, 
                this.attackBox.width, 
                this.attackBox.height)
                
        }
        
    }


    update(){
        this.draw()

        this.attackBox.position.x = this.position.x
        this.attackBox.position.y = this.position.y

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y ;
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
            //
        }else  {
            // Il tombera en fonction de la gravité
            this.velocity.y += gravity
            
        }
    }

    attack(){
        this.isAttacking = true
        setTimeout(() => {
            this.isAttacking = false
        }, 200);
    }
}

// ****************************************** Creation des plateForme

class PlateForme{
    constructor({position,height, width, color}){
        this.position = position
        this.width = width
        this.height = height
        this.color = color
    }
    draw() {
        c.fillStyle = this.color //couleur de l'objet
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const etage1Pf1 = new PlateForme({
    position:{
        x: 0,
        y: 300+(500*(2/3))
    },
    height: 30,
    width: 300,
    color: 'yellow'
})


const player = new Sprite({
    position:{
    x:0, //x et y font reference a l'argument position qui est un objet {x,y}
    y:0
    },
    velocity:{
        x:0,
        y:10
    },
    color : 'navy'

})



// const enemy = new Sprite({
//     position:{
//     x:200, //x et y font reference a l'argument position qui est un objet {x,y}
//     y:50
//     },
//     velocity:{
//         x:0,
//         y:10
//     },
//     color: 'crimson'
// })

const keys = {
    d:{
        pressed: false
    },
    q:{
        pressed: false
    },
    z:{
        pressed: false
    },
}

let isJump = false;

// Boucle infini permettant un animation frame par frame
function animate() {
    window.requestAnimationFrame(animate)
    //ON definit que le canva sera noir
    c.fillStyle = 'black'
    //on Redessine le canvas
    c.fillRect(0,0,canvas.width,canvas.height)
    // reprise de la position du player a chaque frame
    player.update()
    // reprise de la position de enemy a chaque frame
    etage1Pf1.draw()

    // **************************************Le joueurs se dirigera vers la derniere touche appuyé

    player.velocity.x = 0
    if (keys.d.pressed && player.lastKey ==='d') {

        player.velocity.x = 5

    }else if (keys.q.pressed && player.lastKey ==='q') {

        player.velocity.x = -5
    }
    

    // ********************************************************detecter les collision etre player.attackbox et enemy.sprite
    
    // if (player.attackBox.position.x + player.attackBox.width >= enemy.position.x &&
    //     player.attackBox.position.x <= enemy.position.x  + enemy.width &&
    //     player.attackBox.position.y + player.attackBox.height >= enemy.position.y &&
    //     player.position.y <= enemy.position.y + enemy.height &&
    //     player.isAttacking){
            
            
    //         player.isAttacking = false
    //     }
        
    // ********************************************************detecter les collision etre player et plateForme
    if(player.position.y + player.height >= etage1Pf1.position.y  &&
        player.position.y + player.height <= etage1Pf1.position.y + etage1Pf1.height &&
        player.position.x <= etage1Pf1.position.x + etage1Pf1.width){
            
        player.velocity.y = 0
    }
    
}

animate()







//  ******************************************************************** Evenement de mouvement et action


window.addEventListener('keydown',(event) => {

    switch (event.key) {

        case 'd':
            keys.d.pressed = true    
            player.velocity.x = 5
            player.lastKey = 'd'

            break;
    

        case 'q':
            keys.q.pressed = true    
            player.velocity.x = -5
            player.lastKey = 'q'

            break;
// *************************************** Set up du saut 
        case 'z':
            
            if (keys.z.pressed  === false) {
                console.log(isJump)
                if(isJump === true){
                    
                }else {
                    isJump = true
                    
                    console.log("jump")
                    keys.z.pressed = true
                    player.velocity.y = -7
                }
            }

            break;


        case ' ':

            player.attack()

            break;

        default:
            
            break;
    }

})
window.addEventListener('keyup',(event) => {

    switch (event.key) {

        case 'd':
            keys.d.pressed = false
            player.lastKey = ''
            console.log(player.lastKey)
            
            break;
    

        case 'q':
            keys.q.pressed = false
            player.lastKey = ''
            
            break;

        case 'z':

            

                setTimeout(() => {
                    
                    keys.z.pressed = false
                    isJump = false
                }, 1500);
            
            
            break;
    
        default:
            break;
    }

})





