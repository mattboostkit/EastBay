# CRITICAL DEPLOYMENT CHECKLIST

## ⚠️ MANDATORY: After ANY Schema Changes

**ANY TIME** you modify files in the `schemas/` directory, you **MUST** immediately deploy to Sanity:

```bash
pnpm run sanity:deploy
```

This single command runs all three required steps:
1. `npx sanity schema extract` - Extracts schema from your code
2. `npx sanity schema deploy` - Deploys schema to Sanity backend API
3. `npx sanity deploy` - Deploys full studio UI to https://eastwearbay.sanity.studio/

**IMPORTANT:** Step 3 (`npx sanity deploy`) is CRITICAL. It deploys the full studio UI with the updated schema embedded. Without this step, the hosted studio interface will show OLD fields.

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
2. **IMMEDIATELY run the deployment script**:
   ```bash
   pnpm run sanity:deploy
   ```
   This single command does ALL three required steps:
   - Extracts the schema
   - Deploys schema to backend API
   - Deploys full studio UI to https://eastwearbay.sanity.studio/

3. **Verify in Sanity Studio** at https://eastwearbay.sanity.studio/ or https://manage.sanity.io/
4. **Then commit to Git**:
   ```bash
   git add .
   git commit -m "Update schema and deploy to Sanity"
   git push
   ```

## Quick Commands

```bash
# EASIEST: Use the npm script (does everything in one command)
pnpm run sanity:deploy

# OR run commands individually:
# Full schema update workflow (REQUIRED for hosted studio)
npx sanity schema extract && npx sanity schema deploy && npx sanity deploy

# Check deployed schemas
npx sanity schema list

# Validate schema without deploying
pnpm run sanity:validate

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
