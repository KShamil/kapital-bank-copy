import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IOperationsCardData } from '../../Interfaces/interfaces';

export interface OperationsCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: IOperationsCardData
}