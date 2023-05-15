import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { INewsCardData } from '../../Interfaces/interfaces';

export interface NewsCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
    data:INewsCardData
}