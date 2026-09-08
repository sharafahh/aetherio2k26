import { redirect } from 'next/navigation';
import { GOOGLE_FORM_REGISTRATION_URL } from '@/lib/data/events';

export const metadata = {
  title: "Register | AETHERION'26 Symposium",
  description: "We are excited to welcome you to the symposium, with cash awards for the winners.",
};

export default function RegisterPage() {
  redirect(GOOGLE_FORM_REGISTRATION_URL);
}
