# Setting Up Education Resources in Sanity

This guide will help you upload your downloadable lesson plans to Sanity CMS so they appear on the Education page.

## Overview

The education page now dynamically fetches lesson plans from Sanity. You need to:
1. Create zip files containing all materials for each lesson plan
2. Upload them to Sanity with the correct settings
3. They'll automatically appear on the website

## Step-by-Step Instructions

### 1. Prepare Your Zip Files

For each of the 7 lesson plans, create a **single zip file** containing all the materials (PowerPoint, Word docs, worksheets, etc.):

**Lesson Plans to Create:**
- Iron Age Pottery
- Roman Mosaics
- Ancient Flour Making
- Change in the 20th Century
- Digital Time Capsule
- Archaeology Time Machine
- Careers in Archaeology

**Example:** For "Iron Age Pottery", create `iron-age-pottery.zip` containing:
- `iron-age-pottery.pptx`
- `iron-age-pottery-worksheet.docx`
- `teacher-guide.pdf`
- Any other relevant files

### 2. Access Sanity Studio

1. Go to your Sanity Studio: `https://www.eastwearbay.org/studio`
2. Or run locally: `pnpm dev` then visit `http://localhost:3000/studio`
3. Log in with your Sanity account

### 3. Create a New Education Resource

1. Click the **"+"** button or navigate to **"Education Resource"** in the sidebar
2. Click **"Create new document"**

### 4. Fill in the Required Fields

For each lesson plan, fill in these fields:

#### **Basic Information**
- **Title**: e.g., "Iron Age Pottery"
- **Slug**: Click "Generate" (it will create `iron-age-pottery`)
- **Description**: Copy from the existing page or write a short description
- **Category**: Select **"Downloadable Lesson Plans"** (lesson-plans)

#### **Resource Type**
- Select **"Lesson Plan"** from the dropdown

#### **Key Stages** (Important!)
- Select the appropriate key stages:
  - Iron Age Pottery: KS1, KS2
  - Roman Mosaics: KS1, KS2
  - Ancient Flour Making: KS1, KS2
  - Change in the 20th Century: KS1, KS2, KS3
  - Digital Time Capsule: KS1, KS2
  - Archaeology Time Machine: KS1, KS2
  - Careers in Archaeology: KS1, KS2

#### **Subjects**
- Select relevant subjects from the list:
  - History
  - Art and Design
  - Archaeology
  - Careers (for the careers lesson)

#### **Duration** (Optional but recommended)
- Add estimated time, e.g., "45 minutes", "1-2 hours", "2 lessons"

#### **Main Image** (Optional but recommended)
- Upload a representative image for the lesson plan
- Recommended: 800×600px (4:3 aspect ratio)

#### **Resource Files** (IMPORTANT!)
1. Scroll to the **"Resource Files"** section
2. Click **"Add item"**
3. Click **"Upload"** and select your zip file
4. **File Title**: e.g., "Iron Age Pottery Lesson Pack"
5. **File Description**: Brief description of what's in the zip, e.g., "Includes PowerPoint presentation, student worksheets, and teacher guide"

### 5. Save and Publish

1. Click **"Publish"** in the top right corner
2. The lesson plan will now appear on the live website!

## Example: Complete Setup for "Iron Age Pottery"

```
Title: Iron Age Pottery
Slug: iron-age-pottery (auto-generated)
Description: Examine Iron Age pottery and how it was made with this interactive East Wear Bay themed session.
Category: Downloadable Lesson Plans
Resource Type: Lesson Plan
Key Stages: KS1, KS2
Subjects: History, Art and Design
Duration: 1-2 hours
Main Image: [Upload an image of Iron Age pottery]
Resource Files:
  - File: iron-age-pottery-pack.zip
  - Title: Iron Age Pottery Lesson Pack
  - Description: Complete lesson pack including PowerPoint, worksheets, and teacher guide
```

## Quick Reference: All 7 Lesson Plans

| Lesson Plan | Slug | Key Stages | Subjects |
|-------------|------|------------|----------|
| Iron Age Pottery | `iron-age-pottery` | KS1, KS2 | History, Art and Design |
| Roman Mosaics | `roman-mosaics` | KS1, KS2 | History, Art and Design |
| Ancient Flour Making | `ancient-flour-making` | KS1, KS2 | History |
| Change in the 20th Century | `20th-century` | KS1, KS2, KS3 | History |
| Digital Time Capsule | `digital-time-capsule` | KS1, KS2 | History |
| Archaeology Time Machine | `stratigraphy-time-machine` | KS1, KS2 | History |
| Careers in Archaeology | `careers-in-archaeology` | KS1, KS2 | Careers |

## How It Works

Once you publish an education resource:
1. The education page automatically fetches it from Sanity
2. It displays the title, description, key stages, and subjects
3. A **"Download Resources"** button appears that downloads your zip file
4. Users click the button and get all the lesson materials instantly

## Optional: Adding "Other Resources"

For resources like "Sensory Stories" or "Digital Time Capsule Gallery":
1. Create a new Education Resource
2. Select **Category**: "Other Learning Resources" (other-resources)
3. Fill in the details similarly
4. These will appear in the "Other Learning Resources" section

## Need Help?

- Sanity documentation: https://www.sanity.io/docs
- File uploads in Sanity: https://www.sanity.io/docs/file-type
- If you have issues, check the browser console for error messages

## Notes

- **File Size Limits**: Sanity supports files up to 200MB
- **Supported Formats**: The schema accepts `.pdf`, `.doc`, `.docx`, `.ppt`, `.pptx`, `.xls`, `.xlsx`, and `.zip`
- **Coming Soon**: If a resource isn't ready yet, check the **"Coming Soon"** checkbox - it will display with a "Coming Soon" badge
- **External Links**: If you want to link to an external resource (like Canterbury Trust), use the "External Link" field
