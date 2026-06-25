import * as React from 'react'
import { cn } from '../../lib/utils'

type FieldProps = React.HTMLAttributes<HTMLDivElement>

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-2', className)}
      {...props}
    />
  ),
)
Field.displayName = 'Field'

const FieldGroup = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-6', className)}
      {...props}
    />
  ),
)
FieldGroup.displayName = 'FieldGroup'

const FieldLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      'font-label-mono text-label-mono text-text-primary uppercase tracking-widest leading-none',
      className,
    )}
    {...props}
  />
))
FieldLabel.displayName = 'FieldLabel'

const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-[0.8rem] text-text-secondary', className)}
    {...props}
  />
))
FieldDescription.displayName = 'FieldDescription'

const FieldError = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-[0.8rem] font-medium text-error', className)}
    {...props}
  >
    {children}
  </p>
))
FieldError.displayName = 'FieldError'

export { Field, FieldGroup, FieldLabel, FieldDescription, FieldError }
