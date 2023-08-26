const {Triangle, Square, Circle} = require('./shapes');


test('should render Triangle correctly with the correct inputs', () => {
    const triangle = new Triangle('ABC', 'red' , 'green');
    const render = triangle.render();
    expect(render).toContain('<polygon points="150, 18 244, 182 56, 182" fill="green"/>');
    expect(render).toContain('<text x="150" y="130" font-size="40" text-anchor="middle" fill="red">ABC</text>');

})

test('should render Square correctly with the correct inputs', () => {
    const triangle = new Square('ABC', 'red' , 'green');
    const render = triangle.render();
    expect(render).toContain('<rect x="73" y="40" width="160" height="160" fill="green"/>');
    expect(render).toContain('<text x="150" y="130" font-size="40" text-anchor="middle" fill="red">ABC</text>');

})

test('should render Circle correctly with the correct inputs', () => {
    const triangle = new Circle('ABC', 'red' , 'green');
    const render = triangle.render();
    expect(render).toContain('<circle cx="150" cy="115" r="80" fill="green"/>');
    expect(render).toContain('<text x="150" y="130" font-size="40" text-anchor="middle" fill="red">ABC</text>');

})
