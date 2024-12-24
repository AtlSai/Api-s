// script.jsx
export const sendContactUsForm = async (data) => {
  try {
    const response = await fetch('https://lawwheels.help/api/user/contactUsForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the correct content type for JSON data
      },
      body: JSON.stringify(data), // Convert the form data into a JSON string
    });

    const result = await response.json(); // Parse the JSON response

    // Return a success message or error message based on the API response
    if (response.ok) {
      return { success: true, message: 'Your message has been sent successfully!' };
    } else {
      return { success: false, message: result.error || 'There was an error submitting your message.' };
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, message: 'An unexpected error occurred. Please try again later.' };
  }
};

