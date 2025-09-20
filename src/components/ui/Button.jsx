export default function Button({
  as: Comp = "a",
  className = "",
  children,
  ...props
}) {
  const C = Comp;
  return (
    <C className={`btn btn-primary ${className}`} {...props}>
      {children}
    </C>
  );
}
