import Link from "next/link";
import { ContainerHeader } from "../../app/styles-components";

export const Header = () => {
  return (
    <ContainerHeader>
      <div>
        <input type="text" placeholder="Qual o filme?" />
        <button>Pesquisar</button>
      </div>

      <nav>
        <ul>
          <li>
            <Link className="link-header" href="/sobrenos">
              Sobre nós
            </Link>
          </li>
          <li>
            <Link className="link-header" href="/series">
              Series
            </Link>
          </li>
        </ul>
      </nav>
    </ContainerHeader>
  );
};
