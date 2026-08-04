
interface Props{
     item:{
    icon:React.ReactNode;
    title:string;
    description:string
     }
}

const AboutCard = ({item}:Props) => {
  return (
    <div className="flex flex-col gap-6 items-center text-center cursor-pointer">
    <span className="text-6xl text-orange-500 font-bold">{item.icon}</span>
      <h1 className="text-3xl font-bold dark:text-white">{item.title}</h1>
    <p className="text-gray-600 dark:text-gray-200 p-5">{item.description}</p>
    </div>
  )
}

export default AboutCard
