"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, Mail, MessageCircle, Calendar, Users, ShoppingBag, AlertCircle, CheckCircle } from "lucide-react"
import emailjs from '@emailjs/browser'

const contactReasons = [
  { id: "info", label: "Informations générales", icon: MessageCircle },
  { id: "reservation", label: "Réservation", icon: Calendar },
  { id: "event", label: "Organisation d'événement", icon: Users },
  { id: "partnership", label: "Partenariat commercial", icon: ShoppingBag },
  { id: "other", label: "Autre", icon: Mail },
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY") // You'll need to replace this with your actual EmailJS public key
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error("Format d'email invalide")
      }

      // Validate phone number (optional but if provided, should be valid)
      if (formData.phone && !/^\+216\s?\d{1,2}\s?\d{3}\s?\d{3}$/.test(formData.phone.replace(/\s/g, ''))) {
        throw new Error("Format de téléphone invalide (utilisez +216 XX XXX XXX)")
      }

      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: "contact@boumizasquare.tn",
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone || 'Non fourni',
        reason: contactReasons.find(r => r.id === formData.reason)?.label || formData.reason,
        message: formData.message,
        subject: `Nouveau message de contact - ${contactReasons.find(r => r.id === formData.reason)?.label || formData.reason}`,
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )

      if (result.status === 200) {
        setIsSubmitted(true)
        setIsSubmitting(false)

        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            reason: "",
            message: "",
          })
        }, 5000)
      } else {
        throw new Error("Erreur lors de l'envoi de l'email")
      }

    } catch (err) {
      console.error("EmailJS error:", err)
      setError(err instanceof Error ? err.message : "Une erreur s'est produite lors de l'envoi")
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear error when user starts typing
    if (error) setError("")
  }

  if (isSubmitted) {
    return (
      <section className="py-20 px-6 bg-background borderless flex items-center justify-center">
        <Card className="p-8 text-center borderless bg-card max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">Message envoyé !</h3>
          <p className="text-muted-foreground">
            Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Un email de confirmation a été envoyé à {formData.email}
          </p>
        </Card>
      </section>
    )
  }

  return (
    <section className="py-20 px-6 bg-background borderless">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading mb-4 text-foreground">Envoyez-nous un message</h2>
          <p className="text-muted-foreground">
            Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
          </p>
        </div>

        <Card className="p-8 borderless bg-card">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <span className="text-red-800 text-sm">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom et Prénom */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  placeholder="Votre prénom ici"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  placeholder="Votre nom ici"
                />
              </div>
            </div>

            {/* Email et Téléphone */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  placeholder="Votre email ici"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  placeholder="+216 XX XXX XXX"
                />
              </div>
            </div>

            {/* Motif de contact */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Motif de votre contact *</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {contactReasons.map((reason) => {
                  const IconComponent = reason.icon
                  return (
                    <label
                      key={reason.id}
                      className={`flex flex-col items-center p-4 rounded-lg border cursor-pointer transition-all ${
                        formData.reason === reason.id
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border bg-background hover:border-accent/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="reason"
                        value={reason.id}
                        checked={formData.reason === reason.id}
                        onChange={handleChange}
                        className="sr-only"
                        required
                      />
                      <IconComponent className="h-6 w-6 mb-2" />
                      <span className="text-xs text-center font-medium">{reason.label}</span>
                    </label>
                  )
                })}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors resize-none"
                placeholder="Votre message ici..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3 text-lg font-semibold"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-accent-foreground mr-2" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer le message
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
