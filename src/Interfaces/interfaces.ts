import { StaticImageData } from 'next/image';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface ISliderData {
    id: number,
    title: string,
    strong: string,
    small: string,
    img: StaticImageData,
    link: string
}

export interface IOperationsCardData {
    id: number,
    img: IconProp,
    strong: string,
    link: string
}

export interface ICardsCarouselData {
    id: number,
    img: StaticImageData,
    title: string,
    strong: string,
    descr: string,
    subtitle1: string,
    subtitle2: string,
    subtitle3: string,
    info1: string,
    info2: string,
    info3: string,
    link: string
}

export interface IDailyLoanData {
    id: number,
    img: StaticImageData,
    title: string,
    strong: string,
    descr: string,
    subtitle1: string,
    subtitle2: string,
    subtitle3: string,
    info1: string,
    info2: string,
    info3: string,
    link: string
}

export interface INewsCardData {
    id:number,
    news:string,
    day:string,
    month:string

}