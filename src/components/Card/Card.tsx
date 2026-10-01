export type CardProps = {
  name: string;
  paragraph?: string;
};

export const Card = ({ name, paragraph }: CardProps) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{paragraph || "Este é o texto para o card"}</p>
    </div>
  );
};

export default Card;
