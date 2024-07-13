export default function ProductColor({ color, selected, onClick }) {
  return (
    <div
      className={` ${
        selected
          ? "w-10 h-10 flex justify-center items-center cursor-pointer transition-all ease-in rounded-full border-[1px] border-[#DDC596] "
          : ""
      }`}
      onClick={onClick}
    >
      <div
        className="w-8 h-8 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}
