
# Plan: Store Contact Form Submissions in Database with Real-time Updates

## Overview
Create a reliable system to capture all contact form submissions in a Supabase database table, with real-time capabilities so you can see new submissions instantly. The email notification will still be attempted, but the database becomes the primary source of truth.

## Benefits
- **Never lose a submission** - All form data saved to database regardless of email delivery
- **Real-time notifications** - See new submissions instantly without refreshing
- **Searchable history** - Browse, filter, and export all past submissions
- **Backup system** - Email still sent as secondary notification

## Technical Implementation

### 1. Create Database Table
Create a `contact_submissions` table with fields for:
- Name, email, phone
- Service interest
- Full address (street, city, state, ZIP)
- Message
- Timestamp
- Status tracking (new, contacted, resolved)

### 2. Update Edge Function
Modify `submit-contact` to:
- Save submission to database first (guaranteed storage)
- Then attempt to send email notification (best effort)
- Return success even if email fails (since data is saved)

### 3. Enable Real-time
- Enable Supabase Realtime on the table
- This allows building a dashboard later to see submissions live

### 4. Update Contact Form
- Form continues working as-is
- Edge function handles the dual storage + email approach

## Files to Change
- **New SQL Migration**: Create `contact_submissions` table with RLS policies
- **Edit**: `supabase/functions/submit-contact/index.ts` - Add database insert before email

## Database Schema
```
contact_submissions
├── id (UUID, primary key)
├── name (text)
├── email (text)
├── phone (text)
├── service_interest (text)
├── address (text)
├── city (text)
├── state (text)
├── zip_code (text)
├── message (text)
├── status (text, default: 'new')
├── created_at (timestamp)
```

## Security
- RLS policy allowing public inserts (for form submissions)
- RLS policy restricting reads to authenticated users only (for admin access later)
