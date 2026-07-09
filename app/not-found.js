import { redirect } from "next/navigation";

export default function RootNotFound() {
  // أول ما اليوزر يدخل على صفحة مش موجودة (سواء جوه لغة أو بره)
  // الـ Next.js هيرميه هنا، وإحنا هنحوله تلقائياً لصفحة الـ 404 المترجمة ديناميك
  redirect("/404");
}