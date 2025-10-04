import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-white hover:bg-primary-dark",
        secondary: "border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
        destructive: "border-transparent bg-error text-white hover:bg-error/90",
        outline: "text-neutral-950",
        success: "border-transparent bg-success text-white hover:bg-success/90",
        price: "border-transparent bg-accent text-white hover:bg-accent-dark",
        discount: "border-transparent bg-warning text-white hover:bg-warning/90",
        generico: "border-transparent bg-neutral-800 text-white hover:bg-neutral-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

