import Link from "next/link";
import { brand, developer } from "@/config/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-brand">{brand.name}</p>
          <p>{brand.fictionalNotice}</p>
        </div>
        <div className="footer-meta">
          <p>
            Signé {developer.name} — {developer.baseline}
          </p>
          <p>
            <Link href="/credits">Crédits photographiques</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
