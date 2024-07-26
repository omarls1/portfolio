import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true, // يتيح الوصول من الشبكة المحلية
    port: 5137, // يمكنك اختيار أي منفذ تريده
    open: true, // يفتح المتصفح تلقائيًا عند تشغيل السيرفر
  },
});
