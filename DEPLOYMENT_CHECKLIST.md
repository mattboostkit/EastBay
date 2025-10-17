# CRITICAL DEPLOYMENT CHECKLIST

## ⚠️ MANDATORY: After ANY Schema Changes

**ANY TIME** you modify files in the `schemas/` directory, you **MUST** immediately deploy to Sanity:

```bash
npx sanity schema extract
npx sanity schema deploy
npx sanity deploy
```

**IMPORTANT:** `npx sanity deploy` deploys the full studio UI to https://eastwearbay.sanity.studio/ with the updated schema embedded. This is required for the changes to appear in the hosted studio interface.

### Files that require schema deployment:
- `schemas/*.ts` (ANY file in the schemas directory)
- `schemas/index.ts`
- Any schema type definitions

### What happens if you DON'T deploy:
❌ Local code has the new fields
❌ Sanity Studio shows OLD fields
❌ User cannot see or use the new functionality
❌ Data structure mismatch between code and CMS

## Workflow for Schema Changes

1. **Edit schema file** (e.g., `schemas/educationResource.ts`)
2. **IMMEDIATELY run**:
   ```bash
   npx sanity schema extract
   npx sanity schema deploy
   npx sanity deploy
   ```
3. **Verify in Sanity Studio** at https://eastwearbay.sanity.studio/ or https://manage.sanity.io/
4. **Then commit to Git**:
   ```bash
   git add .
   git commit -m "Update schema and deploy to Sanity"
   git push
   ```

## Quick Commands

```bash
# Full schema update workflow (REQUIRED for hosted studio)
npx sanity schema extract && npx sanity schema deploy && npx sanity deploy

# Check deployed schemas
npx sanity schema list

# Validate schema without deploying
npx sanity schema validate

# Deploy studio only (after schema already deployed)
npx sanity deploy
```

## Common Schema Changes

- Adding new fields → **Deploy**
- Removing fields → **Deploy**
- Changing field types → **Deploy**
- Modifying validation rules → **Deploy**
- Adding new document types → **Deploy**
- Changing field names → **Deploy**

## Remember

**CODE CHANGES ≠ SANITY STUDIO CHANGES**

The schema in your code is NOT automatically reflected in Sanity Studio.
You MUST deploy the schema for users to see the changes.

**NO EXCEPTIONS.**
