let radius = 3;
let height = 7;


let circleArea = Math.PI*Math.pow(radius,2);
console.log('circle Area:',circleArea);

let cylinderVolume = circleArea*height;
console.log('Cylinder Volume:', cylinderVolume);

let a = 2;
let b = 3;
let c = 4;
let perimeterTriangle = a + b + circleArea;
let semiperimeterTriangle = perimeterTriangle/2;

let areaTriangle = Math.sqrt(semiperimeterTriangle*
                    (semiperimeterTriangle-a)*
                    (semiperimeterTriangle-b)*
                    (semiperimeterTriangle-c));

let hypotenuse = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

console.log('Perimeter of the triangle:', perimeterTriangle);
console.log('Area of the triangle:', areaTriangle);
console.log('Length of the hypotenuse:',hypotenuse);