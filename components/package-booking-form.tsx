'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface PackageBookingFormProps {
  packageName: string;
}

export default function PackageBookingForm({ packageName }: PackageBookingFormProps) {
  const [formData, setFormData] = useState({
    packageName,
    fullName: '',
    email: '',
    phone: '',
    adults: 1,
    children: 0,
    departureDate: '',
    returnDate: '',
    requests: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/package-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          ...formData,
          fullName: '',
          email: '',
          phone: '',
          adults: 1,
          children: 0,
          departureDate: '',
          returnDate: '',
          requests: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  if (status === 'success') {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-green-800">تم إرسال طلبك!</h3>
            <p className="text-green-700 mt-2 max-w-md">شكرًا لتواصلك معنا. سنقوم بالرد على طلبك في أقرب وقت ممكن.</p>
            <Button 
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setStatus('idle')}
            >
              إرسال طلب آخر
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium">
              الاسم الكامل
            </label>
            <input
              id="fullName"
              className="w-full p-2 border rounded-md"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              البريد الإلكتروني
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              رقم الهاتف
            </label>
            <input
              id="phone"
              className="w-full p-2 border rounded-md"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="adults" className="text-sm font-medium">
                عدد البالغين
              </label>
              <input
                id="adults"
                type="number"
                min="1"
                className="w-full p-2 border rounded-md"
                value={formData.adults}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="children" className="text-sm font-medium">
                عدد الأطفال
              </label>
              <input
                id="children"
                type="number"
                min="0"
                className="w-full p-2 border rounded-md"
                value={formData.children}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="departureDate" className="text-sm font-medium">
                تاريخ السفر
              </label>
              <input
                id="departureDate"
                type="date"
                className="w-full p-2 border rounded-md"
                value={formData.departureDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="returnDate" className="text-sm font-medium">
                تاريخ العودة
              </label>
              <input
                id="returnDate"
                type="date"
                className="w-full p-2 border rounded-md"
                value={formData.returnDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="requests" className="text-sm font-medium">
              طلبات خاصة
            </label>
            <textarea
              id="requests"
              rows={3}
              className="w-full p-2 border rounded-md"
              value={formData.requests}
              onChange={handleChange}
            ></textarea>
          </div>

          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3 flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
              <p className="text-red-700 text-sm">حدثت مشكلة أثناء إرسال طلبك. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة عبر الهاتف.</p>
            </div>
          )}

          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                جاري الإرسال...
              </>
            ) : (
              'إرسال الطلب'
            )}
          </Button>
        </form>

        <div className="pt-4 border-t">
          <p className="text-sm text-gray-500 mb-2">هل تحتاج إلى مساعدة؟</p>
          <div className="flex items-center gap-2 text-blue-600">
            <Phone className="h-4 w-4" />
            <span>+966 510 490 506</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 