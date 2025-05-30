# Next.js Localization Guide

This guide will walk you through implementing comprehensive internationalization (i18n) in a Next.js application using next-i18next and custom middleware.

## Table of Contents

1. [Setup and Installation](#setup-and-installation)
2. [Project Structure](#project-structure)
3. [Configuration Files](#configuration-files)
4. [Middleware for Route Handling](#middleware-for-route-handling)
5. [Translation Files](#translation-files)
6. [Using Translations in Components](#using-translations-in-components)
7. [Language Switcher](#language-switcher)
8. [Best Practices](#best-practices)

## Setup and Installation

Install the required packages:

```bash
pnpm add next-i18next i18next react-i18next i18next-browser-languagedetector i18next-http-backend i18next-resources-to-backend js-cookie
```

## Project Structure

Create the following directory structure:

```
your-project/
├── app/
├── components/
├── locales/
│   ├── en/
│   │   └── common.json
│   └── ar/
│       └── common.json
├── middleware.ts
├── next-i18next.config.js
└── next.config.mjs
```

## Configuration Files

### 1. `next-i18next.config.js`

```javascript
/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    localeDetection: false,
  },
  localePath: '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
```

### 2. `next.config.mjs`

Update your Next.js configuration:

```javascript
// @ts-check
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  }
}

export default nextConfig
```

## Middleware for Route Handling

Create `middleware.ts` in the root directory:

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define supported locales
const locales = ['en', 'ar']
const defaultLocale = 'en'

// Get the preferred locale
function getLocale(request: NextRequest) {
  // Skip locale detection for static assets and API routes
  const { pathname } = request.nextUrl
  
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/images/') ||
    pathname.includes('/favicon.') ||
    pathname.includes('.png') ||
    pathname.includes('.jpg') ||
    // Add other asset extensions as needed
    pathname.includes('.svg')
  ) {
    return null
  }

  // Check if locale is in cookie
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value
  
  if (localeCookie && locales.includes(localeCookie)) {
    return localeCookie
  }

  // Check accept-language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const parsedLocales = acceptLanguage.split(',').map(l => l.split(';')[0])
    const locale = parsedLocales.find(l => locales.some(supportedLocale => 
      l.startsWith(supportedLocale) || l.startsWith(supportedLocale.split('-')[0])
    ))
    
    if (locale) {
      const extractedLocale = locale.split('-')[0]
      if (locales.includes(extractedLocale)) {
        return extractedLocale
      }
    }
  }
  
  // Default locale as fallback
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Get locale
  const locale = getLocale(request)
  
  // Skip redirect for static assets
  if (locale === null) {
    return NextResponse.next()
  }

  // Check if pathname already has locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    // Extract locale from pathname
    const currentLocale = pathname.split('/')[1]
    // Create response
    const response = NextResponse.next()
    // Set NEXT_LOCALE cookie
    response.cookies.set('NEXT_LOCALE', currentLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'strict'
    })
    return response
  }

  // Redirect if no locale in URL
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  
  // Copy search params
  request.nextUrl.searchParams.forEach((value, key) => {
    newUrl.searchParams.set(key, value)
  })
  
  const response = NextResponse.redirect(newUrl)
  
  // Set NEXT_LOCALE cookie
  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'strict'
  })
  
  return response
}

export const config = {
  matcher: [
    // Skip internal paths
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
  ],
}
```

## Translation Files

### 1. Create locale files

#### `locales/en/common.json`

```json
{
  "general": {
    "siteName": "Your Site Name",
    "bookNow": "Book Now",
    "viewDetails": "View Details"
  },
  "navigation": {
    "home": "Home",
    "about": "About",
    "services": "Services",
    "contact": "Contact Us"
  },
  "language": {
    "switchTo": "العربية",
    "label": "Language"
  }
}
```

#### `locales/ar/common.json`

```json
{
  "general": {
    "siteName": "اسم موقعك",
    "bookNow": "احجز الآن",
    "viewDetails": "عرض التفاصيل"
  },
  "navigation": {
    "home": "الرئيسية",
    "about": "من نحن",
    "services": "خدماتنا",
    "contact": "اتصل بنا"
  },
  "language": {
    "switchTo": "English",
    "label": "اللغة"
  }
}
```

## Using Translations in Components

### 1. Create a custom hook for translations

Create a file called `useTranslation.ts` in your hooks directory:

```typescript
import { useTranslation as useNextTranslation } from 'next-i18next';
import { useParams } from 'next/navigation';

export function useTranslation() {
  const params = useParams();
  const locale = params?.locale as string || 'en';
  
  // Use the next-i18next hook
  const { t, i18n } = useNextTranslation('common');
  
  // Get the current direction based on locale
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  
  return { t, i18n, locale, dir };
}
```

### 2. Using translations in components

```tsx
'use client';

import { useTranslation } from '@/hooks/useTranslation';

export default function Header() {
  const { t, dir } = useTranslation();
  
  return (
    <header dir={dir}>
      <nav>
        <ul>
          <li>{t('navigation.home')}</li>
          <li>{t('navigation.about')}</li>
          <li>{t('navigation.services')}</li>
          <li>{t('navigation.contact')}</li>
        </ul>
      </nav>
    </header>
  );
}
```

## Language Switcher

Create a language switcher component:

```tsx
'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';

export default function LanguageSwitcher() {
  const { t, locale } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  
  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    
    // Set the cookie
    Cookies.set('NEXT_LOCALE', newLocale, { 
      expires: 365,
      path: '/',
      sameSite: 'strict' 
    });
    
    // Calculate the new path by replacing the locale part
    const pathWithoutLocale = pathname.substring(3); // Remove /{locale} prefix
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    
    // Navigate to the new path
    router.push(newPath);
    router.refresh();
  };
  
  return (
    <button onClick={switchLanguage} className="language-switch">
      {t('language.switchTo')}
    </button>
  );
}
```

## Best Practices

1. **Organize translations by namespace**:
   - `common.json` for general translations
   - `home.json` for home page specific translations
   - `about.json` for about page specific translations

2. **Set HTML direction based on language**:
   - Add `dir={dir}` to your root layout component
   - Apply RTL-specific styles based on locale

3. **Handle RTL styling with Tailwind**:
   - Use Tailwind's RTL plugin or utility classes

4. **Add metadata for each language**:
   ```tsx
   export async function generateMetadata({ params }) {
     const { locale } = params;
     
     return {
       title: locale === 'en' ? 'My Website' : 'موقعي',
       description: locale === 'en' 
         ? 'Welcome to my website' 
         : 'مرحبا بكم في موقعي',
     };
   }
   ```

5. **Structure your app directory for i18n**:
   ```
   app/
   ├── [locale]/
   │   ├── layout.tsx
   │   ├── page.tsx
   │   ├── about/
   │   │   └── page.tsx
   │   └── services/
   │       └── page.tsx
   ```

By following this guide, you'll have a fully functional internationalized Next.js application with automatic locale detection, language switching, and proper RTL support.
