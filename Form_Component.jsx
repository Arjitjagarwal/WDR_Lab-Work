import { useState } from "react";

function FormComponent({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    city: "",
    country: ""
  });

  // handle input change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // handle submit button
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData); // send data to parent
  }

  return (
    <div style={{ padding: "20px", border: "2px solid #ccc", borderRadius: "10px", width: "350px" }}>
      <h2>USER FORM</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label><br />
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
        <br /><br />

        <label>Age: </label><br />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Enter your age" />
        <br /><br />

        <label>Email: </label><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
        <br /><br />

        <label>City: </label><br />
        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Enter your city" />
        <br /><br />

        <label>Country: </label><br />
        <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Enter your 
        country" />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
