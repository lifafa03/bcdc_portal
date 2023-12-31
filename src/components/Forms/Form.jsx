import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, { useState } from 'react';
import './Form.css';

const SalesForm = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    customerparentname: '',
    customerindustry:'',
    clientAddress: '',
    gstnumber:'',
    pannumber:'',
    customeraccountname:'',
    customeraccountcontact:'',
    customertechnicalname:'',
    customertechnicalncontact:'',
    customerprimaryname:'',
    customerprimarycontact:'',
    accountmanager:'',
    description: '',
    network: '',
    compute: '',
    storage: '',
    license: '',
    database: '',
    backup: '',
    managedServices: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="sales-box">
      <div className="logo">
        <img src="logo.png" alt="Logo" width="300" />
      </div>
      <h2 className="title">Sales Form</h2>
      <div className="input-group">
        <label>Customer Name:</label>
        <input
          type="text"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Customer Parent Name:</label>
        <input
          type="text"
          name="customerparentname"
          value={formData.customerparentname}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Customer Industry:</label>
        <input
          type="text"
          name="customerindustry"
          value={formData.customerindustry}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Customer Address:</label>
        <input
          type="text"
          name="clientAddress"
          value={formData.clientAddress}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>GST Number:</label>
        <input
          type="text"
          name="gstnumber"
          value={formData.gstnumber}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>PAN Number:</label>
        <input
          type="text"
          name="pannumber"
          value={formData.pannumber}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Customer Accounts Name:</label>
        <input
          type="text"
          name="customeraccountname"
          value={formData.customeraccountname}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Customer Accounts Contact:</label>
        <input
          type="text"
          name="customeraccountcontact"
          value={formData.customeraccountcontact}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Customer Technical Name:</label>
        <input
          type="text"
          name="customertechnicalname"
          value={formData.customertechnicalname}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Customer Technical Contact:</label>
        <input
          type="text"
          name="customertechnicalncontact"
          value={formData.customertechnicalncontact}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Customer Primary Name:</label>
        <input
          type="text"
          name="customerprimaryname"
          value={formData.customerprimaryname}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Customer Primary Contact:</label>
        <input
          type="text"
          name="customerprimarycontact"
          value={formData.customerprimarycontact}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Account Manager:</label>
        <select
          name="accountmanager"
          value={formData.storage}
          onChange={handleChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="input-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Network:</label>
        <select
          name="network"
          value={formData.network}
          onChange={handleChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="input-group">
        <label>Compute:</label>
        <select
          name="compute"
          value={formData.compute}
          onChange={handleChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="input-group">
        <label>Storage:</label>
        <select
          name="storage"
          value={formData.storage}
          onChange={handleChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="input-group">
        <label>License:</label>
        <select
          name="license"
          value={formData.license}
          onChange={handleChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="input-group">
        <label>Database:</label>
        <select
          name="database"
          value={formData.database}
          onChange={handleChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="input-group">
        <label>Backup:</label>
        <select
          name="backup"
          value={formData.backup}
          onChange={handleChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="input-group">
        <label>Managed Services:</label>
        <select
          name="managedServices"
          value={formData.managedServices}
          onChange={handleChange}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div className="button-group">
        <button className='createButton'>Create</button>
        <button className='cancelButton'>Cancel</button>
        <button className='uploadDocsButton'>Upload Documents</button>
      </div>
    </div>
  );
}

export default SalesForm;







// function BasicForm() {
//   return (
//     <Form className='container'>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default BasicForm;