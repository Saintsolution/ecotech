import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-muted py-10">
    <div className="container grid grid-cols-1 gap-8 md:grid-cols-3">
      <div>
        <span className="font-heading text-xl font-bold text-foreground">
          ECO<span className="text-primary">TECH</span>
        </span>
        <p className="mt-2 font-body text-sm text-muted-foreground">
          Tecnologia HARCAP para filtros de alta performance. Ar e Diesel.
        </p>
      </div>
      <div>
        <h4 className="mb-3 font-heading text-sm font-bold text-foreground">Links</h4>
        <div className="flex flex-col gap-1">
          <Link to="/produtos/ar" className="font-body text-sm text-muted-foreground hover:text-primary">Filtros de Ar</Link>
          <Link to="/produtos/diesel" className="font-body text-sm text-muted-foreground hover:text-primary">Filtros de Diesel</Link>
          <Link to="/parceiro" className="font-body text-sm text-muted-foreground hover:text-primary">Área do Parceiro</Link>
        </div>
      </div>
      <div>
        <h4 className="mb-3 font-heading text-sm font-bold text-foreground">Contato</h4>
        <p className="font-body text-sm text-muted-foreground">contato@Seriotex.com.br</p>
        <p className="font-body text-sm text-muted-foreground">WhatsApp: (19)999311555</p>
      </div>
    </div>
    <div className="container mt-8 border-t border-border pt-4">
      <p className="text-center font-body text-xs text-muted-foreground">
        © 2026 Seriotex. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
