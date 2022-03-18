import Link from 'next/link';
import { headerDark, headerStyles } from '../styles/headerStyle';
import MenuButton from './MenuButton';

export default function Header() {
  return (
    <header css={[headerStyles, headerDark]}>
      <nav class="flexbox">
        <div class="headerImg">
          <img alt="page logo" src="favicon.svg" />
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>Profession</a>
            </Link>
          </li>
          <li>
            <Link href="/passion">
              <a>Passion</a>
            </Link>
          </li>
          <li>
            <Link href="/sport">
              <a>Sport</a>
            </Link>
          </li>
          <li>
            <MenuButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
