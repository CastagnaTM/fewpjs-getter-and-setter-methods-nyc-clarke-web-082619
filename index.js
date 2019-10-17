class Circle{
    constructor(radius){
        this.radius = radius;        
    }
    get diameter(){
        return this.radius * 2;
    }
    get circumference(){
        return this.diameter * Math.PI;
    }
    get area(){
        return this.radius**2 * Math.PI;
    }
    set diameter(newDiameter){
        this.radius = newDiameter/2;
    }
    set circumference(newC){
        this.radius = newC/(Math.PI*2);
    }
}