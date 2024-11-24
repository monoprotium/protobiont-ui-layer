import { cva } from 'class-variance-authority'
import type { ResultVariant, ResultStatus, ResultSize } from './types'

export const containerVariants = cva(
    'relative flex items-center gap-3 w-full transition-colors duration-200',
    {
      variants: {
        variant: {
          default: '',
          bordered: 'border',
          filled: ''
        } satisfies Record<ResultVariant, string>,
        status: {
          success: '',
          error: '',
          warning: '',
          info: ''
        } satisfies Record<ResultStatus, string>,
        size: {
          sm: 'p-2',
          base: 'p-3',
          lg: 'p-4'
        } satisfies Record<ResultSize, string>
      },
      compoundVariants: [
        // Default variant
        {
          variant: 'default',
          status: 'success',
          class: 'bg-el-3/10 text-el-3'
        },
        {
          variant: 'default',
          status: 'error',
          class: 'bg-el-8/10 text-el-8'
        },
        {
          variant: 'default',
          status: 'warning',
          class: 'bg-el-9/10 text-el-9'
        },
        {
          variant: 'default',
          status: 'info',
          class: 'bg-el-7/10 text-el-7'
        },
        // Bordered variant
        {
          variant: 'bordered',
          status: 'success',
          class: 'border-el-3 border-l-4 bg-el-3/5'
        },
        {
          variant: 'bordered',
          status: 'error',
          class: 'border-el-8 border-l-4 bg-el-8/5'
        },
        {
          variant: 'bordered',
          status: 'warning',
          class: 'border-el-9 border-l-4 bg-el-9/5'
        },
        {
          variant: 'bordered',
          status: 'info',
          class: 'border-el-7 border-l-4 bg-el-7/5'
        },
        // Filled variant
        {
          variant: 'filled',
          status: 'success',
          class: 'bg-el-3 text-white'
        },
        {
          variant: 'filled',
          status: 'error',
          class: 'bg-el-8 text-white'
        },
        {
          variant: 'filled',
          status: 'warning',
          class: 'bg-el-9 text-white'
        },
        {
          variant: 'filled',
          status: 'info',
          class: 'bg-el-7 text-white'
        }
      ],
      defaultVariants: {
        variant: 'default',
        status: 'info',
        size: 'base'
      }
    }
)