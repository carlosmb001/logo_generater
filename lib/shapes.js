class Shapes{
    constructor(title, titleColor, shapeColor){
        this.title = title;
        this.titleColor = titleColor;
        this.shapeColor= shapeColor;
    }
}

class Triangle extends Shapes{
    constructor(title, titleColor, shapeColor,){
        super(title, titleColor, shapeColor);
    }
    render(){
        return`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
        <text x="150" y="130" font-size="40" text-anchor="middle" fill="${this.titleColor}">${this.title}</text>
      </svg>`
    }
}

class Square extends Shapes{
    constructor(title, titleColor, shapeColor){
        super(title, titleColor, shapeColor);
    }
    render(){
        return`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="73" y="40" width="160" height="160" fill="${this.shapeColor}"/>
        <text x="150" y="130" font-size="40" text-anchor="middle" fill="${this.titleColor}">${this.title}</text>
      </svg>`
    }
}

class Circle extends Shapes{
    constructor(title, titleColor, shapeColor){
        super(title, titleColor, shapeColor);
    }
    render(){
        return`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="115" r="80" fill="${this.shapeColor}"/>
        <text x="150" y="130" font-size="40" text-anchor="middle" fill="${this.titleColor}">${this.title}</text>
      </svg>`
    }
}

module.exports = {Triangle, Square, Circle};