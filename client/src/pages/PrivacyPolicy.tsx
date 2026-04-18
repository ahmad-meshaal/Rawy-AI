import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function PrivacyPolicy() {
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
            <Shield className="h-10 w-10" />
            <h1 className="text-4xl font-bold font-heading">سياسة الخصوصية</h1>
          </div>

          <div className="space-y-6 ui-font text-muted-foreground leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">1. مقدمة</h2>
              <p>نحن في "راوي" نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيف نقوم بجمع واستخدام وحماية معلوماتك عند استخدام منصتنا.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">2. البيانات التي نجمعها</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>معلومات الحساب: الاسم، البريد الإلكتروني، وكلمة المرور المشفرة.</li>
                <li>المحتوى الإبداعي: القصص، الشخصيات، والفصول التي تنشئها (تظل ملكاً لك بالكامل).</li>
                <li>بيانات الاستخدام: معلومات حول كيفية تفاعلك مع المنصة لتحسين الخدمة.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">3. كيف نستخدم بياناتك</h2>
              <p>نستخدم بياناتك لتوفير وظائف المنصة، وتخصيص تجربتك، وتحسين مساعد الذكاء الاصطناعي الخاص بنا. نحن لا نبيع بياناتك الشخصية لأطراف ثالثة أبداً.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">4. الذكاء الاصطناعي والبيانات</h2>
              <p>عند استخدام أدوات الذكاء الاصطناعي، يتم إرسال المحتوى (مثل ملخص القصة) إلى شركائنا في معالجة اللغات لتقديم الاقتراحات. هؤلاء الشركاء ملتزمون بمعايير خصوصية صارمة ولا يستخدمون محتواك لتدريب نماذجهم العامة دون إذن.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">5. أمن المعلومات</h2>
              <p>نطبق إجراءات أمنية تقنية وإدارية متقدمة لحماية بياناتك من الوصول غير المصرح به أو التغيير أو الإفصاح.</p>
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
