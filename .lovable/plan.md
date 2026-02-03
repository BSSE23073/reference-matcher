

# Plan: Use EmailJS for Emails + External Supabase for Storage

## Overview
Replace the Resend email system with EmailJS (client-side) while keeping database storage in your external Supabase project. This simplifies the email setup since EmailJS works directly from the browser.

## Architecture

```text
┌─────────────────┐     ┌─────────────────┐
│  Contact Form   │────▶│    EmailJS      │ (direct from browser)
│   (Frontend)    │     │   (email sent)  │
└────────┬────────┘     └─────────────────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────┐
│  Edge Function  │────▶│ External        │
│  (submit-contact)│     │ Supabase DB     │
└─────────────────┘     └─────────────────┘
```

## What You Need to Provide

Before implementation, you'll need to set up EmailJS:

1. **Sign up** at [emailjs.com](https://www.emailjs.com/) (free tier: 200 emails/month)
2. **Create an Email Service** - Connect your Gmail/Outlook/etc
3. **Create an Email Template** with these variables:
   - `{{from_name}}` - Sender name
   - `{{from_email}}` - Sender email
   - `{{phone}}` - Phone number
   - `{{service_interest}}` - Selected service
   - `{{address}}` - Full address
   - `{{message}}` - Message content
4. **Get your credentials**:
   - **Service ID** (e.g., `service_xxxxxx`)
   - **Template ID** (e.g., `template_xxxxxx`)
   - **Public Key** (e.g., `xxxxxxxxxxxxxxx`)

## Implementation Steps

### 1. Install EmailJS Package
Add `@emailjs/browser` dependency to the project.

### 2. Update Contact Form Component
Modify `src/pages/Contact.tsx` to:
- Import and initialize EmailJS
- Send email directly from browser on form submit
- Still call edge function for database storage
- Handle both operations with proper error handling

### 3. Simplify Edge Function
Update `supabase/functions/submit-contact/index.ts` to:
- Remove all Resend email code
- Keep only the database insert to external Supabase
- Simpler, faster execution

### 4. Store EmailJS Credentials
Since EmailJS public key is meant to be public (it's in your browser code anyway), we'll store the credentials as environment variables:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Files to Change

| File | Change |
|------|--------|
| `package.json` | Add `@emailjs/browser` dependency |
| `src/pages/Contact.tsx` | Add EmailJS sending + keep edge function call |
| `supabase/functions/submit-contact/index.ts` | Remove Resend code, keep DB insert only |

## Benefits
- **No email backend needed** - EmailJS handles delivery directly
- **Free tier** - 200 emails/month on EmailJS free plan
- **Simpler debugging** - Email issues separate from database issues
- **Database backup** - All submissions still saved to your Supabase

## Next Steps After Approval
Once you approve, I'll need you to:
1. Create your EmailJS account and template
2. Provide the Service ID, Template ID, and Public Key

