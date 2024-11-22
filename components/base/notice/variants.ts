import { cva } from 'class-variance-authority'
import type { NoticeVariant, NoticeIntent } from './types'

export const variants = cva('rounded-lg p-4 flex items-start gap-3', {
  variants: {
    variant: {
      solid: '',
      outline: 'border-2 bg-transparent'
    } as Record<NoticeVariant, string>,
    intent: {
      default: 'bg-el-1 text-white',
      info: 'bg-el-7 text-white',
      success: 'bg-el-3 text-white',
      warning: 'bg-el-9 text-white',
      error: 'bg-el-8 text-white'
    } as Record<NoticeIntent, string>
  },
  compoundVariants: [
    {
      variant: 'outline',
      intent: 'default',
      class: 'border-el-1 text-el-1 bg-transparent'
    },
    {
      variant: 'outline',
      intent: 'info',
      class: 'border-el-7 text-el-7 bg-transparent'
    },
    {
      variant: 'outline',
      intent: 'success',
      class: 'border-el-3 text-el-3 bg-transparent'
    },
    {
      variant: 'outline',
      intent: 'warning',
      class: 'border-el-9 text-el-9 bg-transparent'
    },
    {
      variant: 'outline',
      intent: 'error',
      class: 'border-el-8 text-el-8 bg-transparent'
    }
  ],
  defaultVariants: {
    variant: 'solid',
    intent: 'default'
  }
})