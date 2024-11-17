import { Logo } from "../logo/logo";

export function Footer() {
  return (
    <div className="py-8 pl-6 border-t border-neutral-900 mx-auto">
      <div className="mb-5">
        <Logo size={144} />
      </div>
      <div className="text-xs text-neutral-500">
        Copyright © 2024. Todos os direitos reservados
      </div>
    </div>
  );
}
