import PropTypes from 'prop-types';

const ServiceCard = ({ title, imgSrc, description, onReadMore, id }) => (
    <div className='bg-blue-900 shadow-lg rounded-lg p-4 m-2 w-lg sm:w-full md:w-full lg:w-full transition-transform duration-700 transform hover:scale-100 ease-in-out'>
        <h3 className='text-yellow-400 text-2xl font-semibold mb-2'>{title}</h3>
        <img src={imgSrc} alt={`${title} illustration`} className='w-full h-20 object-contain rounded-md mb-5' loading="lazy" />
        <p className='text-gray-200 text-lg mb-4'>{description}</p>
        <button 
            className='bg-yellow-400 text-gray-500 py-2 px-4 rounded hover:bg-yellow-500 transition duration-300' 
            onClick={() => onReadMore(id)} 
            aria-label={`Read more about ${title}`}
        >
            Read more...
        </button>
    </div>
);

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onReadMore: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};