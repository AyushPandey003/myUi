import { type FC } from 'react';
import type { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Container: FC<ContainerProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`container mx-auto px-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container; 