import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        overflow-hidden
        border
        border-gray-200
      "
    >
      {/* Image */}
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        {service.image ? (
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <Icon className="text-6xl text-blue-700" />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">
          {service.title}
        </h3>

        <p className="text-gray-600 mb-4">
          {service.shortDescription}
        </p>

        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 4).map((feature, index) => (
            <li
              key={index}
              className="text-sm text-gray-700"
            >
              ✅ {feature}
            </li>
          ))}
        </ul>

        <Link
          to={`/services/${service.id}`}
          className="
            inline-block
            bg-blue-700
            text-white
            px-5
            py-2
            rounded-lg
            hover:bg-blue-800
            transition
          "
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;