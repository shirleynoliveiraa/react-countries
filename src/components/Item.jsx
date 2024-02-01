export default function Item({ children: value = 'Valor', label = 'Name:' }) {
  return (
    <span className="text-sm">
      <strong>{label}</strong> {value}
    </span>
  );
}
