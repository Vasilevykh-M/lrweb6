import {inc, dec, mult} from './functions.js'
test("func1",() =>{
    expect(inc(2)).toEqual(3);
    expect(inc(3)).toEqual(4);
    }
);

test("func2",() =>{
        expect(dec(2)).toEqual(1);
        expect(dec(3)).toEqual(2);
    }
);

test("func3",() =>{
        expect(mult(2)).toEqual(4);
        expect(mult(3)).toEqual(9);
    }
)