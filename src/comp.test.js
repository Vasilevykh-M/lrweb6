import renderer from 'react-test-renderer';
import {difDiv, difH1, difH2} from './comp.js'

it("1", ()=>{
    const result = renderer.create(<difDiv
    text = {"text"}
    />);
    expect(result).toMatchSnapshot();
});

it("2", ()=>{
    const result = renderer.create(<difH1
        text = {"text"}
    />);
    expect(result).toMatchSnapshot();
});

it("3", ()=>{
    const result = renderer.create(<difH2
        text = {"text"}
    />);
    expect(result).toMatchSnapshot();
});