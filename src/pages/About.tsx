import { motion } from 'motion/react';
import { Shield, Target, Users, Award } from 'lucide-react';

export const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              About <span className="text-accent">ShivArmor</span>
            </h1>
            <p className="text-xl text-gray-400 mb-6 leading-relaxed">
              ShivArmor IT Solutions provides professional IT infrastructure solutions designed for small and mid-sized businesses. We specialize in secure storage, network design, and enterprise-grade system deployment — without enterprise complexity.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Our mission is to empower small businesses with the same level of security and reliability that large corporations enjoy, tailored to their specific needs and budget.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
               <Shield className="w-48 h-48 text-accent/10" />
               <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent" />
            </div>
          </motion.div>
        </div>


        {/* Values Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-400">The principles that guide everything we do.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Security First',
                description: 'We believe security shouldn\'t be an afterthought. Every solution we deploy is secure by design.',
                icon: Shield,
              },
              {
                title: 'Simplicity',
                description: 'We take complex enterprise technology and make it simple and manageable for your business.',
                icon: Target,
              },
              {
                title: 'Reliability',
                description: 'Your business depends on IT. We build infrastructure that you can trust 24/7.',
                icon: Award,
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
