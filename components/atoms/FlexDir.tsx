import React from 'react';
import clsx from 'clsx';

type DirProps = {
  children: React.ReactNode;
  className?: string;
};

export const Row = ({ children, className = '' }: DirProps) => {
  return <div className={clsx('flex flex-row', className)}>{children}</div>;
};
export const Col = ({ children, className = '' }: DirProps) => {
  return <div className={clsx('flex flex-col', className)}>{children}</div>;
};
