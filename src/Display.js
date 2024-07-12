import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Display() {
    const [dirName, setDirName] = useState('');
    const [movName, setMovName] = useState('');
    const [list, setList] = useState([]);

    const handleAdd = (e) => {
        e.preventDefault()
        const newObject = { dirName: dirName, movName: movName };
        setList([...list, newObject]);
        setDirName('');
        setMovName('');
    }

    const handleDelete = (i) => {
        const newList = list.filter((item, j) => j !== i);
        setList(newList);
    }


    console.log(list);

    return (
        <div className='allContents'>
            <form onSubmit={handleAdd}>
                <Row>
                    <Col md={12} className='headerClass'>
                        <p>Director and Movies</p>
                    </Col>
                </Row>
                <Row className='mt-3 mb-3'>
                    <Col md={5} className='d-flex justify-content-center'>
                        <input className='inputBox'
                            placeholder='Director Name'
                            value={dirName}
                            onChange={(e) => setDirName(e.target.value)}>
                        </input>
                    </Col>
                    <Col md={5} className='d-flex justify-content-center'>
                        <input className='inputBox'
                            placeholder='Movie Name'
                            value={movName}
                            onChange={(e) => setMovName(e.target.value)}>
                        </input>
                    </Col>
                    <Col md={2} className='button'>
                        <button className='addButton' type='submit'> Add </button>
                    </Col>
                </Row>
            </form>
            {list.map((i, index) =>
                <Row key={index}>
                    <Col md={5} className='d-flex justify-content-center'>
                        <p className='listItems'>{i.dirName}</p>
                    </Col>
                    <Col md={5} className='d-flex justify-content-center'>
                        <p className='listItems'>{i.movName}</p>
                    </Col>
                    <Col md={2} className='button'>
                        <button className='removeButton' onClick={() => handleDelete(index)}>Remove</button>
                    </Col>
                </Row>
            )}
        </div>
    )
}

export default Display