// api/submit-form.js
export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    try {
      // Parse the form data
      const {
        name,
        email,
        phone,
        address,
        propertyType,
        serviceType,
        frequency,
        floors,
        estimatedWindows,
        additionalServices,
        preferredDate,
        message
      } = req.body;
  
      // Basic validation
      if (!name || !email || !phone || !address || !serviceType) {
        return res.status(400).json({ 
          error: 'Missing required fields',
          required: ['name', 'email', 'phone', 'address', 'serviceType']
        });
      }
  
      // Log the submission (you can see this in Vercel's function logs)
      console.log('New window washing quote request:', {
        name,
        email,
        phone,
        address,
        propertyType,
        serviceType,
        frequency,
        floors,
        estimatedWindows,
        additionalServices,
        preferredDate,
        message,
        timestamp: new Date().toISOString()
      });
  
      // Here you can add additional processing:
      // - Send email notifications
      // - Save to database
      // - Add to CRM
      // - Send to Google Sheets
      // - Integrate with scheduling software
  
      // Example: Send email notification (you'll need to add email service)
      // await sendEmailNotification(formData);
  
      // Example: Save to database
      // await saveToDatabase(formData);
  
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: 'Quote request received successfully!',
        data: {
          name,
          email,
          submittedAt: new Date().toISOString()
        }
      });
  
    } catch (error) {
      console.error('Form submission error:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        message: 'Failed to process quote request'
      });
    }
  }
  
  // Optional: Helper function to send email notifications
  // You can uncomment and modify this when you add an email service
  /*
  async function sendEmailNotification(formData) {
    // Example with Resend (you'll need to install and configure)
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);
  
    await resend.emails.send({
      from: 'quotes@yourdomain.com',
      to: 'your-email@yourbusiness.com',
      subject: `New Window Washing Quote Request from ${formData.name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Address:</strong> ${formData.address}</p>
        <p><strong>Property Type:</strong> ${formData.propertyType}</p>
        <p><strong>Service Type:</strong> ${formData.serviceType}</p>
        <p><strong>Frequency:</strong> ${formData.frequency}</p>
        <p><strong>Additional Services:</strong> ${formData.additionalServices}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `
    });
  }
  */