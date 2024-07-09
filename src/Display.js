import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';

function Display() {

    const [dirName, setDirName] = useState('');
    const [movName, setMovName] = useState('');
    const [list, setList] = useState([{}])


    const handleButtonAdd = () => {
        const newObject = { dirName: dirName, movName: movName };
        setList([...list, newObject])
    }

    console.log(dirName, movName);
    console.log(list);


    return (
        <Container fluid>
            <Row>
                <Col md={12} className='heading'>
                    <p>Director and Movies</p>
                </Col>
            </Row>
            <Row>
                <Col md={5} className='inputData'>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Director Name"
                            onChange={(e) => setDirName(e.target.value)}
                        />
                    </InputGroup>
                </Col>
                <Col md={5}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Movie Name"
                            onChange={(e) => setMovName(e.target.value)}
                        />
                    </InputGroup>
                </Col>
                <Col md={2} className='buttonClass'>
                    <Button variant="success" onClick={() => handleButtonAdd()}>Add</Button>
                </Col>
            </Row>

{/* ...................................................................... */}
            <Row>
                {/* The following col s will be iterated multiple times by maping the list array,
each li will have the key as corresponging index number. The onClicking the remove button, handleRemove function
shall be triggered, and delete the correspondinig index item by filter method  */}
                <Col md={5}>
                    <div className='listing'>
                        <p> {`${dirName}`}</p>
                    </div>
                </Col>
                <Col md={5}>
                    <div className='listing'>
                        <p> {`${movName}`}</p>
                    </div>
                </Col>
                <Col md={2} className='buttonClass'>
                    <Button variant="danger">Remove</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Display