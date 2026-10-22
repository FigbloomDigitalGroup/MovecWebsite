interface NewsCardProps {
  item: {
    image: string;
    category: string;
    date: string;
    title: string;
    excerpt: string;
  };
}

const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <div
      className="
        group
        h-full
        flex
        flex-col
        bg-white
        dark:bg-gray-900
        shadow-md
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        overflow-hidden
        [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-20px),calc(100%-20px)_100%,20px_100%,0_calc(100%-20px),0_20px)]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span
          className="
            absolute
            top-4
            left-4
            bg-orange-500
            text-white
            text-xs
            font-semibold
            uppercase
            tracking-wider
            px-3
            py-1">
          {item.category}
        </span>
      </div>

      <div className="flex-1 flex flex-col p-6">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
          {item.date}
        </span>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
          {item.excerpt}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
