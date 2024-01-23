// App.js

import React, { useState } from 'react';
import {
  Button,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@mui/material';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    subject: '',
    marks: '',
  });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setData([...data, formData]);
    setFormData({
      name: '',
      rollNo: '',
      subject: '',
      marks: '',
    });
    closeModal();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={openModal}>
        Open Modal
      </Button>

      <Modal open={modalOpen} onClose={closeModal}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Roll No"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Marks"
            name="marks"
            value={formData.marks}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Modal>

      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Roll No</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Marks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.rollNo}</TableCell>
                <TableCell>{item.subject}</TableCell>
                <TableCell>{item.marks}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default App;
