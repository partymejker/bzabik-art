export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="BZABIK.ART home">
        BZABIK<span>.ART</span>
      </a>
      <button className="menu-trigger" type="button" aria-label="Menu">
        <span>MENU</span><i aria-hidden="true" />
      </button>
    </header>
  );
}
