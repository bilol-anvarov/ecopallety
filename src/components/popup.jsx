'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const sendMessageToTelegram = async () => {
    const botToken = '7560455824:AAHbzcnVTGbpZvKIW8WvZBJdicYfD620zZk';
    const chatId = '2425797';
    const text = `Новая заявка!%0AИмя: ${formData.name}%0AТелефон: ${formData.phone}%0AEmail: ${formData.email}%0AСообщение: ${formData.message}`;
    
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${text}`);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessageToTelegram();
  };

  return (
    <AnimatePresence>
    {isOpen && (
      <div className="popup fixed w-full h-full left-[0] inset-0 flex items-center top-[0] justify-center bg-black bg-opacity-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="popupIns"
        >
            <div className="flex justify-between items-center mb-[40px]">
                <h3 className="text-xl font-bold mb-4">Консультация</h3>
                <button className="closeBtn" onClick={onClose}>×</button>

            </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input type="text" placeholder="Имя" required className="border p-2 rounded" onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input type="tel" placeholder="Ваш телефон" required className="border p-2 rounded" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            <input type="email" placeholder="Ваша почта" required className="border p-2 rounded" onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <textarea placeholder="Сообщение" required className="border p-2 rounded" onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
            <button type="submit" className="bg-blue-600 text-white p-2 rounded">Отправить</button>
          </form>
        </motion.div>
      </div>
    )}
    </AnimatePresence>
  );
}
