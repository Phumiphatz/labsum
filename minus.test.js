const minus = require('./minus');

test('1 - 2 เท่ากับ -1', ()=> {
    expect(minus(1,2)).toBe(-1);
});

test('91 - 2 เท่ากับ 89', ()=> {
    expect(minus(91,2)).toBe(89);
});

test('9 - 2 เท่ากับ 7', ()=> {
    expect(minus(9,2)).toBe(7);
});

test('8 - 4 เท่ากับ 4', ()=> {
    expect(minus(8,4)).toBe(4);
});

test('5 - 4 เท่ากับ 1', ()=> {
    expect(minus(5,4)).toBe(1);
});

test('77 - 7 เท่ากับ 70', ()=> {
    expect(minus(77,7)).toBe(70);
});