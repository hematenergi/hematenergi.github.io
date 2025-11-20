import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export default function Expertise() {
  const services = [
    {
      title: "Frontend & Mobile Development",
      description: "React, React Native, Expo, Flutter",
      icon: "📱",
    },
    {
      title: "UI/UX & Product Strategy",
      description: "User-centered design and product development",
      icon: "🎨",
    },
    {
      title: "Web3 & Crypto Integrations",
      description: "Solana, Phantom, Bybit API",
      icon: "🔗",
    },
    {
      title: "Teaching & Mentoring",
      description: "Helping young devs build real projects",
      icon: "👨‍🏫",
    },
  ]

  return (
    <section
      className="min-h-screen flex flex-col justify-center py-12 scroll-mt-20"
      id="expertise"
    >
      <h2 className="text-3xl font-bold mb-6">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card
            key={service.title}
            className="group hover:border-primary/30 transition-all"
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{service.icon}</span>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </div>
              <CardDescription className="leading-relaxed">
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
