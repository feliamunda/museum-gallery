import { create } from 'react-test-renderer';
import Header from './Header';

let component;

describe('<Header />', () => {
    beforeAll(()=>{
        component = create(<Header/>);
    });
    it("Render Ok", ()=>{
        expect(component).toBeDefined()
    });
});