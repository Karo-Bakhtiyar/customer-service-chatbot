# Customer Service Chatbot

A free, open source AI-powered customer support chatbot for any website. Edit one file, deploy, done.

**Works with:** Shopify, WooCommerce, WordPress, Wix, Squarespace, custom sites.

---

## What You Get

- AI customer support chatbot
- Answers questions about your products, services, policies
- Mobile responsive (full screen on phones)
- Customizable colors
- Fallback responses when API is unavailable
- Clean, professional design

---

## Quick Start

### 1. Fork this repo

Click **Fork** at the top right.

### 2. Edit `config.js`

```js
const CONFIG = {
  businessName: "My Business",
  businessUrl: "https://mybusiness.com",
  tagline: "How can I help you today?",
  brandColor: "#007bff",
  brandColorDark: "#0056b3",
  offerings: "- Product A\n- Product B\n- Service C",
  policies: "- Free shipping over $50\n- 30-day returns",
  faq: "- Q: Do you ship internationally? A: Yes!",
  contactEmail: "support@mybusiness.com",
  apiUrl: "YOUR_API_ENDPOINT"
};
```

### 3. Set up your API backend

The chatbot needs a backend that receives messages and returns AI responses. You can use:

- **Netlify Functions** — create a function at `netlify/functions/chat.js`
- **Vercel Edge Functions** — create an edge function at `api/chat.js`
- **Your own server** — any endpoint that accepts POST requests

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

Use any AI provider — OpenAI, Gemini, Claude, Llama, Mistral, anything.

### 4. Deploy

Deploy your backend and frontend to any static host:
- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- Your own server

### 5. Add to your website

Add before `</body>`:

```html
<script src="https://your-deployed-site.com/config.js"></script>
<script src="https://your-deployed-site.com/chatbot-widget.html" defer></script>
```

**Platform guides:**

| Platform | Where to add |
|----------|-------------|
| Shopify | Online Store > Themes > Edit code > theme.liquid |
| WordPress | Appearance > Theme Editor > footer.php |
| Wix | Settings > Custom Code > Footer |
| Squarespace | Settings > Advanced > Code Injection > Footer |

---

## How It Works

```
Customer clicks chat bubble
        ↓
Types a question
        ↓
Backend sends to AI with your business data
        ↓
Customer gets help
```

The AI knows your business because your backend injects the config data into the system prompt. If the API is unavailable, basic fallback responses kick in (keyword-based, not AI).

---

## Customization

**Colors:**
```js
brandColor: "#e91e63",
brandColorDark: "#c2185b",
```

---

## FAQ

**Do I need to code?** Editing `config.js` is copy-paste. Setting up the API backend requires basic coding (a simple serverless function).

**Is it really free?** Yes. MIT licensed. You pay for your own AI API usage.

**Any website?** Yes. Anything that supports `<script>` tags.

---

## Credits

Built by [Karo Bakhtiyar](https://github.com/Karo-Bakhtiyar)

MIT License
