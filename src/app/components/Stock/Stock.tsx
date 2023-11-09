const Stock = ({ stock }: { stock: number }) => {

  return (
    <p className="self-end text-sm">{stock > 0 ? stock : "Not in Stock"}</p>
  );
};

export default Stock;
