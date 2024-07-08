export default function CartButton({ children, onClick }) {
  return (
    <button className="button-secondary w-full" onClick={onClick}>
      {children}
    </button>
  );
}
