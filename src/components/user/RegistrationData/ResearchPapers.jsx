import React, { useState, useEffect } from 'react';
import { HiAcademicCap } from "react-icons/hi2";
import { Modal, Button, Form } from 'react-bootstrap';
import { BiSolidEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";

const ResearchPapers = () => {
    const [show, setShow] = useState(false);
    const [papers, setPapers] = useState([]);
    const [currentPaper, setCurrentPaper] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setCurrentPaper({});
        setIsEdit(false);
        setShow(true);
    };

    const handleChange = ({ target: { name, value } }) => {
        setCurrentPaper(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (!e.currentTarget.checkValidity()) {
            e.stopPropagation();
            setValidated(true);
            return;
        }
        setValidated(false);
        const updatedPapers = isEdit
            ? papers.map(p => (p.id === currentPaper.id ? currentPaper : p))
            : [...papers, { ...currentPaper, id: papers.length + 1 }];
        setPapers(updatedPapers);
        handleClose();
    };

    const handleEdit = (paper) => {
        setCurrentPaper(paper);
        setIsEdit(true);
        setShow(true);
    };

    const handleDelete = (id) => {
        setPapers(papers.filter(p => p.id !== id));
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) => 1950 + i);

    useEffect(() => {
        const totalScore = papers.reduce((acc, p) => acc + parseFloat(p.selfAssessmentScore || 0), 0).toFixed(2);
        document.getElementById('totalScore').innerText = totalScore;
    }, [papers]);

    return (
        <div className="container-fluid p-3">
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center text-light" style={{ backgroundColor: "#005174" }}>
                    <div className="d-flex align-items-center">
                        <HiAcademicCap size="25px" />
                        <h5 className="ms-2 mb-0">Research Papers</h5>
                    </div>
                    <Button variant="light" onClick={handleShow} className='card-button'>Add Papers</Button>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered rounded-3 overflow-hidden table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th style={{ textAlign: "center" }}>Sr.No</th>
                                    <th>Title of Paper with Page No.</th>
                                    <th>Name of Journal / Year of Publication</th>
                                    <th>ISSN / ISBM No.</th>
                                    <th>UGC Care List No.</th>
                                    <th>Peer Reviewed</th>
                                    <th>Impact Factor</th>
                                    <th>Whether you are Main Author</th>
                                    <th>No. of Co-Authors</th>
                                    <th>Self Assessment Score</th>
                                    <th>Edit / Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {papers.map((paper, i) => (
                                    <tr key={paper.id}>
                                        <td style={{ textAlign: "center" }}>{i + 1}</td>
                                        <td>{paper.title}</td>
                                        <td>{paper.journal} / {paper.year}</td>
                                        <td>{paper.issn}</td>
                                        <td>{paper.ugc}</td>
                                        <td>{paper.peerReviewed}</td>
                                        <td>{paper.impactFactor}</td>
                                        <td>{paper.mainAuthor}</td>
                                        <td>{paper.coAuthors}</td>
                                        <td>{paper.selfAssessmentScore}</td>
                                        <td>
                                            <BiSolidEdit color="blue" size="25" onClick={() => handleEdit(paper)} style={{ cursor: 'pointer' }} />
                                            <TiDelete color="red" size="25" onClick={() => handleDelete(paper.id)} style={{ cursor: 'pointer' }} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="9" className='text-end fw-bold'>Total Self Assessment Score</td>
                                    <td id="totalScore">0.00</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <Button variant="success" className="m-1 card-button">Save & Next</Button>
                        <Button variant="secondary" className="m-1 card-button">Skip This Step</Button>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isEdit ? "Edit Research Paper" : "Add Research Paper"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSave}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title of Paper <span className='text-danger fw-bold'>*</span></Form.Label>
                            <Form.Control type="text" name="title" value={currentPaper.title || ''} onChange={handleChange} placeholder="Enter title" required />
                            <Form.Control.Feedback type="invalid">Please enter the title.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Name of Journal <span className='text-danger fw-bold'>*</span></Form.Label>
                            <Form.Control type="text" name="journal" value={currentPaper.journal || ''} onChange={handleChange} placeholder="Enter journal name" required />
                            <Form.Control.Feedback type="invalid">Please enter the journal name.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>ISSN/ISBN No. <span className='text-danger fw-bold'>*</span></Form.Label>
                            <Form.Control type="text" name="issn" value={currentPaper.issn || ''} onChange={handleChange} placeholder="Enter ISSN/ISBN number" required />
                            <Form.Control.Feedback type="invalid">Please enter the ISSN/ISBN number.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>UGC Care List No.</Form.Label>
                            <Form.Control type="text" name="ugc" value={currentPaper.ugc || ''} onChange={handleChange} placeholder="Enter UGC care list number" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Peer Reviewed</Form.Label>
                            <Form.Control type="text" name="peerReviewed" value={currentPaper.peerReviewed || ''} onChange={handleChange} placeholder="Enter peer-reviewed status" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Main Author <span className='text-danger fw-bold'>*</span></Form.Label>
                            <Form.Select name="mainAuthor" value={currentPaper.mainAuthor || 'select'} onChange={handleChange} required>
                                <option value="select">Select</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">Please select if you are the main author.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>No. of Co-Authors <span className='text-danger fw-bold'>*</span></Form.Label>
                            <Form.Control type="text" name="coAuthors" value={currentPaper.coAuthors || ''} onChange={handleChange} placeholder="Enter number of co-authors" required />
                            <Form.Control.Feedback type="invalid">Please enter the number of co-authors.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Year of Publication <span className='text-danger fw-bold'>*</span></Form.Label>
                            <Form.Select name="year" value={currentPaper.year || 'select'} onChange={handleChange} required>
                                <option value="select">Select</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">Please select a year.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Page No. <span className='text-danger fw-bold'>*</span></Form.Label>
                            <Form.Control type="text" name="pageNo" value={currentPaper.pageNo || ''} onChange={handleChange} placeholder="Enter page number" required />
                            <Form.Control.Feedback type="invalid">Please enter the page number.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Impact Factor</Form.Label>
                            <Form.Control type="text" name="impactFactor" value={currentPaper.impactFactor || ''} onChange={handleChange} placeholder="Enter impact factor" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Self Assessment Score <span className='text-danger fw-bold'>*</span></Form.Label>
                            <Form.Control type="text" name="selfAssessmentScore" value={currentPaper.selfAssessmentScore || ''} onChange={handleChange} placeholder="Enter self-assessment score" required />
                            <Form.Control.Feedback type="invalid">Please enter the self-assessment score.</Form.Control.Feedback>
                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose} className='card-button'>Close</Button>
                            <Button variant="primary" type="submit" className='card-button'>Save Changes</Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ResearchPapers;
