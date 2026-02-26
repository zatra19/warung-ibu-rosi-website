import { Clock, CheckCircle2, XCircle } from 'lucide-react';

interface DaySchedule {
  day: string;
  hours: string;
  isOpen: boolean;
}

const schedule: DaySchedule[] = [
  { day: 'Senin', hours: '08.00 - 21.00', isOpen: true },
  { day: 'Selasa', hours: '08.00 - 21.00', isOpen: true },
  { day: 'Rabu', hours: '08.00 - 21.00', isOpen: true },
  { day: 'Kamis', hours: '08.00 - 21.00', isOpen: true },
  { day: 'Jumat', hours: '08.00 - 21.00', isOpen: true },
  { day: 'Sabtu', hours: '08.00 - 22.00', isOpen: true },
  { day: 'Minggu', hours: '08.00 - 22.00', isOpen: true },
];

export function Hours() {
  const today = new Date().getDay();
  const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const todayName = dayNames[today];
  const todaySchedule = schedule.find(s => s.day === todayName);

  return (
    <section id="jam-buka" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A7C59]/10 text-[#4A7C59] text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            <span>Jam Operasional</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-[#5D4037] mb-4">
            Kapan Saja Bisa Mampir!
          </h2>
          <p className="text-[#6B5B4F] max-w-xl mx-auto">
            Kami buka setiap hari dengan jam operasional yang fleksibel. 
            Silakan mampir kapan saja!
          </p>
        </div>

        {/* Today's Status */}
        <div className="bg-gradient-to-r from-[#4A7C59] to-[#5A8C69] rounded-2xl p-6 mb-8 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-white/80 text-sm mb-1">Hari Ini - {todayName}</p>
              <p className="text-2xl font-bold">
                {todaySchedule?.isOpen ? 'Buka' : 'Tutup'}
              </p>
              <p className="text-white/90">
                {todaySchedule?.hours}
              </p>
            </div>
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              {todaySchedule?.isOpen ? (
                <CheckCircle2 className="w-8 h-8 text-white" />
              ) : (
                <XCircle className="w-8 h-8 text-white" />
              )}
            </div>
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="bg-[#FFF8E7] rounded-2xl p-6">
          <h3 className="font-semibold text-[#5D4037] mb-4 text-center">
            Jadwal Lengkap
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {schedule.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-xl ${
                  item.day === todayName
                    ? 'bg-[#8B5A2B] text-white'
                    : 'bg-white text-[#5D4037]'
                }`}
              >
                <span className="font-medium">{item.day}</span>
                <span className={item.day === todayName ? 'text-white/90' : 'text-[#6B5B4F]'}>
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#6B5B4F]">
            Jam operasional dapat berubah saat hari libur nasional.
          </p>
        </div>
      </div>
    </section>
  );
}
