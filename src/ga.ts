// Ensure gtag types exist
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Lazy-load Google Analytics (GA4) and return a Promise that resolves when ready.
 * Automatically waits for the user to interact (mousemove or touchstart).
 *
 * @param id - GA4 Measurement ID (e.g., 'G-XXXXXXXXXX')
 * @returns Promise that resolves once GA is initialized
 */
export function initGALazy(id: string): Promise<void> {
  if (!id) {
    console.warn('Google Analytics ID is required')
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    let loaded = false

    const loadGA = () => {
      if (loaded) return
      loaded = true

      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer.push(args)
      }

      const script = document.createElement('script')
      script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
      script.async = true
      script.onload = () => {
        window.gtag?.('js', new Date())
        window.gtag?.('config', id, { send_page_view: true })
        resolve()
      }

      document.head.appendChild(script)
    }

    const onUserInteract = () => {
      window.removeEventListener('mousemove', onUserInteract)
      window.removeEventListener('touchstart', onUserInteract)
      loadGA()
    }

    window.addEventListener('mousemove', onUserInteract, { once: true, passive: true })
    window.addEventListener('touchstart', onUserInteract, { once: true, passive: true })
  })
}
