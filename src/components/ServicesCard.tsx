interface PropsType {
    icon: React.ReactNode;
    title: string;
    desc: string;
  }
  
  const ServicesCard = ({ icon, title, desc }: PropsType) => {
    return (
      <div>
        <div className="flex flex-col items-center justify-center">{icon}</div>
        <div className="text-accent">{icon}</div>
        <h2 className="text-xl font-medium mt-4 mb-2">{title}</h2>
        <p className="text-gray-500">{desc}</p>
      </div>
    );
  }
  
  export default ServicesCard;
  