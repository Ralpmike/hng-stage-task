export default function CartButton({ children, onClick }) {
  return (
    <button className="button-secondary" onClick={onClick}>
      {children}
    </button>
  );
}
