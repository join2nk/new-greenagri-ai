'use client'

import { useAnalytics } from '@/app/(analytics)/_hooks/use-analytics'
import { useRef, useEffect } from 'react'

interface AnalyticsFormProps {
  children: React.ReactNode
  formName: string
  onSubmit?: (e: React.FormEvent) => void
  className?: string
}

export function AnalyticsForm({ children, formName, onSubmit, className }: AnalyticsFormProps) {
  const { trackFormSubmission, trackEvent } = useAnalytics()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    // Track form submission
    trackFormSubmission(formName)
    
    // Track form interaction
    trackEvent('form', 'form_submit', formName, { formName })
    
    // Call the original onSubmit if provided
    if (onSubmit) {
      onSubmit(e)
    }
  }

  // Track form focus (user started interacting)
  useEffect(() => {
    const form = formRef.current
    if (!form) return

    let hasTrackedFocus = false

    const handleFocus = () => {
      if (!hasTrackedFocus) {
        trackEvent('form', 'form_focus', formName, { formName })
        hasTrackedFocus = true
      }
    }

    const inputs = form.querySelectorAll('input, textarea, select')
    inputs.forEach(input => {
      input.addEventListener('focus', handleFocus)
    })

    return () => {
      inputs.forEach(input => {
        input.removeEventListener('focus', handleFocus)
      })
    }
  }, [formName, trackEvent])

  return (
    <form 
      ref={formRef}
      className={className} 
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  )
}

// HOC for wrapping existing forms with analytics
export function withAnalyticsForm<T extends { onSubmit?: (e: React.FormEvent) => void }>(
  Component: React.ComponentType<T>,
  formName: string
) {
  return function AnalyticsWrappedForm(props: T) {
    const { trackFormSubmission } = useAnalytics()

    const handleSubmit = (e: React.FormEvent) => {
      trackFormSubmission(formName)
      if (props.onSubmit) {
        props.onSubmit(e)
      }
    }

    return <Component {...props} onSubmit={handleSubmit} />
  }
}

// Analytics tracking for buttons
interface AnalyticsButtonProps {
  children: React.ReactNode
  eventName?: string
  eventValue?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export function AnalyticsButton({ 
  children, 
  eventName = 'button_click', 
  eventValue, 
  onClick, 
  className,
  type = 'button',
  disabled
}: AnalyticsButtonProps) {
  const { trackEvent } = useAnalytics()

  const handleClick = () => {
    trackEvent('click', eventName, eventValue || String(children), {
      buttonText: String(children),
      eventValue,
    })
    
    if (onClick) {
      onClick()
    }
  }

  return (
    <button 
      type={type}
      className={className}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

// Analytics tracking for links
interface AnalyticsLinkProps {
  children: React.ReactNode
  href: string
  eventName?: string
  className?: string
  target?: string
  rel?: string
}

export function AnalyticsLink({ 
  children, 
  href, 
  eventName = 'link_click',
  className,
  target,
  rel 
}: AnalyticsLinkProps) {
  const { trackEvent } = useAnalytics()

  const handleClick = () => {
    const isExternal = href.startsWith('http') && !href.includes(window.location.hostname)
    const isDownload = /\.(pdf|doc|docx|zip|exe|dmg|apk)$/i.test(href)
    
    if (isExternal) {
      trackEvent('click', 'external_link', href, { url: href, text: String(children) })
    } else if (isDownload) {
      const fileName = href.split('/').pop() || 'unknown'
      trackEvent('download', 'file_download', fileName, { url: href, fileName })
    } else {
      trackEvent('click', eventName, href, { url: href, text: String(children) })
    }
  }

  return (
    <a 
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
