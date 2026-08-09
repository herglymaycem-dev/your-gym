import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

interface FreePassModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const FreePassModal: React.FC<FreePassModalProps> = ({ isOpen = true, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');

  // States mte3 validation w UI
  const [errors, setErrors] = useState<{ name?: string; phone?: string; time?: string }>({});
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Fonction mte3 l-Contrôle de saisie
  const validate = () => {
    const newErrors: { name?: string; phone?: string; time?: string } = {};

    // 1. Validation Nom
    if (!name.trim()) {
      newErrors.name = 'Le nom est obligatoire.';
    } else if (name.trim().length < 3) {
      newErrors.name = 'Le nom doit contenir au moins 3 caractères.';
    }

    // 2. Validation Téléphone Tunisien Strict
    const tunisianPhoneRegex = /^(?:(?:\+|00)216)?\s?[2579]\d{7}$/;
    const cleanPhone = phone.trim().replace(/\s+/g, '');

    if (!cleanPhone) {
      newErrors.phone = 'Le numéro de téléphone est obligatoire.';
    } else if (!tunisianPhoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Numéro invalide! Doit contenir 8 chiffres et commencer par 2, 5, 7 ou 9.';
    }

    // 3. Validation Heure
    if (!time) {
      newErrors.time = 'Veuillez choisir une heure.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    // 1. Validation
    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      // 2. Insertion fil-Supabase
      const { data, error } = await supabase
        .from('free_passes')
        .insert([
          { 
            name: name.trim(), 
            phone: phone.trim(), 
            time: time 
          }
        ])
        .select();

      if (error) {
        console.error("SUPABASE ERROR DETAIL:", error);
        throw error;
      }

      console.log("INSERT SUCCESSFUL:", data);

      // 3. Message de succès
      setStatusMessage({ 
        type: 'success', 
        text: 'Réservation réussie ! On vous contactera très vite.' 
      });

      // 4. Reset inputs
      setName('');
      setPhone('');
      setTime('');
      setErrors({});

    } catch (err: any) {
      console.error("CATCH ERROR:", err);
      // Afficher le vrai message d'erreur de Supabase
      setStatusMessage({ 
        type: 'error', 
        text: err?.message || err?.error_description || 'Une erreur est survenue lors de la réservation.' 
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg border border-orange-100">
      <div className="text-center mb-6">
        <p className="text-xs text-gray-500 font-medium">
          One free day to experience the full YOUR GYM universe — no commitment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Champ Nom */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Nom</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="mayssem hergli"
            className={`w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none transition-all ${
              errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-amber-600'
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
        </div>

        {/* Champ Téléphone */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Téléphone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+216 23032444"
            className={`w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none transition-all ${
              errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-amber-600'
            }`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
        </div>

        {/* Champ Heure */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Heure</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={`w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none transition-all ${
              errors.time ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-amber-600'
            }`}
          />
          {errors.time && <p className="text-red-500 text-xs mt-1 font-medium">{errors.time}</p>}
        </div>

        {/* Message de statut */}
        {statusMessage && (
          <div
            className={`p-3 rounded-xl text-xs font-semibold text-center ${
              statusMessage.type === 'success'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        {/* Bouton Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 mt-2"
        >
          {loading ? 'Envoi en cours...' : 'Reserve My Free Pass'}
        </button>
      </form>
    </div>
  );
};