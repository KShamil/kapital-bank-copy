import { ICardsCarouselData, IDailyLoanData, INewsCardData, IOperationsCardData, ISliderData } from '../Interfaces/interfaces';
import Img1 from '../assets/Images/carousel-img/gtk-5-dek-endirim1681471299.png';
import Img2 from '../assets/Images/carousel-img/bb-10-azn-ilk-taksit-emeliyyatinda1681974546.png';
import Img3 from '../assets/Images/carousel-img/ipoteka-krediti1655890221.png';
import Img4 from '../assets/Images/carousel-img/heftesonu-is-rejimi1639578179.webp';
import { faBullhorn, faHouseChimney, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import CashbackCard from '../assets/Images/cards-img/birbank-cashback-home.png';
import UmicoCard from '../assets/Images/cards-img/birbank-umico-home.png';
import UmicoPremiumCard from '../assets/Images/cards-img/birbank-umico-premium-home.png';
import MilesCard from '../assets/Images/cards-img/birbank-miles-home.png';
import DailyLoanImg from '../assets/Images/daily-loan-img/daily-loan3.png';


export const sliderData: ISliderData[] = [
    {
        id: 1,
        title: 'Nağd krediti onlayn almaq',
        strong: '5% daha sərfəlidir!',
        small: '',
        img: Img1,
        link: 'Sifariş et'
    },
    {
        id: 2,
        title: 'Onlayn sifariş etmək,',
        strong: '2 qat sərfəlidir!',
        small: '',
        img: Img2,
        link: 'Sifariş et'
    },
    {
        id: 3,
        title: 'İpoteka krediti',
        strong: '',
        small: 'Mənzil sahibi olmaq və ya yeniləmək istəyənlər üçün ',
        img: Img3,
        link: 'Daha ətraflı'
    },
    {
        id: 4,
        title: 'Həftəsonu iş rejimi',
        strong: '',
        small: 'Bir çox filiallarımız şənbə və bazar günü də fəaliyyət göstərir.',
        img: Img4,
        link: 'Daha ətraflı'
    },

]

export const operationsCardData: IOperationsCardData[] = [
    {
        id: 1,
        img: faCreditCard,
        strong: 'Taksit kartı',
        link: 'sifariş et'

    },
    {
        id: 2,
        img: faSackDollar,
        strong: 'Kredit',
        link: 'sifariş et'
    },
    {
        id: 3,
        img: faHouseChimney,
        strong: 'İpoteka',
        link: 'sifariş et'


    },
    {
        id: 4,
        img: faCreditCard,
        strong: 'Debet kart',
        link: 'sifariş et'
    },
    {
        id: 5,
        img: faBullhorn,
        strong: 'Kampaniyalara',
        link: 'bax'
    },

]

export const cardsCarouselData: ICardsCarouselData[] = [
    {
        id: 1,
        img: CashbackCard,
        title: "Birbank",
        strong: "Cashback taksit",
        descr: "Kartla edilən nağdsız ödənişlərə minimum 1.5%-dən başlayan keşbek, faizsiz və komissiyasız taksit imkanı verən unikal bir kartdır.",
        subtitle1: "30%-dək keşbek və 2 qat ƏDV",
        subtitle2: "pulsuz",
        subtitle3: "63 günədək",
        info1: "Bonus",
        info2: "Kartın qiyməti",
        info3: "Güzəşt müddəti",
        link: "Sifariş et"
    },
    {
        id: 2,
        img: UmicoCard,
        title: "Birbank",
        strong: "Umico taksit",
        descr: "Gündəlik alış-veriş üçün olan, kredit və taksit kartı imkanlarını birləşdirən, Umico bonusları qazanma imkanını təqdim edən unikal bir kartdır.",
        subtitle1: "1.5%-dən başlayan",
        subtitle2: "pulsuz",
        subtitle3: "63 günədək",
        info1: "Keşbek",
        info2: "Kartın qiyməti",
        info3: "Güzəşt müddəti",
        link: "Sifariş et"
    },
    {
        id: 3,
        img: MilesCard,
        title: "Birbank",
        strong: "Miles taksit",
        descr: "Kartla edilən nağdsız ödənişlərə 1 AZN-ə 1 mil bonus qazandıran, pulsuz səyahət, faizsiz və komissiyasız taksit imkanı verən unikal bir kartdır.",
        subtitle1: "1 AZN = 1 Mil",
        subtitle2: "pulsuz",
        subtitle3: "63 günədək",
        info1: "Millərin toplanması",
        info2: "Kartın qiyməti",
        info3: "Güzəşt müddəti",
        link: "Sifariş et"
    },
    {
        id: 4,
        img: UmicoPremiumCard,
        title: "Birbank",
        strong: "Umico taksit",
        descr: "Kapital Bank və Umiconun birgə təqdim etdiyi, gündəlik alış-veriş üçün nəzərdə tutulan, kredit və taksit kartı imkanlarını birləşdirən və hər yerdə əlavə Umico bonusları qazanma imkanını təqdim edən unikal bir kartdır.",
        subtitle1: "1.5%-dən başlayan",
        subtitle2: "pulsuz",
        subtitle3: "63 günədək",
        info1: "Keşbek",
        info2: "Kartın qiyməti",
        info3: "Güzəşt müddəti",
        link: "Sifariş et"
    }

]

export const dailyLoandata: IDailyLoanData[] = [
    {
        id: 1,
        img: DailyLoanImg,
        title: "Gündəlik",
        strong: "tələbat krediti",
        descr: "30000 AZN-dək, arzularınızı reallaşdırmaq və ya ehtiyaclarınızı ödəmək üçün nağd kredit təklif edirik.",
        subtitle1: "30 000 AZN-dək",
        subtitle2: "59 ayadək",
        subtitle3: "13%-dən",
        info1: "Kredit məbləği",
        info2: "Kredit müddəti",
        info3: "İllik faiz dərəcəsi",
        link: "Sifariş et"
    }
]

export const newsCardData: INewsCardData[] = [
    {
        id: 1,
        news: "Standard & Poor's agentliyi Kapital Bank-ın reytinq proqnozunu yüksəltdi",
        day: '05',
        month: 'May'
    },
    {
        id: 2,
        news: 'Kapital Bank mikro kreditlərin faizlərini endirdi',
        day: '03',
        month: 'May'
    },
    {
        id: 3,
        news: 'Kapital Bank-ın səhmdarları yeni təyinatları təsdiqlədi',
        day: '02',
        month: 'May'
    },
    {
        id: 4,
        news: 'Kapital Bank-da növbəti dəfə qanvermə aksiyası keçirilib',
        day: '12',
        month: 'May'
    },
    {
        id: 5,
        news: 'Kapital Bank Visa-nın 4 mükafatına layiq görülüb',
        day: '11',
        month: 'May'
    },
    {
        id: 6,
        news: '“Campbell Biologiya” kitabının BDU-da və ADPU-da təqdimatı keçirildi',
        day: '08',
        month: 'May'
    }

]