import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: "#48c3e58f" }}>

      {/* Imagen de fondo para PC (cuando esté en desktop o cuando el móvil esté en orientación horizontal) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden md:block landscape:block">
        <Image
          src="/pjInvitacion2.jpg" // Imagen para PC
          alt="Fondo"
          fill
          className="max-w-full max-h-screen object-contain opacity-80 pointer-events-none"
          priority
        />
      </div>

      {/* Imagen de fondo para móvil en orientación vertical */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none block md:hidden">
        <Image
          src="/pjInvitacion5.jpg" // Imagen para móviles
          alt="Fondo Móvil"
          width={800}
          height={1920}
          className="max-w-full max-h-screen object-contain opacity-80 pointer-events-none"
          priority
        />
      </div>

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start mt-8">

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
                href="/inscripcion"
                className="rounded-full border border-transparent bg-green-700 text-white flex items-center justify-center gap-2 font-semibold text-sm sm:text-base h-12 sm:h-14 px-8 sm:px-10 sm:w-auto shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-800"
              >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Inscríbete ya !! 
          </Link>
        </div>
      </main>
      
      <footer className="row-start-3 w-full bg-white backdrop-blur-sm py-4 px-6 rounded-xl shadow-lg flex gap-[24px] flex-wrap items-center justify-center z-10 relative">

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.facebook.com/espiritusanto.asuncion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/facebook.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          espiritusanto.asuncion
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/7doneses?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/instagram.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          @7doneses
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://maps.app.goo.gl/HepFbB2hfoV4wy8Y8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/maps.gif"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Ubicación
        </a>
      </footer>

    </div>

    </div>
  );
}
