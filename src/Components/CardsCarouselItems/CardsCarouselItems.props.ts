import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ICardsCarouselData } from '../../Interfaces/interfaces';

export interface CardsCarouselItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: ICardsCarouselData
}