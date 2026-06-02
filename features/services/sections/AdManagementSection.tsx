import {
  BookOpen,
  Camera,
  MessageSquare,
  Search,
  MapPin,
  BarChart2,
  Globe,
  Map,
  type LucideIcon,
} from 'lucide-react';
import { AD_SERVICES } from '@/data/servicesText';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Camera,
  MessageSquare,
  Search,
  MapPin,
  BarChart2,
  Globe,
  Map,
};

export default function AdManagementSection() {
  return (
    <section className="section-padding bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            광고 운영 · 사후관리 시스템
          </h2>
          <p className="text-slate-400 mt-3 text-sm">
            홈페이지 제작 이후에도 함께합니다
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {AD_SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.title}
                className="card-base p-6 flex flex-col items-center gap-3 text-center"
              >
                {Icon && (
                  <div className="w-12 h-12 rounded-xl gradient-blue flex items-center justify-center">
                    <Icon size={22} className="text-white" />
                  </div>
                )}
                <span className="text-slate-200 text-sm font-medium">{service.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
