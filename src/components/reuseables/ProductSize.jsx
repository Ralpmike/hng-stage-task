export default function ProductSize({ size, selected, onClick }) {
  return (
    <div
      className={
        "w-[70px] h-[56px]  flex items-center justify-center cursor-pointer transition-all ease-in rounded-[8px] border-[1px] border-[#DDC596] "
      }
      onClick={onClick}
    >
      <div
        className={`${
          selected
            ? "w-[58px] rounded-[8px] h-[44px] flex items-center justify-center bg-[#DDC596]"
            : ""
        }`}
      >
        {size}
      </div>
    </div>
  );
}
