# ⚡ Quick Start: Instant Website Updates

**Time needed:** 5 minutes
**Technical skill:** None required

## What This Does
Makes your Sanity edits appear on the live website in 2-3 seconds (instead of waiting hours).

## Setup (Do This Once)

### 1️⃣ Get Your Secret Key
- Ask your developer for the `REVALIDATION_SECRET`
- Or find it in your hosting dashboard under Environment Variables

### 2️⃣ Add the Webhook
1. Go to: [sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Click **API** → **Webhooks** → **Add Webhook**

### 3️⃣ Fill In These Fields

```
Name: Live Website Updates

URL: https://www.eastwearbay.org/api/revalidate?secret=YOUR_SECRET_HERE
     ↑ Replace YOUR_SECRET_HERE with your actual secret

Dataset: production

Trigger on: ✅ Create  ✅ Update  ✅ Delete

Filter: (leave empty)

Projection:
{
  "_type": _type,
  "slug": slug.current
}

HTTP method: POST

API version: v2021-06-07
```

### 4️⃣ Click Save

## That's It! 🎉

Now when you:
- Edit content in Sanity
- Click "Publish"
- Wait 2-3 seconds
- Refresh the website

Your changes will be live!

## Quick Test
1. Edit any artifact in Sanity
2. Click Publish
3. Wait 3 seconds
4. Refresh www.eastwearbay.org
5. See your change! ✨

## Not Working?
- Did you click "Publish" (not just Save)?
- Try Ctrl+Shift+R to hard refresh
- Check webhook logs in Sanity Manage → API → Webhooks

---

**Questions?** Check the full guide: `INSTANT_UPDATES_SETUP.md`
