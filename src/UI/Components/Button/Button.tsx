import classNames from 'classnames'

import { ButtonType } from 'Types'

interface HeaderButtonProps {
  type?: ButtonType
  className?: string
  onClick?: () => void
  children: React.ReactNode
}

export const Button: React.FC<HeaderButtonProps> = ({ className, children, onClick, type }) => {
  return (
    <button type={type ?? 'button'} className={classNames(className)} onClick={onClick}>
      {children}
    </button>
  )
}
