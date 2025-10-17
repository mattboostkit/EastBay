# CRITICAL DEPLOYMENT CHECKLIST

## ⚠️ MANDATORY: After ANY Schema Changes

**ANY TIME** you modify files in the `schemas/` directory, you **MUST** immediately deploy to Sanity:

```bash
npx sanity schema extract
npx sanity schema deploy
```

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
   ```
3. **Verify in Sanity Studio** at https://manage.sanity.io/
4. **Then commit to Git**:
   ```bash
   git add .
   git commit -m "Update schema and deploy to Sanity"
   git push
   ```

## Quick Commands

```bash
# Full schema update workflow
npx sanity schema extract && npx sanity schema deploy

# Check deployed schemas
npx sanity schema list

# Validate schema without deploying
npx sanity schema validate
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
