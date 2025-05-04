import { FC } from "react";
import { FaDownload, FaLock, FaBolt } from "react-icons/fa";

const features = [
    {
        Icon: FaBolt,
        title: "Innovation",
        subtitle: "Fresh takes on presentation and organization for rapid mastery.",
        color: "text-teal-600",
    },
    {
        Icon: FaDownload,
        title: "Offline-First",
        subtitle: "All content ships complete—learn anywhere, no network needed.",
        color: "text-slate-800",
    },
    {
        Icon: FaLock,
        title: "Perfect Privacy",
        subtitle: "We collect nothing, show no ads, and never interrupt your focus.",
        color: "text-amber-700",
    },
];

export const WhySection: FC = () => (
    <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-12">Why Corpora?</h2>

            <div className="flex flex-col sm:flex-row justify-between gap-12">
                {features.map(({ Icon, title, subtitle, color }) => (
                    <div key={title} className="flex-1 flex flex-col items-center">
                        <Icon size={48} className={color} />
                        <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
                        <p className="mt-2 text-gray-700">{subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
