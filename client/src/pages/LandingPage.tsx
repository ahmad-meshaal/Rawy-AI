import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Feather, Book, Users, Zap, Shield, Sparkles } from "lucide-react";

export default function LandingPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary font-heading text-2xl font-bold">
            <Feather className="h-6 w-6" />
            <span>راوي</span>
          </div>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="ghost">تسجيل الدخول</Button>
            </Link>
            <Link href="/signup">
              <Button>ابدأ مجاناً</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold ui-font">
                  <Sparkles className="h-4 w-4" />
                  <span>ثورة في عالم الكتابة العربية</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
                  اكتب روايتك <span className="text-primary italic">بذكاء</span> وإبداع
                </h1>
                <p className="text-xl text-muted-foreground ui-font leading-relaxed">
                  راوي هو المنصة الأولى التي تدمج أدوات التخطيط الاحترافية مع قوة الذكاء الاصطناعي لمساعدة الكتاب العرب في صياغة قصص ملهمة.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/signup">
                    <Button size="lg" className="px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20">
                      ابدأ مشروعك الأول الآن
                    </Button>
                  </Link>
                  <Link href="/novels">
                    <Button size="lg" variant="outline" className="px-8 h-14 text-lg">
                      تصفح المكتبة العامة
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-card">
                  <img 
                    src="/hero.png" 
                    alt="Rawi Landing Hero" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Stats Card - Arabic UI */}
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border hidden md:block animate-bounce-slow">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-500/10 rounded-full">
                      <Zap className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">10K+</div>
                      <div className="text-xs text-muted-foreground ui-font">فصل تم كتابته</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold font-heading">لماذا تختار راوي؟</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto ui-font">نحن نوفر لك كل ما تحتاجه للتركيز على شيء واحد: الإبداع.</p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { 
                icon: <Book className="h-8 w-8 text-primary" />, 
                title: "إدارة الفصول", 
                description: "نظم هيكل روايتك وفصولها بمرونة عالية مع واجهة كتابة خالية من المشتتات."
              },
              { 
                icon: <Users className="h-8 w-8 text-primary" />, 
                title: "تطوير الشخصيات", 
                description: "بناء ملفات شخصية عميقة تتضمن السمات، الأهداف، والعلاقات المعقدة."
              },
              { 
                icon: <Sparkles className="h-8 w-8 text-primary" />, 
                title: "مساعد الذكاء الاصطناعي", 
                description: "تجاوز قفلة الكاتب مع اقتراحات ذكية للحبكة وبناء المشاهد."
              },
              { 
                icon: <Shield className="h-8 w-8 text-primary" />, 
                title: "خصوصية وأمان", 
                description: "قصصك ملكك وحدك. نحن نضمن حماية كاملة لمحتواك الإبداعي."
              },
              { 
                icon: <Zap className="h-8 w-8 text-primary" />, 
                title: "نشر وتفاعل", 
                description: "شارك أفضل أعمالك مع المجتمع واحصل على تعليقات وإعجابات من القراء."
              },
              { 
                icon: <Feather className="h-8 w-8 text-primary" />, 
                title: "تصدير احترافي", 
                description: "حول مسودتك إلى ملفات جاهزة للنشر الورقي أو الإلكتروني بضغطة زر."
              }
            ].map((feature, i) => (
              <motion.div key={i} variants={item} className="p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group">
                <div className="mb-4 bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground ui-font text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary rounded-3xl p-12 overflow-hidden relative shadow-2xl shadow-primary/30">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Feather className="h-64 w-64 text-white" />
              </div>
              <div className="relative z-10 text-center space-y-8 flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white font-heading">هل أنت مستعد لمشاركة عالمك؟</h2>
                <p className="text-primary-foreground/80 text-lg max-w-xl ui-font">
                  انضم إلى آلاف الكتاب الذين وجدوا في راوي رفيقهم الأمثل في رحلة الكتابة.
                </p>
                <Link href="/signup">
                  <Button size="lg" variant="secondary" className="px-10 h-16 text-xl font-bold hover:scale-105 transition-transform">
                    سجل حسابك المجاني الآن
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
