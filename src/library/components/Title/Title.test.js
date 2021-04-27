import { create } from 'react-test-renderer';
import Title from './Title';

let component;

describe('<Title />', () => {
    beforeAll(()=>{
        component = create(<Title/>);
    });

    it("Render Ok", ()=>{
        expect(component).toBeDefined()
    });
});