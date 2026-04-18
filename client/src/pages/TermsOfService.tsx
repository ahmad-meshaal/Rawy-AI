import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function TermsOfService() {
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
            <FileText className="h-10 w-10" />
            <h1 className="text-4xl font-bold font-heading">شروط الاستخدام</h1>
          </div>

          <div className="space-y-6 ui-font text-muted-foreground leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">1. الموافقة على الشروط</h2>
              <p>باستخدامك لمنصة "راوي"، فإنك توافق على الالتزام بشروط الاستخدام الموضحة هنا. إذا كنت لا توافق على أي من هذه الشروط، فيرجى التوقف عن استخدام المنصة.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">2. الملكية الفكرية للمحتوى</h2>
              <p>أنت تحتفظ بكامل حقوق الملكية الفكرية لجميع القصص والنصوص التي تنشئها عبر المنصة. "راوي" لا تدعي أي ملكية لمحتواك الإبداعي.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">3. مسؤولية الحساب</h2>
              <p>أنت مسؤول عن الحفاظ على سرية معلومات حسابك وعن جميع الأنشطة التي تحدث من خلاله. يجب عليك إخطارنا فوراً بأي استخدام غير مصرح به.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">4. الاستخدام المقبول</h2>
              <p>يُمنع استخدام المنصة لإنشاء أو نشر محتوى يحرض على الكراهية، أو العنف، أو ينتهك حقوق الآخرين، أو يخالف القوانين المحلية والدولية.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">5. إنهاء الخدمة</h2>
              <p>نحتفظ بالحق في تعليق أو إنهاء وصولك إلى المنصة في حال انتهاكك لهذه الشروط، مع بذل الجهود الممكنة لإعلامك مسبقاً.</p>
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
