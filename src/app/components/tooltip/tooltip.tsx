interface TooltipProps {
  children: any;
  tooltipText: string;
}
export default function Tooltip(props: TooltipProps) {
  return (
    <div className="relative group md:w-3/5">
      {props.children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg">
        {props.tooltipText}
      </div>
    </div>
  );
}
