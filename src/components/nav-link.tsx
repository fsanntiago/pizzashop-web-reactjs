import { Link, LinkProps, useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'

export type NavLinkProps = LinkProps

export function NavLink({ to, ...rest }: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      to={to}
      className={cn(
        to === pathname ? 'text-foreground' : 'text-muted-foreground',
        'flex items-center gap-1.5 text-sm font-medium hover:text-foreground',
      )}
      {...rest}
    />
  )
}
