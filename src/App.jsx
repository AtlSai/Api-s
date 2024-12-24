// App.jsx
import "./App.css";
import { sendContactUsForm } from "./Api/script"; // Import the new function from script.jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data
    const data = { name, email, message };

    // Call the function to send the form data to the API
    const result = await sendContactUsForm(data);

    // Handle the API response
    if (result.success) {
      setResponse(result.message);
      setError('');
    } else {
      setError(result.message);
      setResponse('');
    }
  };

  return (
    <div className="App">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
        />
        <button type="submit">Submit</button>
      </form>

      {/* Display response or error */}
      {response && <p>{response}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;


