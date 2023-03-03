type Props = {
  text: string;
};

const Title = ({ text }: Props) => {
  return (
    <p className="py-4 text-xl md:text-2xl lg:text-3xl text-red-500 ">{text}</p>
  );
};

export default Title;
