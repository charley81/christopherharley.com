import * as React from 'react'
import { cn } from '../../lib/utils'

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full bg-transparent border-0 border-b border-border-muted focus:border-primary focus:ring-0 focus:outline-none px-0 py-3 font-body-md text-body-md text-text-primary transition-colors duration-300 placeholder:text-outline-variant disabled:cursor-not-allowed disabled:opacity-50 resize-y',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
