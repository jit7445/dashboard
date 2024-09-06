const Card = ({ title, value, description, color ,textcolor}: any) => {
  return (
    <div className={`p-4 w-full rounded-lg shadow-md  bg-${color}`}>
      <h4 className="text-lg font-bold text-gray-700">{title}</h4>
      <p className="text-3xl  font-bold  text-gray-700">{value}</p>
      <p className={`text-sm text-${textcolor}`}>{description}</p>
    </div>
  );
};

export default Card;
