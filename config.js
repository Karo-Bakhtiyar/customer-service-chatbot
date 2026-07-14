// ============================================
// CHATBOT CONFIG — Fill in your store details
// ============================================

const CONFIG = {
  // Store info
  storeName: "Your Store Name",
  storeUrl: "https://your-store.myshopify.com",
  tagline: "How can I help you today?",
  brandColor: "#007bff",        // Main color (buttons, header)
  brandColorDark: "#0056b3",    // Darker shade for gradients
  
  // Products (describe what you sell)
  products: "- Premium pet accessories\n- Organic dog food\n- Custom pet beds",
  
  // Policies
  policies: "- Free shipping on orders over $50\n- 30-day return policy\n- Secure checkout powered by Shopify",
  
  // FAQ
  faq: "- Q: Do you ship internationally? A: Yes, we ship worldwide!\n- Q: How long is delivery? A: 3-5 business days for US, 7-14 for international.",
  
  // Contact
  contactEmail: "support@yourstore.com",
  founderInfo: "We're a small team passionate about pets!",
  
  // Optional: password protection (leave empty to disable)
  password: "",
  
  // API endpoint (Netlify function or your own backend)
  apiUrl: "/.netlify/functions/chat"
};

export default CONFIG;
