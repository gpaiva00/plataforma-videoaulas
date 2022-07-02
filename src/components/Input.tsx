export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { type = 'text', placeholder, value, onChange } = props;

  return (
    <input
      className="bg-gray-900 rounded px-5 h-14" 
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}