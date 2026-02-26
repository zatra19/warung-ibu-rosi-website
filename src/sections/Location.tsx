import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Location() {
  const openMaps = () => {
    window.open('https://maps.app.goo.gl/hpvimRVuduEA5Pei9', '_blank');
  };

  return (
    <section id="lokasi" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF8E7]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5A2B]/10 text-[#8B5A2B] text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            <span>Lokasi Kami</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5D4037] mb-4">
            Gampang Ditemukan!
          </h2>
          <p className="text-[#6B5B4F] max-w-xl mx-auto">
            Warung Ibu Rosi berada di lokasi strategis yang mudah dijangkau. 
            Klik tombol di bawah untuk petunjuk arah.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#E8DFD0]">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59127.48686161193!2d106.8971796056234!3d-6.925918577896944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6849f77a365a15%3A0x7534d381c5e050dc!2sWarung%20Ibu%20Rosi!5e0!3m2!1sen!2sid!4v1772004719960!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Warung Ibu Rosi"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E8DFD0] h-full">
              <h3 className="font-semibold text-[#5D4037] text-xl mb-6">
                Informasi Lokasi
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#8B5A2B]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#8B5A2B]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#5D4037] mb-1">Alamat</p>
                    <p className="text-sm text-[#6B5B4F]">
                      Jl. Bojonggaling km.1,
                      <br />
                      Gang Kp. Liung Tutut,
                      <br />
                      Kec. Kebonpedes, 
                      <br />
                      Kab. Sukabumi
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4A7C59]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#4A7C59]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#5D4037] mb-1">Jam Buka</p>
                    <p className="text-sm text-[#6B5B4F]">
                      Senin - Minggu
                      <br />
                      08.00 - 21.00 WIB
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D4A574]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#D4A574]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#5D4037] mb-1">Telepon</p>
                    <p className="text-sm text-[#6B5B4F]">
                      0811-9696-9229
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                onClick={openMaps}
                className="w-full mt-6 bg-[#4A7C59] hover:bg-[#3A6C49] text-white py-5 rounded-xl transition-all hover:scale-[1.02]"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Petunjuk Arah
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
