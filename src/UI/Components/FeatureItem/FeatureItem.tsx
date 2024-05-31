import classNames from 'classnames'
import { IconType } from 'react-icons'

interface FeatureItemProps {
  className?: string
  title: string
  description: string
  Icon: IconType
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  className,
  description,
  Icon,
  title,
}) => {
  return (
    <div className={classNames(className, 'cursor-default')}>
      <div className="feature-box text-center p-4 md:p-6 max-w-sm mx-auto border-2 border-solid border-gray-300 rounded md:h-full">
        <div className="flex justify-center text-2xl p-4 text-indigo-600">
          <Icon />
        </div>
        <h5 className="text-xl font-medium mb-4">{title}</h5>
        <p className="text-gray-600 mb-3">{description}</p>
      </div>
    </div>
  )
}
