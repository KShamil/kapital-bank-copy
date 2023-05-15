import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IDailyLoanData } from '../../Interfaces/interfaces';

export interface DailyLoanItemsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data: IDailyLoanData
}