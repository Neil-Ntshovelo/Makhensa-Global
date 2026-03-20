import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ServiceCard = ({ title, icon: Icon, description, onReadMore, id }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="clay-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 group"
    >
      {/* ICON */}
      <div className="flex justify-center mb-6">
        {Icon ? (
          <Icon className="text-cyan-500 text-5xl transition-transform duration-500 group-hover:scale-110" />
        ) : null}
      </div>

      {/* TITLE */}
      <h3 className="text-blue-900 text-xl font-semibold mb-3 text-center">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-blue-900/70 text-base leading-relaxed mb-6 text-center">
        {description}
      </p>

      {/* CTA */}
      <button
        onClick={() => onReadMore(id)}
        aria-label={`Read more about ${title}`}
        className="bg-cyan-400 text-blue-900 font-semibold py-2 px-5 rounded-lg clay-pressable hover:bg-cyan-500 transition duration-300 self-center"
      >
        Learn More
      </button>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  description: PropTypes.string.isRequired,
  onReadMore: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ServiceCard;