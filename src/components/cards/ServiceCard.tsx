interface ServiceCardProps {
  service: {
    img: string;
    title: string;
    description: string;
  }
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div
      className="
        group
        relative
        h-full
        dark:bg-gray-900
        bg-white
        rounded-sm
        cursor-pointer
        shadow-md
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        p-8
        overflow-hidden
        [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-20px),calc(100%-20px)_100%,20px_100%,0_calc(100%-20px),0_20px)]
        ">

      {/* Left accent bar */}
      <div
        className="
          absolute
          left-0 top-0
          h-full w-1.5
          bg-orange-500"/>


      {/* Icon tile */}
      <div
        className="
          relative
          w-16 h-16
          flex items-center justify-center
          rounded-lg
          bg-orange-50
          mb-6
          dark:bg-gray-700
          group-hover:bg-orange-500
          transition-colors
          duration-300">
        <img
          src={service.img}
          alt={service.title}
          loading="lazy"
          className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all duration-300"/>
      </div>
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6 dark:text-gray-300">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;











