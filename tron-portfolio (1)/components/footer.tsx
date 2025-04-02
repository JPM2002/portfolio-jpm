const Footer = () => {
  return (
    <footer className="py-8 border-t border-[var(--accent)]">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Javier Pozo Miranda. All rights reserved.</p>
        <p className="text-xs text-gray-500 mt-2">Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer

