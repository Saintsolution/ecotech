import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Joga o scroll para o topo (X: 0, Y: 0)
    window.scrollTo(0, 0);
  }, [pathname]); // Executa toda vez que o caminho da URL mudar

  return null; // Este componente não renderiza nada visualmente
};

export default ScrollToTop;