import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const buttonStyle = {
    color: 'var(--hover-bg-color)',
    background: 'none',
    border: 'none',
    fontSize: '3.5rem',
    zIndex: '1',
};
 export const properties = {
    prevArrow: (
        <button style={{ ...buttonStyle }}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </button>
    ),
    nextArrow: (
        <button style={{ ...buttonStyle }}>
            <FontAwesomeIcon icon={faAngleRight} />
        </button>
    ),
};
 export const responsiveSettings = [
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        },
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        },
    },
    {
        breakpoint: 0,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    },
];