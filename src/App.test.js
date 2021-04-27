import { create } from 'react-test-renderer';
import App from './App';

let component;

describe('<App />', () => {
    beforeAll(()=>{
        component = create(<App/>);
    });

    it("Render Ok", ()=>{
        expect(component).toBeDefined()
    });
});