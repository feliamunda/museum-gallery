import { create } from 'react-test-renderer';
import Frame from './Frame';

let component, figure, img, figcaption

describe('<Frame />', () => {
    beforeAll(()=>{
        component = create(<Frame/>);
        figure = component.root.findByType('figure')
        img = component.root.findByType('img')
        figcaption = component.root.findByType('figcaption')
    });

    it("Render Ok", ()=>{
        expect(component).toBeDefined()
        expect(figure).toBeDefined()
        expect(img).toBeDefined()
        expect(figcaption).toBeDefined()
    });
    it("Add 'shrink-heigth' class if shrinkHeight prop is true", ()=>{
        component.update(<Frame shrinkHeight={true}/>);
        const img = component.root.findByType('img')
        expect(img.props.className).toContain('shrink-height')
    });

    it("Add Copyright info if copyright prop is received", ()=>{
        component.update(<Frame copyright="copyright"/>);
        const figcaption = component.root.findByType('figcaption')
        expect(figcaption.children[0]).toContain('copyright')
    });
});