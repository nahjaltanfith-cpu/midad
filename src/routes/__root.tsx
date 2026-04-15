import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/ContactSection";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold text-gradient-primary">404</h1>
        <h2 className="mt-6 text-2xl font-bold text-foreground">الصفحة غير موجودة</h2>
        <p className="mt-3 text-muted-foreground">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full gradient-primary px-8 py-3 text-sm font-bold text-white shadow-elegant hover:shadow-luxury transition-all duration-400"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "مداد لتمكين الشباب | Midad for Youth Empowerment" },
      { name: "description", content: "جمعية أهلية تُعنى بتمكين الشباب وبناء قدراتهم ليكونوا قادة التغيير الإيجابي في مجتمعاتهم - أبها، منطقة عسير" },
      { name: "author", content: "مداد لتمكين الشباب" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
