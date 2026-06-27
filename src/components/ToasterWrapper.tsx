import { Toaster } from 'sonner'

export default function ToasterWrapper() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border-muted)',
          color: 'var(--color-text-primary)',
          borderRadius: '0.5rem',
          padding: '0.875rem 1.125rem',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.875rem',
        },
        classNames: {
          title: 'text-sm font-semibold text-text-primary',
          description: 'text-sm text-text-secondary mt-1',
        },
      }}
      duration={5000}
    />
  )
}
