import { Heart, Instagram, Facebook, Utensils } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#5D4037] text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#8B5A2B] flex items-center justify-center">
                <Utensils className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Warung Ibu Rosi</span>
            </div>
            <p className="text-white/70 mb-6 max-w-sm">
              Masakan rumahan dengan rasa yang bikin kangen. 
              Fresh, enak, dan harga bersahabat untuk semua.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B5A2B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B5A2B] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Menu Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('tentang')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('lokasi')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Lokasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('kontak')}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-white/70">
              <li>Jl. Bojonggaling Km.1</li>
              <li>Kec. Kebonpedes, Kab. Sukabumi</li>
              <li>0811-9696-9229</li>
              <li>warung.iburosi@email.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-white/60 text-sm">
              © {currentYear} Warung Ibu Rosi. All rights reserved.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-1">
              Dibuat dengan <Heart className="w-4 h-4 text-red-400 fill-red-400" /> untuk keluarga Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
