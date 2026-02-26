import { MessageCircle, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  const openWhatsApp = () => {
    window.open('https://wa.me/6281196969229?text=Halo%20Warung%20Ibu%20Rosi!%20Saya%20mau%20pesan%20makanan.', '_blank');
  };

  return (
    <section id="kontak" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A7C59]/10 text-[#4A7C59] text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            <span>Hubungi Kami</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5D4037] mb-4">
            Ada yang Mau Ditanya?
          </h2>
          <p className="text-[#6B5B4F] max-w-xl mx-auto">
            Mau pesan catering, tanya menu, atau sekadar say hi? 
            Hubungi kami kapan saja, kami siap bantu!
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {/* WhatsApp */}
          <div className="bg-[#F0F7F2] rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-[#5D4037] mb-2">WhatsApp</h3>
            <p className="text-sm text-[#6B5B4F] mb-4">
              Pesan cepat via WhatsApp
            </p>
            <Button
              onClick={openWhatsApp}
              variant="outline"
              className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white w-full"
            >
              <Send className="w-4 h-4 mr-2" />
              Chat Sekarang
            </Button>
          </div>

          {/* Phone */}
          <div className="bg-[#FFF8E7] rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-[#8B5A2B] flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-[#5D4037] mb-2">Telepon</h3>
            <p className="text-sm text-[#6B5B4F] mb-4">
              Hubungi langsung ke warung
            </p>
            <a
              href="tel:081196969229"
              className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg border-2 border-[#8B5A2B] text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              0811-9696-9229
            </a>
          </div>

          {/* Email */}
          <div className="bg-[#e7fffc] rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-[#0078D4] flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-semibold text-[#1B3A57] mb-2">Email</h3>
            <p className="text-sm text-[#4A5D73] mb-4">
              Untuk kerjasama & catering
            </p>
            <a
              href="mailto:muhamadilyassaputra@outlook.co.id"
              className="inline-flex items-center justify-center w-full px-4 py-2 rounded-lg border-2 border-[#0078D4] text-[#1B3A57] hover:bg-[#0078D4] hover:text-white transition-all text-sm"
            >
              <Mail className="w-4 h-4 mr-2" />
              Kirim Email
            </a>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#8B5A2B] to-[#6B4423] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Mampir Yuk ke Warung Ibu Rosi!
          </h3>
          <p className="text-white/90 mb-6 max-w-lg mx-auto">
            Rasakan sendiri kelezatan masakan rumahan kami. 
            Dijamin bikin kangen dan pengen balik lagi!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="bg-white text-[#8B5A2B] hover:bg-[#FFF8E7] px-8 py-5 rounded-xl font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Pesan via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
