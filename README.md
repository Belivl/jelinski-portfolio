## Production Deployment

### 1. Environment Variables

Create a `.env` file in your production environment (e.g., Vercel, Netlify) with the following variables:

| Variable                     | Description                                                         |
| :--------------------------- | :------------------------------------------------------------------ |
| `VITE_CONVEX_URL`            | Your Convex deployment URL                                          |
| `VITE_ADMIN_PASSWORD`        | Secure password for dashboard access                                |
| `VITE_IMAGEKIT_PUBLIC_KEY`   | Your ImageKit public key                                            |
| `VITE_IMAGEKIT_URL_ENDPOINT` | Your ImageKit URL endpoint (e.g., `https://ik.imagekit.io/your-id`) |

### 2. ImageKit Private Mode Setup

If you have set your ImageKit endpoint to **Private**, follow these extra steps:

1.  Go to your **Convex Dashboard** > **Settings** > **Environment Variables**.
2.  Add a new secret called `IMAGEKIT_PRIVATE_KEY` and paste your private key from ImageKit.
3.  Deploy your Convex functions using `npx convex deploy`.

### 3. Deployment Steps

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
