# Sanity Update Guide

## Steps to Update Your Sanity Instance

### 1. Login to Sanity
```bash
npx sanity login
```

### 2. Check Your Access
```bash
npx sanity projects list
```

### 3. If Creating a New Project

#### a. Initialize Sanity
```bash
npx sanity init --bare
```

#### b. Update Environment Variables
After creating a new project, update `.env.local` with your new values:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-new-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2023-12-18
NEXT_PUBLIC_SANITY_STUDIO_URL=/studio
SANITY_API_TOKEN=your-new-token
```

#### c. Update sanity.config.ts
Replace the projectId in `/mnt/c/Dev/Cascade/eastbay/sanity.config.ts`:

```typescript
export const config = defineConfig({
  projectId: 'your-new-project-id', // Update this
  dataset: 'production',
  // ... rest of config
})
```

#### d. Deploy the Sanity Schema
```bash
npx sanity deploy
```

### 4. Generate a New API Token
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to API → Tokens
4. Create a new token with "Editor" permissions
5. Update `SANITY_API_TOKEN` in `.env.local`

### 5. Test Your Connection
```bash
# Start the development server
pnpm run dev

# Visit http://localhost:3000/admin
```

### 6. Import Sample Data (Optional)
If you want to import sample data:

```bash
# Export from old project (if you have access)
npx sanity dataset export production ./backup.tar.gz

# Import to new project
npx sanity dataset import ./backup.tar.gz production
```

## Troubleshooting

### CORS Issues
If you get CORS errors, add your domain to allowed origins:
1. Go to sanity.io/manage → your project → API → CORS origins
2. Add:
   - http://localhost:3000
   - https://your-production-domain.com

### Authentication Issues
If you can't access the studio:
1. Clear your browser cookies for Sanity
2. Run `npx sanity logout` then `npx sanity login`
3. Make sure you're using the correct Google/GitHub account

## Current Configuration
Your project currently uses:
- Project ID: `ce9tlzu0`
- Dataset: `production`
- Studio Path: `/admin`