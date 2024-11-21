import React, {useState} from 'react';

function NameRequestForm(props){

    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [fruit, setFruits] = useState('배');
    const [file, setFiles] = useState('');

    const handleChange = (event) => {
        const{target} = event;
        switch(target.id){
            case "name":
                setName(target.value.toUpperCase());
                break;
            case "details":
                setDetails(target.value);
                break;
            case "fruit":
                setFruits(target.value);
                break;
            case "file":
                setFiles(target.value);
                break;
        }
    }

    const handleSubmit = (event) =>{
        alert(`
        입력한 이름: ${name}
        상세한 내용: ${details}
        선택한 과일: ${fruit}
        선택한 파일: ${file}
        `);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                성명:
                <input id="name" type="text" value={name} onChange={handleChange}/>
            </label><br/><br/>
            <label>
                요청사항:
                <textarea id="details" value={details} onChange={handleChange}/>
            </label><br/><br/>
            <label>
                좋아하는 과일 선택:
                <select id="fruit" value={fruit} onChange={handleChange}>
                    <option>배🍐</option>
                    <option>사과🍎</option>
                    <option>바나나🍌</option>
                    <option>포도🍇</option>
                </select>
            </label><br/><br/>
            <label>
                파일 선택:
                <input id="file" type="file" onChange={handleChange} value={file}/>
            </label>
                <button type="submit">제출</button>
        </form>
);
}

export default NameRequestForm;