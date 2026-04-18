import { Feather, Github, Twitter, Mail } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="font-heading text-3xl font-bold flex items-center gap-3 text-primary">
              <Feather className="h-8 w-8" />
              <span>راوي</span>
            </Link>
            <p className="text-muted-foreground max-w-xs ui-font leading-relaxed">
              منصتكم المتكاملة للإبداع الروائي. ندمج سحر الكلمة العربية مع قوة الذكاء الاصطناعي لنساعدكم في صياغة عوالمكم الخيالية.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg">المنصة</h4>
            <ul className="space-y-2 ui-font text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">الرئيسية</Link></li>
              <li><Link href="/novels" className="text-muted-foreground hover:text-primary transition-colors">المكتبة العامة</Link></li>
              <li><Link href="/signup" className="text-muted-foreground hover:text-primary transition-colors">إنشاء حساب</Link></li>
              <li><Link href="/login" className="text-muted-foreground hover:text-primary transition-colors">تسجيل الدخول</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading font-bold text-lg">روابط قانونية</h4>
            <ul className="space-y-2 ui-font text-sm">
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">شروط الاستخدام</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">سياسة الخصوصية</Link></li>
              <li><Link href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">إخلاء المسؤولية</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground ui-font">
          <p>© {new Date().getFullYear()} راوي AI. جميع الحقوق محفوظة.</p>
          <p className="mt-2 text-xs opacity-50 italic">صُنع بشغف لدعم المحتوى العربي</p>
        </div>
      </div>
    </footer>
  );
}
