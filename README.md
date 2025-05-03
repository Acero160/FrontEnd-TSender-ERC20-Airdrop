# TSENDER-UI

Frontend interface for an ERC20 Airdrop platform inspired by [tsender.com](https://tsender.com), built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- ✅ Airdrop form for batch ERC20 token transfers
- ✅ Real-time token amount formatting and validation
- ✅ Modular and reusable UI components
- ✅ Utility functions with unit testing using **Vitest**
- ✅ E2E tests powered by **Playwright**
- ✅ Tailwind CSS for utility-first responsive styling
- ✅ Clean and scalable folder structure
  
---

## 🧪 Testing

- **Unit Tests:** Located in `utils/`, tested with [Vitest](https://vitest.dev)
- **E2E Tests:** Configured in `test/playwright/` using [Playwright](https://playwright.dev)

### Run tests

```bash
# Unit tests
npm run test

# Playwright E2E tests
npx playwright test
```
---

## 🛠️ Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Web3:** RainbowKit / Wagmi (setup in `wallet-setup/`)
- **Testing:** Vitest, Playwright

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Open http://localhost:3000 in your browser
```
## 📦 Build
```bash
npm run build
```


