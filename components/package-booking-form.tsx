'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslate } from '@/lib/i18n-client';

interface PackageBookingFormProps {
  packageName: string;
}

export default function PackageBookingForm({ packageName }: PackageBookingFormProps) {
  const { t } = useTranslate();
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
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-green-800">{t('packages.inquirySent')}</h3>
            <p className="text-green-700 mt-2 max-w-md">{t('packages.inquirySentDescription')}</p>
            <Button 
              className="mt-6"
              onClick={() => setStatus('idle')}
            >
              {t('packages.sendAnotherInquiry')}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <h3 className="text-xl font-bold">{t('packages.bookPackage')}</h3>
        <p className="text-gray-600">{t('packages.bookingDescription')}</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium">
              {t('contact.form.name')}
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
              {t('contact.form.email')}
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
              {t('contact.form.phone')}
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
                {t('packages.adults')}
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
                {t('packages.children')}
              </label>
              <input
                id="children"
                type="number"
                min="0"
                className="w-full p-2 border rounded-md"
                value={formData.children}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="departureDate" className="text-sm font-medium">
              {t('packages.departureDate')}
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
              {t('packages.returnDate')}
            </label>
            <input
              id="returnDate"
              type="date"
              className="w-full p-2 border rounded-md"
              value={formData.returnDate}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="requests" className="text-sm font-medium">
              {t('packages.specialRequests')}
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
              <p className="text-red-700 text-sm">{t('packages.errorMessage')}</p>
            </div>
          )}

          <Button
            className="w-full"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t('general.sending')}
              </>
            ) : (
              t('packages.submitInquiry')
            )}
          </Button>
        </form>

        <div className="pt-4 border-t">
          <p className="text-sm text-gray-500 mb-2">{t('packages.needHelp')}</p>
          <div className="flex items-center gap-2 text-blue-600">
            <Phone className="h-4 w-4" />
            <span>+966 510 490 506</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 