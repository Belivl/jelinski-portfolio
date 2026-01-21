## Production Deployment

### 1. Environment Variables

Create a `.env` file in your production environment (e.g., Vercel, Netlify) with the following variables:

| Variable              | Description                          |
| :-------------------- | :----------------------------------- |
| `VITE_CONVEX_URL`     | Your Convex deployment URL           |
| `VITE_ADMIN_PASSWORD` | Secure password for dashboard access |

### 2. Deployment Steps

#### Frontend (Vercel/Netlify)

1. Link your repository.
2. Set the build command to `npm run build`.
3. Set the output directory to `dist`.
4. Configure the environment variables mentioned above.

#### Backend (Convex)

1. Run `npx convex deploy` to deploy your schema and functions to production.
2. Update the environment variables in the Convex dashboard if necessary.

## Optimization Features

- **Code Splitting**: Routes are lazy-loaded to minimize initial bundle size.
- **SEO Ready**: Dynamic meta tags and canonical URLs for better search engine visibility.
- **Optimized Images**: Integrated with ImageKit for production-ready image delivery.
