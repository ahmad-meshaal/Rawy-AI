import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <nav className="border-b bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary font-heading text-2xl font-bold">
            <span>راوي</span>
          </Link>
          <Link href="/">
            <Button variant="ghost">العودة للرئيسية</Button>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm space-y-8"
        >
          <div className="flex items-center gap-4 text-primary border-b border-border pb-6">
            <AlertTriangle className="h-10 w-10" />
            <h1 className="text-4xl font-bold font-heading">إخلاء المسؤولية</h1>
          </div>

          <div className="space-y-6 ui-font text-muted-foreground leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">1. دقة المعلومات (الذكاء الاصطناعي)</h2>
              <p>يتم تقديم الاقتراحات والنصوص المولدة عبر المنصة بواسطة تقنيات الذكاء الاصطناعي. رغم تقدم هذه التقنيات، إلا أنها قد تولد أحياناً معلومات غير دقيقة، أو متناقضة، أو غير ملائمة. لا تتحمل "راوي" مسؤولية أي محتوى يتم توليده آلياً.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">2. الاستخدام على مسؤولية المستخدم</h2>
              <p>استخدامك للمنصة وأي مخرجات منها هو على مسؤوليتك الشخصية. لا نضمن أن المخرجات ستكون دقيقة أو موثوقة دائماً.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">3. توفر الخدمة</h2>
              <p>بينما نسعى جاهدين لضمان بقاء المنصة متاحة طوال الوقت، إلا أننا لا نضمن عدم حدوث انقطاعات تقنية أو توقف للخدمة لأغراض الصيانة أو لأعطال فنية خارجة عن إرادتنا.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">4. روابط الأطراف الثالثة</h2>
              <p>قد تحتوي المنصة على روابط لمواقع خارجية. "راوي" غير مسؤولة عن محتوى أو ممارسات الخصوصية لهذه المواقع.</p>
            </section>

            <section className="space-y-3 pt-8 border-t border-border text-sm italic">
              <p>آخر تحديث: 18 أبريل 2026</p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
