// Diagnal of a Square
    let n = 9;
    let result;

    result = n * Math.sqrt(2);
    console.log("Diagnal of a square = "  + result);

// Area of trianle

    let a = 5;
    let b = 6;
    let c = 7;
    let s;
    let Area;

    s = (a+b+c)/2;
    Area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log("Area of a triangle = " + Area);

// Circumference and Surface area of a circle
    let r = 4;
    const Pi = 3.14;
    let circumference;
    let surfaceArea;

    circumference = 2 * Pi * r;
    console.log("Circumference of circle = " + circumference);

    surfaceArea = Pi * r * r;
    console.log("Area of circle = " + surfaceArea);

    let text = "Hello World!";
    let result2 = text.toLowerCase();
    console.log(result2);