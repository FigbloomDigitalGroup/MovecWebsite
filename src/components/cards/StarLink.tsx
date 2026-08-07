
interface StarlinkCardProps {
    feature: {
        image: string;
        title: string;
        description: string;
    };
}

const StarlinkCard = ({ feature }: StarlinkCardProps) => {
    return (
        <div
            className="
        group
        h-full
        bg-white
        dark:bg-[#1A1A1A]
        border border-gray-200
        dark:border-white/10
        overflow-hidden
        transition-colors
        duration-300
        hover:border-orange-500
        [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-20px),calc(100%-20px)_100%,20px_100%,0_calc(100%-20px),0_20px)]">

            {/* Image with title overlay */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img
                    src={feature.image}
                    alt={feature.title}
                    className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <h3 className="absolute bottom-4 left-5 right-5 text-white text-lg font-bold leading-snug">
                    {feature.title}
                </h3>
            </div>

            {/* Description */}
            <div className="p-5 sm:p-6">
                <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                </p>
            </div>
        </div>
    );
};

export default StarlinkCard;


















