import { motion } from 'motion/react';
import { Database, Globe, Lock, Server, CheckCircle2 } from 'lucide-react';

export const Services = () => {
  const detailedServices = [
    {
      title: 'NAS & Backup Solutions',
      icon: Database,
      features: [
        'Professional deployment of Synology, UGREEN, and other brands',
        'Advanced RAID configuration for data redundancy',
        'Automated local and off-site backup strategies',
        'Cloud synchronization and hybrid storage setups',
        'Granular user permissions and access control',
      ],
      description: 'Your data is your most valuable asset. We ensure it is stored securely, backed up reliably, and accessible when you need it.',
    },
    {
      title: 'Domain & Identity Management',
      icon: Globe,
      features: [
        'Windows Server and Active Directory integration',
        'Domain controller setup and maintenance',
        'Group Policy Object (GPO) management',
        'Secure multi-factor authentication (MFA)',
        'Centralized user and device management',
      ],
      description: 'Streamline your business operations with centralized identity management that grows with your team.',
    },
    {
      title: 'Secure VPN & Remote Access',
      icon: Lock,
      features: [
        'Enterprise-grade VPN deployment',
        'Secure remote workforce connectivity',
        'Next-generation firewall configuration',
        'Network segmentation and security auditing',
        'Encrypted data transit for remote users',
      ],
      description: 'Enable your team to work from anywhere securely without exposing your internal network to threats.',
    },
    {
      title: 'Network & Infrastructure',
      icon: Server,
      features: [
        'High-performance router and switch configuration',
        'VLAN setup for traffic isolation',
        'Wi-Fi optimization and heatmapping',
        'Proactive 24/7 network monitoring',
        'Hardware lifecycle management',
      ],
      description: 'Build a solid foundation for your business with a network that is fast, reliable, and secure by design.',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-accent">Services</span>
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We provide professional IT infrastructure solutions designed for small and mid-sized businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-1/2">
                <div className="p-10 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <service.icon className="w-32 h-32 text-accent" />
                  </div>
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-8">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                  <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 to-transparent border border-white/10 flex items-center justify-center">
                  <service.icon className="w-48 h-48 text-accent/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
