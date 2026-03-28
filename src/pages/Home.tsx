import { motion } from 'motion/react';
import { Shield, Database, Globe, Lock, Server, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-bold mb-6 tracking-wider uppercase">
              Enterprise IT Made Simple
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Reliable IT & <span className="text-accent">NAS Solutions</span> for Growing Businesses
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Secure. Scalable. Professionally Managed. We bring enterprise-grade infrastructure to small and mid-sized businesses without the complexity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-accent/20 flex items-center justify-center"
              >
                Get a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesPreview = () => {
  const services = [
    {
      title: 'NAS & Backup Solutions',
      description: 'Professional deployment of Synology, UGREEN and other popular brand NAS systems with RAID, automated backups, and cloud sync.',
      icon: Database,
    },
    {
      title: 'Domain & Identity Management',
      description: 'Active Directory setup, domain controller configuration, group policies, and secure authentication for your workforce.',
      icon: Globe,
    },
    {
      title: 'Secure VPN & Remote Access',
      description: 'Business VPN deployment, secure remote workforce access, firewall configuration, and network segmentation.',
      icon: Lock,
    },
    {
      title: 'Network & Infrastructure',
      description: 'Router & switch setup, VLAN configuration, performance optimization, and proactive monitoring & maintenance.',
      icon: Server,
    },
  ];

  return (
    <section className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to protect your data and optimize your business operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-all group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <service.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    'Personalized IT solutions',
    'Small business focused',
    'Secure by design',
    'Scalable infrastructure',
    'Local & remote support',
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose ShivArmor?</h2>
            <div className="space-y-6">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center space-x-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-lg text-gray-300 font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
               <Shield className="w-32 h-32 text-accent/20" />
               <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 blur-2xl rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative p-12 md:p-20 rounded-[2.5rem] bg-accent overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Let’s Build Your IT Infrastructure the Right Way.
            </h2>
            <Link
              to="/contact"
              className="inline-block bg-white text-accent hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <CTA />
    </>
  );
};
