import { create } from 'react-test-renderer';
import Gallery from '../library/components/Gallery/Gallery';
import Footer from '../library/utils/Footer/Footer';
import Header from '../library/utils/Header/Header';
import MainScreen from './MainScreen';

let component, header, gallery, footer 

describe('<MainScreen />', () => {
    beforeAll(()=>{
        component = create(<MainScreen/>);
        header = component.root.findByType(Header);
        gallery = component.root.findByType(Gallery);
        footer = component.root.findByType(Footer);
    });

    it("Render Ok", ()=>{
        expect(component).toBeDefined();
        expect(header).toBeDefined()
        expect(gallery).toBeDefined()
        expect(footer).toBeDefined()
    });

    it("Title must be 'Museum Gallery'", ()=>{
        expect(header.props.title).toEqual("Museum Gallery")
    });
});