'use client';

import * as React from 'react';
import { CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const alertVariants = cva(
  'flex items-center gap-3 p-4 rounded-lg',
  {
    variants: {
      variant: {
        success: 'text-green-400 bg-green-500/10',
        warning: 'text-yellow-400 bg-yellow-500/10',
        error: 'text-red-400 bg-red-500/10',
        info: 'text-blue-400 bg-blue-500/10',
      }
    },
    defaultVariants: {
      variant: 'info'
    }
  }
);

interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  message: string;
}

const Alert = ({ message, variant, className, ...props }: AlertProps) => {
  const iconMap = {
    success: CheckCircleIcon,
    warning: ExclamationTriangleIcon,
    error: XCircleIcon,
    info: InformationCircleIcon
  };
  
  const IconComponent = iconMap[variant || 'info'] as React.ElementType;

  return (
    <div className={cn(alertVariants({ variant, className }))} {...props}>
      <IconComponent className="w-5 h-5 flex-shrink-0" />
      <p>{message}</p>
    </div>
  );
};

export { Alert, type AlertProps, alertVariants }; 