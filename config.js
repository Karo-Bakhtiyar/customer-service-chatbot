// ============================================
// CUSTOMER SERVICE CHATBOT CONFIG
// Fill in your business details below
// ============================================

const CONFIG = {
  // Business info
  businessName: "Your Business Name",
  businessUrl: "https://yourbusiness.com",
  tagline: "How can I help you today?",

  // Branding
  brandColor: "#007bff",        // Main color (header, buttons)
  brandColorDark: "#0056b3",    // Darker shade for gradients

  // What you offer (plain text, use dashes for lists)
  offerings: "- Product A\n- Product B\n- Service C",

  // Your policies
  policies: "- Free shipping on orders over $50\n- 30-day return policy\n- Secure checkout",

  // Common questions
  faq: "- Q: Do you ship internationally? A: Yes, we ship worldwide!\n- Q: How long is delivery? A: 3-5 business days.",

  // Support contact
  contactEmail: "support@yourbusiness.com",

  // About your business (optional)
  about: "We're a small team passionate about what we do!",

  // API endpoint (Netlify function or your own backend)
  apiUrl: "YOUR_API_ENDPOINT"
};

window.CONFIG = CONFIG;
