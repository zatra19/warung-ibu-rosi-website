import { Heart, ChefHat, Users } from 'lucide-react';

export function About() {
  return (
    <section id="tentang" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5A2B]/10 text-[#8B5A2B] text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Cerita Kami</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-[#5D4037] mb-6">
              Tentang Warung Ibu Rosi
            </h2>
            
            <div className="space-y-4 text-[#6B5B4F] leading-relaxed">
              <p>
                Warung Ibu Rosi hadir dari kecintaan kami pada masakan rumahan yang 
                otentik dan penuh kenangan. Berawal dari dapur kecil di rumah, kini 
                kami siap menyajikan hidangan-hidangan favorit keluarga untuk Anda.
              </p>
              <p>
                Setiap hidangan kami masak dengan penuh perhatian, menggunakan 
                bahan-bahan segar dan bumbu pilihan. Tak ada yang lebih memuaskan 
                daripada melihat pelanggan kami pulang dengan perut kenyang dan senyum 
                di wajah.
              </p>
              <p className="font-medium text-[#8B5A2B]">
                "Masakan yang enak itu nggak harus mahal yang penting, bikin kangen!"
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-[#E8DFD0]">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#8B5A2B]">5+</div>
                <div className="text-sm text-[#6B5B4F]">Tahun Berdiri</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#8B5A2B]">15+</div>
                <div className="text-sm text-[#6B5B4F]">Menu Andalan</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#8B5A2B]">1000+</div>
                <div className="text-sm text-[#6B5B4F]">Pelanggan Puas</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            <div className="bg-[#FFF8E7] rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#8B5A2B] flex items-center justify-center flex-shrink-0">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#5D4037] mb-1">Masakan Fresh</h3>
                <p className="text-sm text-[#6B5B4F]">
                  Semua hidangan dimasak fresh setiap hari, nggak ada yang disimpan semalaman.
                </p>
              </div>
            </div>

            <div className="bg-[#F0F7F2] rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#4A7C59] flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#5D4037] mb-1">Bumbu Autentik</h3>
                <p className="text-sm text-[#6B5B4F]">
                  Resep turun-temurun dengan racikan bumbu yang pas, bikin nagih!
                </p>
              </div>
            </div>

            <div className="bg-[#FFF5E6] rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4A574] flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#5D4037] mb-1">Harga Bersahabat</h3>
                <p className="text-sm text-[#6B5B4F]">
                  Porsi besar dengan harga yang nggak bikin kantong bolong.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
