'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
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
      <Card className="bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-green-800">تم إرسال الرسالة!</h3>
            <p className="text-green-700 mt-2 max-w-md">شكرًا للتواصل معنا. لقد استلمنا رسالتك وسنرد عليك في أقرب وقت ممكن.</p>
            <Button 
              className="mt-6"
              onClick={() => setStatus('idle')}
            >
              إرسال رسالة أخرى
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>أرسل لنا رسالة</CardTitle>
        <CardDescription>املأ النموذج أدناه وسنرد عليك في أقرب وقت ممكن</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                الاسم
              </label>
              <input 
                id="name" 
                className="w-full p-2 border rounded-md" 
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
                className="w-full p-2 border rounded-md" 
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
              className="w-full p-2 border rounded-md" 
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
              className="w-full p-2 border rounded-md" 
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
              className="w-full p-2 border rounded-md"
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
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              جاري الإرسال...
            </>
          ) : (
            'إرسال'
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
