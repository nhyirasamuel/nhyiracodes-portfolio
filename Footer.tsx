const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {CURRENT_YEAR} NhyiraCodes. All rights reserved.</p>
      <p>
        Built with{" "}
        <span className="text-brand-yellow font-medium">React</span> &amp;{" "}
        <span className="text-brand-blue font-medium">TypeScript</span>
      </p>
    </div>
  </footer>
);

export default Footer;
