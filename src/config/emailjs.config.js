import emailjs from "emailjs-com";

// Initialize EmailJS
// Get your credentials from: https://dashboard.emailjs.com/
// You'll need: Service ID, Template ID, and Public Key
emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key_here",
});

export const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "your_service_id_here",
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "your_template_id_here",
      {
        to_email:
          import.meta.env.VITE_CONTACT_EMAIL || "your.email@example.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || "New Contact Form Submission",
        message: formData.message,
      }
    );

    return {
      success: true,
      messageId: result.status,
    };
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw new Error(
      error.text || "Failed to send email. Please try again later."
    );
  }
};

export default emailjs;
