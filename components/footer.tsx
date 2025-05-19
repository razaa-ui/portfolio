export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 lg:px-16 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Muhmamad Raza. All rights reserved.</p>
        <p className="text-gray-500 text-sm mt-2">Video Editor & Graphic Designer</p>
      </div>
    </footer>
  )
}
