import { Button } from '@/components/ui/button';
import { MapPin, Utensils } from 'lucide-react';

export function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openMaps = () => {
    window.open('https://maps.app.goo.gl/hpvimRVuduEA5Pei9', '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8E7] via-[#FFF5E0] to-[#F5EBD7]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#8B5A2B] blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#4A7C59] blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#D4A574] blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A7C59]/10 text-[#4A7C59] text-sm font-medium mb-6">
          <Utensils className="w-4 h-4" />
          <span>Masakan Rumahan Favorit</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#5D4037] mb-4 tracking-tight">
          Warung Ibu Rosi
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-[#8B5A2B] font-medium mb-3">
          Masakan Rumahan, Rasa Bikin Kangen
        </p>
        <p className="text-base sm:text-lg text-[#6B5B4F] max-w-xl mx-auto mb-10">
          Nikmati hidangan homemade dengan bumbu autentik dan porsi yang mengenyangkan. 
          Pas buat makan siang atau malam bareng keluarga!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToMenu}
            size="lg"
            className="bg-[#8B5A2B] hover:bg-[#6B4423] text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#8B5A2B]/20 transition-all hover:scale-105 w-full sm:w-auto"
          >
            <Utensils className="w-5 h-5 mr-2" />
            Lihat Menu
          </Button>
          <Button
            onClick={openMaps}
            size="lg"
            variant="outline"
            className="border-2 border-[#4A7C59] text-[#4A7C59] hover:bg-[#4A7C59] hover:text-white px-8 py-6 text-lg rounded-xl transition-all hover:scale-105 w-full sm:w-auto"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Buka di Google Maps
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-[#6B5B4F]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Buka Hari Ini</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#8B5A2B]" />
            <span>Harga Terjangkau</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4A7C59]" />
            <span>Fresh Setiap Hari</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FFF8E7] to-transparent" />
    </section>
  );
}
