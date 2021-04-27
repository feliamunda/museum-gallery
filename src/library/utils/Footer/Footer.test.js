import { create } from 'react-test-renderer';
import Footer from './Footer';

let component, span, link;

describe('<Footer />', () => {
    beforeAll(()=>{
        component = create(<Footer/>);
        span = component.root.findByType("span")
        link = component.root.findByType("a")
    })

    it("Render Ok", ()=>{
        expect(component).toBeDefined()
        expect(span).toBeDefined()
        expect(link).toBeDefined()
    });
    it("Footer link must be valid", ()=>{
        expect(link.props.href).toMatch(/http(s:|:)\/\/*/ )
    });
});