import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ServiceCard = ({ title, imgSrc, description, onReadMore, id }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="clay-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 group"
    >
      {/* IMAGE */}
      <div className="flex justify-center mb-6">
        <img
          src={imgSrc}
          alt={`${title} illustration`}
          loading="lazy"
          className="w-20 h-20 object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-yellow-500 text-xl font-semibold mb-3 text-center">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-700 text-base leading-relaxed mb-6 text-center">
        {description}
      </p>

      {/* CTA */}
      <button
        onClick={() => onReadMore(id)}
        aria-label={`Read more about ${title}`}
        className="bg-yellow-400 text-blue-900 font-semibold py-2 px-5 rounded-lg clay-pressable hover:bg-yellow-500 transition duration-300 self-center"
      >
        Learn More
      </button>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onReadMore: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ServiceCard;