import React from 'react';
import { create, act } from 'react-test-renderer';
import Gallery from './Gallery';
import Frame from '../Frame/Frame'

let component, apiEventCall;

describe('<Gallery />', () => {
    beforeEach(()=>{
        component = create(<Gallery/>);
    });

    it("Render Ok", ()=>{
        expect(component).toBeDefined()
        expect(component.toJSON().type).toEqual('section')
    });

    it("apiKey is required to be set on Environment variable", ()=>{
        const conf = require('../../../conf/conf')
        expect(conf.apiKey).toBeDefined();
        expect(conf.apiKey.length).toBeGreaterThan(0);
    });

    it("Call to API", ()=>{
        const apiEventCall = ()=> component.toJSON().props.onScroll({ target:{ scrollWidth: 10000, scrollLeft : 8000}})
        window.fetch = jest.fn()
            .mockImplementationOnce(()=>Promise.reject())
            .mockImplementationOnce(()=>Promise.resolve({
                json: ()=>Promise.resolve(
                    {   info : {next:""},
                        records: []
                    })
            }))
            .mockImplementationOnce(()=>Promise.resolve({
                json: ()=>Promise.resolve(
                    {   info : {next:""},
                        records: [
                            {   
                                imageid:1,
                                caption: "caption",
                                renditionnumber: "IDA56184",
                                copyright:"copy",
                                height: 50,
                                width: 100
                            },
                            {
                                imageid:2,
                                renditionnumber: "IDA5644",
                                height: 100,
                                width: 50
                            }
                        ]
                    })
            }))
        act(()=>{
            component.update(<Gallery/>)
            
            component.toJSON().props.onScroll({ target:{ scrollWidth: 10000, scrollLeft : 8000}})
        })
        expect(window.fetch).toHaveBeenCalled()
    });

    afterAll(()=>{
        window.fetch.mockReset();
    })
});