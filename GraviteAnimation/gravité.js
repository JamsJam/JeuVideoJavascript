

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 700
canvas.height = 700


c.fillRect(0, 0, canvas.width, canvas.height)


//Creation du personnage


class Sprite {
    constructor(position) {
        this.position = position
    }
    
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, 150)
    }
}




const player = new Sprite({
    x:0,
    y:0
})

player.draw()
