import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'header-btn' | 'slider-btn' | 'search-btn' | 'calc-btn' | 'result-btn' | 'converter-btn' | 'search-block-btn'
    children: ReactNode
}