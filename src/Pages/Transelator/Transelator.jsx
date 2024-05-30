import axios from "axios";
import { useEffect, useState } from "react";


const Transelator = () => {
    const [option, setOption] = useState([]);
    const [to, setTo] = useState('en');
    const [from, setFrom] = useState('en');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    //     curl -X 'GET' \
    //   'https://libretranslate.com/languages' \
    //   -H 'accept: application/json'
    useEffect(() => {
        axios.get('https://libretranslate.com/languages', {
            headers: {
                'accept': 'application/json'
            }
        })
            .then(res => {
                console.log(res)
                setOption(res.data)
            })
    }, [])

    const translate = () => {
        const params = new URLSearchParams();
        params.append('q', input);
        params.append('source', from);
        params.append('target', to);
        params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

        axios.post('https://libretranslate.de/translate', params, {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {
            console.log(res.data);
        })
    }
    return (
        <div className="bg-sky-100 min-h-screen flex items-center">
            <div className="w-3/4 mx-auto space-y-5">
                <div className="flex w-full text-2xl">
                    <div className="w-1/2 ">
                        From ({from}) :
                        <select className="bg-sky-100 border-2 ml-3 rounded-lg border-black text-lg p-3" onChange={e => setFrom(e.target.value)}>
                            {
                                option.map(item => <option key={item.code} value={item.code}>{item.name}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        To ({to}) :
                        <select  className="bg-sky-100 border-2 ml-3 rounded-lg  border-black text-lg p-3" onChange={e => setTo(e.target.value)}>
                            {
                                option.map(item => <option key={item.code} value={item.code}>{item.name}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="w-full flex  gap-5">
                    <textarea placeholder="Text...." className="border-2 w-1/2 p-3 rounded-lg" cols='50' rows="8" onInput={e => setInput(e.target.value)}></textarea>
                    <textarea placeholder="There are Some problem about cors policy . I will fixed it soon ..For timing region I submit is as it is .. please consider is..." className="border-2 w-1/2 p-3 rounded-lg" cols='50' rows="8"></textarea>
                </div>
                <button className="btn btn-block bg-primary text-white" onClick={translate}>Translate</button>
            </div>
        </div>
    );
};

export default Transelator;