import { Star, Flame } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  isPopular?: boolean;
  isSpicy?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: 'Nasi Goreng Spesial',
    description: 'Nasi goreng dengan telur, ayam suwir, dan sayuran segar. Bumbu rahasia Ibu Rosi!',
    price: 'Rp 18.000',
    isPopular: true,
  },
  {
    name: 'Ayam Goreng Crispy',
    description: 'Ayam goreng renyah dengan sambal terasi dan lalapan segar.',
    price: 'Rp 20.000',
    isPopular: true,
    isSpicy: true,
  },
  {
    name: 'Rendang Daging',
    description: 'Daging sapi empuk dengan bumbu rendang khas Padang yang meresap.',
    price: 'Rp 25.000',
    isPopular: true,
    isSpicy: true,
  },
  {
    name: 'Sayur Asem',
    description: 'Sayur asem segar dengan jagung manis, melinjo, dan kacang tanah.',
    price: 'Rp 12.000',
  },
  {
    name: 'Ikan Bakar Sambal Matah',
    description: 'Ikan bakar juicy dengan sambal matah segar yang menggugah selera.',
    price: 'Rp 28.000',
    isSpicy: true,
  },
  {
    name: 'Tahu Tempe Goreng',
    description: 'Tahu dan tempe goreng renyah, cocok sebagai lauk pendamping.',
    price: 'Rp 8.000',
  },
  {
    name: 'Soto Ayam',
    description: 'Soto ayam hangat dengan kuah bening, suun, dan perasan jeruk nipis.',
    price: 'Rp 15.000',
  },
  {
    name: 'Es Teh Manis',
    description: 'Es teh manis segar, pas buat menemani makan siang Anda.',
    price: 'Rp 5.000',
  },
];

export function Menu() {
  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFF8E7]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B5A2B]/10 text-[#8B5A2B] text-sm font-medium mb-6">
            <Flame className="w-4 h-4" />
            <span>Menu Andalan</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5D4037] mb-4">
            Menu Unggulan Kami
          </h2>
          <p className="text-[#6B5B4F] max-w-2xl mx-auto">
            Pilihan menu favorit pelanggan yang selalu bikin ketagihan. 
            Semua dimasak fresh dengan cinta!
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#E8DFD0]"
            >
              {/* Badges */}
              <div className="flex gap-2 mb-3">
                {item.isPopular && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#8B5A2B] text-white text-xs font-medium">
                    <Star className="w-3 h-3" />
                    Populer
                  </span>
                )}
                {item.isSpicy && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-red-500 text-white text-xs font-medium">
                    <Flame className="w-3 h-3" />
                    Pedas
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="font-semibold text-[#5D4037] text-lg mb-2 group-hover:text-[#8B5A2B] transition-colors">
                {item.name}
              </h3>
              <p className="text-sm text-[#6B5B4F] mb-4 line-clamp-2">
                {item.description}
              </p>
              
              {/* Price */}
              <div className="pt-4 border-t border-[#E8DFD0]">
                <span className="text-xl font-bold text-[#8B5A2B]">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#6B5B4F] bg-white inline-block px-6 py-3 rounded-full">
            Harga dapat berubah sewaktu-waktu. Tanya staf kami untuk menu harian!
          </p>
        </div>
      </div>
    </section>
  );
}
