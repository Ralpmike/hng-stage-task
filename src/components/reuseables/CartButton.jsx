export default function CartButton({ children, onClick, butnType }) {
  return (
    <button
      className={`${
        butnType === "add" ? "button-secondary w-full" : "remove-btn w-full"
      } `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
