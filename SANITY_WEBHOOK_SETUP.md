# Sanity Webhook Setup for Real-Time Updates

This guide explains how to configure Sanity to automatically update the live website when students add or modify artefacts.

## How It Works

1. **ISR (Incremental Static Regeneration)**: The website automatically checks for updates every 60 seconds
2. **On-Demand Revalidation**: Sanity webhooks can trigger immediate updates when content changes

## Setting Up the Webhook

### Step 1: Get Your Website URL
Your webhook URL will be: `https://www.eastwearbay.org/api/revalidate?secret=2kh4j3h2k3j4h23kj4h23kjh423kjh4`

### Step 2: Configure Sanity Webhook

1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your project "EastBay Archaeological Society"
3. Click on **API** in the sidebar
4. Scroll down to **Webhooks**
5. Click **Add Webhook**

### Step 3: Webhook Settings

Fill in the following:

- **Name**: `Production Website Revalidation`
- **URL**: `https://www.eastwearbay.org/api/revalidate?secret=2kh4j3h2k3j4h23kj4h23kjh423kjh4`
- **Dataset**: `production`
- **Trigger on**:
  - ✅ Create
  - ✅ Update
  - ✅ Delete
- **Filter**: `_type == "artefact"`
- **Projection**:
```groq
{
  "_type": _type,
  "slug": slug.current
}
```
- **HTTP method**: `POST`
- **HTTP Headers**: Leave empty
- **API version**: `v2021-06-07`

### Step 4: Save and Test

1. Click **Save**
2. To test: Add an image to any artefact in Sanity Studio
3. The webhook will trigger automatically
4. Within 60 seconds, the live website will show the updated artefact

## For Students

Students don't need to do anything special! When they:
- Upload images to artefacts
- Edit artefact details
- Publish/unpublish artefacts

The website will automatically update within 60 seconds without requiring any deployment.

## Troubleshooting

### Updates Not Showing?
1. Wait 60 seconds and refresh the page
2. Check if the artefact is **published** (not just a draft)
3. Clear your browser cache
4. Check the webhook logs in Sanity Manage

### Webhook Errors?
1. Go to Sanity Manage → API → Webhooks
2. Click on your webhook
3. Check the **Logs** tab for any errors
4. Verify the URL and secret are correct

## Technical Details

- **Revalidation Interval**: 60 seconds (ISR)
- **Webhook Type**: On-demand revalidation
- **Paths Updated**: `/digital-museum`, `/digital-museum/[slug]`, `/`
- **Secret Key**: Stored in `REVALIDATION_SECRET` environment variable
