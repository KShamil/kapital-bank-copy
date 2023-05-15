import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ISliderData } from '../../Interfaces/interfaces';

export interface CarouselItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data:ISliderData;
}