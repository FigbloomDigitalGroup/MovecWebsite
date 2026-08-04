import Tilt from "react-parallax-tilt";

interface Props {
  feature: {
    icon: any;
    title: string;
    description: string;
  };
}

export default function IspFeature({ feature }: Props) {
  return (
    <Tilt
      scale={1.0}
      tiltMaxAngleX={40}
      tiltMaxAngleY={40}
      perspective={800}
      gyroscope={true}
      transitionSpeed={3000}>
      <div className="h-[300px] p-6 cursor-pointer bg-gray-200 dark:bg-gray-900 shadow-md flex flex-col gap-5 items-center  [clip-path:polygon(20px_0,calc(100%-20px)_0,100%_20px,100%_calc(100%-20px),calc(100%-20px)_100%,20px_100%,0_calc(100%-20px),0_20px)]  ">
        <div className="w-15 h-15 text-4xl rounded-full text-orange-500 bg-gray-300 dark:bg-gray-800 flex items-center justify-center">
          {feature.icon}
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center">
          {feature.title}
        </h2>
        <p className="flex-1 overflow-y-auto text-sm text-gray-600 dark:text-gray-300 text-center">
          {feature.description}
        </p>
      </div>
    </Tilt>
  );
}