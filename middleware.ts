import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define supported locales directly to avoid issues with edge runtime
const locales = ['en', 'ar']
const defaultLocale = 'en'

// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest) {
  // Check if the pathname is for static assets
  const { pathname } = request.nextUrl
  
  // Skip locale detection for static assets and public files
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/videos/') ||
    pathname.startsWith('/locales/') ||
    pathname.includes('/favicon.') ||
    pathname.includes('.png') ||
    pathname.includes('.jpg') ||
    pathname.includes('.jpeg') ||
    pathname.includes('.gif') ||
    pathname.includes('.svg') ||
    pathname.includes('.ico') ||
    pathname.includes('.webp')
  ) {
    return null
  }

  // Check if locale is in cookie
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value
  
  if (localeCookie && locales.includes(localeCookie)) {
    return localeCookie
  }

  // Check language headers
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const parsedLocales = acceptLanguage.split(',').map(l => l.split(';')[0])
    const locale = parsedLocales.find(l => locales.some(supportedLocale => 
      l.startsWith(supportedLocale) || l.startsWith(supportedLocale.split('-')[0])
    ))
    
    if (locale) {
      // Extract just the first part if it's a region-specific locale
      const extractedLocale = locale.split('-')[0]
      if (locales.includes(extractedLocale)) {
        return extractedLocale
      }
    }
  }
  
  // Default to the default locale
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Get locale
  const locale = getLocale(request)
  
  // If it's a static asset or locale is null, skip redirect
  if (locale === null) {
    return NextResponse.next()
  }

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    // Extract the locale from the pathname
    const currentLocale = pathname.split('/')[1]
    // Create response
    const response = NextResponse.next()
    // Set the NEXT_LOCALE cookie
    response.cookies.set('NEXT_LOCALE', currentLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'strict'
    })
    return response
  }

  // Redirect if there is no locale
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  
  // Copy search params
  request.nextUrl.searchParams.forEach((value, key) => {
    newUrl.searchParams.set(key, value)
  })
  
  const response = NextResponse.redirect(newUrl)
  
  // Set the NEXT_LOCALE cookie on redirect
  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'strict'
  })
  
  return response
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api)
    '/((?!api|_next/static|_next/image|images|videos|favicon.ico).*)',
  ],
} 