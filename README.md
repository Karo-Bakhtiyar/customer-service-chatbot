# Free AI Chatbot for Shopify

A free, open source AI-powered chatbot for your Shopify store. No coding skills needed. No monthly fees. Just edit one file and deploy.

**Works with:** Shopify, WooCommerce, any website that lets you add HTML.

---

## What You Get

- AI-powered customer support chatbot
- Answers questions about your products, shipping, returns
- Mobile responsive (full screen on phones)
- Optional password protection
- Customizable colors and branding
- Fallback responses when API is down
- Clean, professional design (not AI-slop)

---

## Quick Start (3 minutes)

### 1. Fork this repo

Click the **Fork** button at the top right of this page.

### 2. Edit `config.js`

Open `config.js` and fill in your store details:

```js
const CONFIG = {
  storeName: "My Pet Store",
  storeUrl: "https://my-pet-store.myshopify.com",
  tagline: "How can I help you find the right product?",
  brandColor: "#007bff",
  brandColorDark: "#0056b3",
  products: "- Premium dog food\n- Custom pet beds\n- Organic treats",
  policies: "- Free shipping over $50\n- 30-day returns",
  faq: "- Q: Do you ship internationally? A: Yes!",
  contactEmail: "support@mystore.com",
  password: "",  // leave empty to disable
  apiUrl: "/.netlify/functions/chat"
};
```

### 3. Deploy to Netlify (free)

1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Click **Add new site** > **Import an existing project**
3. Connect your GitHub fork
4. Deploy settings: leave everything as default
5. Click **Deploy site**

Your chatbot is now live at `https://your-site.netlify.app`

### 4. Add to Shopify

1. Go to your Shopify admin > **Online Store** > **Themes**
2. Click **Actions** > **Edit code** on your current theme
3. Open `theme.liquid`
4. Add this before the closing `</body>` tag:

```html
<script src="https://your-netlify-site.netlify.app/config.js"></script>
<script src="https://your-netlify-site.netlify.app/chatbot-widget.html" defer></script>
```

5. Save. Done.

---

## How It Works

```
Customer clicks chat bubble
        ↓
Types a question
        ↓
AI generates response using your store data
        ↓
Customer gets helpful answer
```

The AI knows your products, policies, and FAQ because you put them in `config.js`. If the API is down, it falls back to pre-written responses.

---

## Customization

### Colors

Change `brandColor` and `brandColorDark` in `config.js`:

```js
brandColor: "#e91e63",      // pink
brandColorDark: "#c2185b",  // darker pink
```

### Password Protection

Set a password in `config.js` to restrict access:

```js
password: "mystore2024",  // visitors must enter this to chat
```

Leave empty (`""`) to disable.

### Products & Policies

Write them as plain text with dashes:

```js
products: "- Organic cotton t-shirts\n- Handmade jewelry\n- Custom phone cases",
policies: "- Free shipping over $30\n- 60-day returns\n- Secure checkout",
```

---

## API Backend

This template expects an API endpoint that accepts messages and returns AI responses. By default it uses a Netlify Function.

You can use:
- **Netlify Functions** (free tier: 125k requests/month)
- **Vercel Edge Functions** (free tier: 100k requests/month)
- **Your own backend** (update `apiUrl` in config.js)

The API should accept:
```json
{
  "messages": [
    {"role": "system", "content": "..."},
    {"role": "user", "content": "Do you have red shirts?"}
  ]
}
```

And return:
```json
{
  "choices": [
    {
      "message": {
        "content": "Yes! We have red shirts in sizes S-XXL."
      }
    }
  ]
}
```

---

## Self-Hosted (no Netlify)

If you want to host the files yourself:

1. Copy `config.js` and `chatbot-widget.html` to your server
2. Set up your own API backend
3. Update `apiUrl` in `config.js` to point to your backend
4. Add the two script tags to your website

---

## FAQ

**Do I need to know how to code?**
No. Just edit `config.js` with your store details and deploy.

**Is it really free?**
Yes. The chatbot code is MIT licensed. You only pay for the AI API usage (OpenAI/Gemini), which is pennies per conversation.

**Can I use it on WooCommerce/WordPress?**
Yes. Add the script tags to your theme's footer. Works on any website that supports custom HTML.

**Can I customize the design?**
Yes. Edit the CSS in `chatbot-widget.html` or override styles with your own.

---

## Credits

Built by [Karo Bakhtiyar](https://github.com/Karo-Bakhtiyar)

MIT License — use it, fork it, make it yours.
