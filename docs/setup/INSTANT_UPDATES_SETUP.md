# Setting Up Instant Website Updates from Sanity

This guide will help you configure your website so that **any changes made in Sanity appear on the live website within seconds** - no technical knowledge required!

## 🎯 What You'll Achieve

When someone edits content in Sanity Studio (like adding an artifact image or updating team info), the live website will automatically update within 1-3 seconds.

## 📋 Prerequisites

Before you start, you'll need:
1. Access to your Sanity project at [sanity.io/manage](https://www.sanity.io/manage)
2. Your website's revalidation secret (see below)

## 🔐 Step 1: Get Your Revalidation Secret

Your revalidation secret is stored in your hosting platform's environment variables. This is like a password that ensures only Sanity can trigger updates.

**Where to find it:**
- Log into your hosting platform (Vercel, Netlify, etc.)
- Go to **Settings** → **Environment Variables**
- Look for `REVALIDATION_SECRET`
- Copy the value (it will look something like: `2kh4j3h2k3j4h23kj4h23kjh423kjh4`)

**Don't have one?** Generate a secure random string at [randomkeygen.com](https://randomkeygen.com/) (use a "Fort Knox Password") and add it as `REVALIDATION_SECRET` in your hosting platform.

## 🔧 Step 2: Set Up Webhooks in Sanity

### For All Content Types (Recommended)

This single webhook will handle ALL content updates automatically:

1. **Go to Sanity Manage**: [sanity.io/manage](https://www.sanity.io/manage)
2. **Select your project**: "EastBay Archaeological Society"
3. **Click "API"** in the left sidebar
4. **Scroll to "Webhooks"** and click **"Add Webhook"**

### Webhook Configuration

Fill in these details exactly as shown:

| Field | Value |
|-------|-------|
| **Name** | `Live Website Updates` |
| **URL** | `https://www.eastwearbay.org/api/revalidate?secret=YOUR_SECRET_HERE` |
| **Dataset** | `production` |
| **Trigger on** | ✅ Create, ✅ Update, ✅ Delete |
| **Filter** | Leave empty (this will trigger for all content) |
| **Projection** | See below ⬇️ |
| **HTTP method** | `POST` |
| **API version** | `v2021-06-07` |

**Projection (copy and paste this):**
```groq
{
  "_type": _type,
  "slug": slug.current
}
```

### Important Notes:
- Replace `YOUR_SECRET_HERE` in the URL with your actual revalidation secret
- Double-check there are no extra spaces in the URL
- Make sure you select Create, Update, AND Delete

5. **Click "Save"**

## ✅ Step 3: Test It Works

1. Go to your Sanity Studio at `https://www.eastwearbay.org/admin`
2. Make a small change to any content (e.g., edit an artifact description)
3. Click **Publish**
4. Wait 2-3 seconds
5. Visit the live website and refresh the page
6. Your changes should be visible! 🎉

## 🔍 Troubleshooting

### Changes aren't showing up?

**Check the basics:**
- [ ] Did you click "Publish" (not just "Save as draft")?
- [ ] Did you wait 2-3 seconds and refresh your browser?
- [ ] Try a hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

**Check the webhook:**
1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Click "API" → "Webhooks"
3. Click on your webhook
4. Check the **"Logs"** tab
5. You should see successful requests (green checkmarks)

**Common issues:**
- **Red X in logs**: The secret might be wrong - double-check it matches exactly
- **No logs at all**: The webhook might not be triggering - check your filters
- **404 error**: Check the URL is correct (should end with `/api/revalidate?secret=...`)

### Still not working?

Check your browser's cache:
1. Open browser settings
2. Clear cached images and files
3. Try in an incognito/private window

## 📊 What Gets Updated?

Different content types update different pages:

| Content Type | Pages Updated |
|--------------|---------------|
| **Artifacts** | Homepage, Digital Museum, Search, specific artifact page |
| **News Posts** | News page, specific news article |
| **Team Members** | Team page, About page |
| **Partners/Sponsors** | Partners page, Homepage |
| **Events** | Events page, Homepage |
| **Publications** | Research Publications page |
| **Site Settings** | ALL pages |

## 👥 For Content Editors (Non-Technical Team)

**Great news!** Once this is set up, you don't need to do anything special.

Just use Sanity Studio as normal:
1. ✏️ Edit your content
2. 📸 Upload images
3. ✅ Click "Publish"
4. 🎉 Changes appear on the website in seconds!

**No need to:**
- Contact a developer
- Run any commands
- Deploy anything
- Know any technical terms

## 🔄 How It Works (Optional Technical Info)

1. **You make a change** in Sanity and publish
2. **Sanity sends a webhook** to your website's API
3. **The website verifies** the secret is correct
4. **Next.js revalidates** the affected pages
5. **Users see the update** on their next visit

This is called "On-Demand Incremental Static Regeneration" (ISR) - but you don't need to remember that! Just know it makes updates instant.

## 📝 Important Reminders

- **Drafts don't trigger updates** - only published content
- **It takes 1-3 seconds** - not truly instant, but close!
- **Users need to refresh** their browser to see changes
- **The webhook is secure** - only Sanity can trigger it with the secret

## 🎓 Advanced: Multiple Webhooks for Specific Content

If you want separate webhooks for different content types (useful for debugging), you can create multiple webhooks:

### Artifacts Only
- **Filter**: `_type == "artefact"`
- **Projection**: `{"_type": _type, "slug": slug.current}`

### News Only
- **Filter**: `_type == "newsPost"`
- **Projection**: `{"_type": _type, "slug": slug.current}`

### Team Only
- **Filter**: `_type == "teamMember"`
- **Projection**: `{"_type": _type}`

### Partners Only
- **Filter**: `_type == "partner" || _type == "sponsor"`
- **Projection**: `{"_type": _type}`

## 🆘 Need Help?

If you're stuck:
1. Check the Sanity webhook logs first
2. Check your hosting platform's logs for errors
3. Verify the `REVALIDATION_SECRET` is set correctly
4. Make sure your website URL is correct

---

**Last Updated**: January 2025
**Maintained By**: Development Team
