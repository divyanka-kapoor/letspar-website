# LetSpar - Train Your Wit

Never fumble a comeback again. AI-coached wit training. Voice-first. 10 minutes a day.

## 🚀 Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

## 📦 Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions.

### To Enable GitHub Pages:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Build and deployment** → **Source**, select **GitHub Actions**
4. Push to the `main` branch to trigger a deployment

Your site will be live at: `https://YOUR_USERNAME.github.io/letspar-website/`

## 🛠 Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx         # Homepage
│   ├── privacy/         # Privacy policy
│   ├── terms/           # Terms of service
│   └── freeze-to-fire/  # Feature page
├── components/          # Reusable UI components
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── FAQ.tsx
│   └── ...
public/                  # Static assets
```

## 📝 License

© LetSpar. All rights reserved.
