# EmailJS Setup Guide for Boumiza Square Contact Form

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email address

### 2. Create Email Service
- In EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the authentication steps
- **Save your Service ID** (you'll need this)

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use this template structure:

```html
Subject: Nouveau message de contact - {{reason}}

<h2>Nouveau message de contact</h2>

<p><strong>Nom complet:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Téléphone:</strong> {{phone}}</p>
<p><strong>Motif:</strong> {{reason}}</p>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><em>Ce message a été envoyé depuis le formulaire de contact du site web Boumiza Square.</em></p>
```

- **Save your Template ID** (you'll need this)

### 4. Get Your Public Key
- Go to "Account" → "API Keys"
- **Copy your Public Key**

### 5. Update the Contact Form
Replace these placeholders in `components/contact/contact-form.tsx`:

```typescript
// Replace YOUR_PUBLIC_KEY with your actual public key
emailjs.init("YOUR_PUBLIC_KEY")

// Replace YOUR_SERVICE_ID with your service ID
'YOUR_SERVICE_ID'

// Replace YOUR_TEMPLATE_ID with your template ID  
'YOUR_TEMPLATE_ID'
```

## 📧 Template Variables Used

The form sends these variables to your EmailJS template:
- `{{from_name}}` - Full name of the person
- `{{from_email}}` - Their email address
- `{{phone}}` - Phone number (or "Non fourni")
- `{{reason}}` - Contact reason
- `{{message}}` - Their message content

## 🔧 Configuration Example

```typescript
// Example configuration (replace with your actual values)
emailjs.init("user_abc123def456") // Your public key

const result = await emailjs.send(
  'service_xyz789',        // Your service ID
  'template_uvw012',       // Your template ID
  templateParams,
  'user_abc123def456'      // Your public key
)
```

## ✅ What Happens When Form is Submitted

1. **Validation** - Email format and phone number validation
2. **EmailJS Call** - Sends email to contact@boumizasquare.tn
3. **Success Feedback** - Shows confirmation message
4. **Form Reset** - Clears form after 5 seconds
5. **Error Handling** - Shows validation errors if any

## 🆓 Free Plan Limits

- **200 emails per month** (perfect for most businesses)
- **Unlimited templates**
- **Gmail, Outlook, Yahoo support**

## 🚨 Important Notes

- **Never expose your private keys** in client-side code
- **Public key is safe** to use in frontend
- **Test thoroughly** before going live
- **Monitor email delivery** in EmailJS dashboard

## 🆘 Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Community: [https://community.emailjs.com/](https://community.emailjs.com/)
- Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**Your contact form is now ready to send real emails! 🎉**
