interface PlaceholderProps {
  text: string;
  icon: React.ReactElement;
}

export function Placeholder(props: PlaceholderProps) {
  const { text, icon } = props;

  return (
    <div className="flex flex-1 justify-center items-center">
      <span className="flex items-center text-gray-300 text-2xl">
        {icon && icon}
        {text}
      </span>
    </div>
  )
}