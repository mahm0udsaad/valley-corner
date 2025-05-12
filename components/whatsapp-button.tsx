export default function WhatsAppButton() {
  const phoneNumber = '966510490506'
  const whatsappUrl = `https://wa.me/${phoneNumber}`
  const WhatsAppIcon = () => (
    <svg
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="w-6 h-6"
    >
      <path
        fill="currentColor"
        d="m60.359 160.867 2.894-5.256a6.003 6.003 0 0 0-4.284-.581l1.39 5.837ZM22 170l-5.837-1.39a6.002 6.002 0 0 0 7.227 7.227L22 170Zm9.133-38.359 5.837 1.39a6.001 6.001 0 0 0-.581-4.284l-5.256 2.894ZM96 176c44.183 0 80-35.817 80-80h-12c0 37.555-30.445 68-68 68v12Zm-38.535-9.877C68.9 172.42 82.04 176 96 176v-12c-11.884 0-23.04-3.043-32.747-8.389l-5.788 10.512Zm-34.075 9.714 38.358-9.133-2.78-11.674-38.358 9.133 2.78 11.674Zm1.906-45.585-9.133 38.358 11.674 2.78 9.133-38.359-11.674-2.779ZM16 96c0 13.959 3.58 27.1 9.877 38.535l10.512-5.788C31.043 119.039 28 107.884 28 96H16Zm80-80c-44.183 0-80 35.817-80 80h12c0-37.555 30.445-68 68-68V16Zm80 80c0-44.183-35.817-80-80-80v12c37.555 0 68 30.445 68 68h12Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M103 130H76V96h27c9.389 0 17 7.611 17 17s-7.611 17-17 17Zm-2-34H76V62h25c9.389 0 17 7.611 17 17s-7.611 17-17 17Z"
      />
    </svg>
  )

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon  />
      <span className="absolute right-16 bg-white text-green-600 px-4 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  )
} 