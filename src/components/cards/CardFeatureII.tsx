interface ImageFeatureCardProps {
    feature: {
        image: string;
        title: string;
        description: string;
    };
}

const CardFeatureII = ({ feature }: ImageFeatureCardProps) => {
    return (
        <div
            className="
        group
        relative
        h-full
        bg-white
        dark:bg-[#1A1A1A]
        rounded-lg
        border border-gray-200
        dark:border-white/10
        overflow-hidden
        transition-colors
        duration-300
        bg-orange-500
        hover:border-orange-500
        [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-20px),calc(100%-20px)_100%,20px_100%,0_calc(100%-20px),0_20px)] 
        ">

            <div className="w-full aspect-video overflow-hidden">
                <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105"/>
            </div>

            <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                </p>
            </div>
        </div>
    );
};

export default CardFeatureII;














