interface IconsProps {
  icone: any;
  texto?: string;
}

export function Icons(props: IconsProps) {
  return (
    <div className="flex gap-1 bg-[#0a0f26] rounded-full px-4 py-2 text-sm">
      <span>{props.icone}</span>
      <span>{props.texto}</span>
    </div>
  );
}
