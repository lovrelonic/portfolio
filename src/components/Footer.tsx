export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-[#E5E5E5]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-serif text-lg text-[#0A0A0A]">Lovre Lonić</span>
        <p className="text-xs text-[#737373]">
          Klaviyo Email Marketing & Retention Specialist · Shopify DTC Brands
        </p>
        <p className="text-xs text-[#737373]">
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
    </footer>
  );
}
