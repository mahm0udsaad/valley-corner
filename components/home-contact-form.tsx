'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export default function HomeContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 -mr-12 -mt-12 bg-green-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 -ml-10 -mb-10 bg-green-100 rounded-full opacity-30"></div>
        
        <div className="flex flex-col items-center justify-center py-10 text-center relative">
          <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
          <h3 className="text-2xl font-bold text-green-800">تم إرسال الرسالة!</h3>
          <p className="text-green-700 mt-2 max-w-md text-lg">شكرًا للتواصل معنا. لقد استلمنا رسالتك وسنرد عليك في أقرب وقت ممكن.</p>
          <Button 
            className="mt-8 bg-green-600 hover:bg-green-700"
            onClick={() => setStatus('idle')}
          >
            إرسال رسالة أخرى
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 -mr-12 -mt-12 bg-blue-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 -ml-10 -mb-10 bg-indigo-100 rounded-full opacity-30"></div>
      
      <div className="relative">
        <h3 className="text-2xl font-bold mb-1 text-gray-900">أرسل لنا رسالة</h3>
        <p className="text-gray-600 mb-6">املأ النموذج أدناه وسنرد عليك في أقرب وقت ممكن</p>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                الاسم
              </label>
              <input 
                id="name" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                placeholder="أدخل اسمك"
                value={formData.name}
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                placeholder="أدخل بريدك الإلكتروني"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              رقم الهاتف
            </label>
            <input 
              id="phone" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
              placeholder="أدخل رقم هاتفك"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              الموضوع
            </label>
            <input 
              id="subject" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
              placeholder="أدخل الموضوع"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              الرسالة
            </label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
              placeholder="اكتب رسالتك هنا"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3 flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
              <p className="text-red-700 text-sm">حدثت مشكلة أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة عبر الهاتف.</p>
            </div>
          )}
          
          <div>
            <Button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-medium"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  جاري الإرسال...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  إرسال
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 