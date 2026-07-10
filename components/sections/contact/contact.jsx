"use client";
import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contact.css';
import { useTranslations } from 'next-intl';
import { FaWhatsapp, FaTelegram, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Toast from '@/components/ui/toast/Toast';
import Heading from "@/components/ui/heading/heading"
import Button from "@/components/ui/button/button";
import { FiSend } from "react-icons/fi";
import useContactForm from '@/hooks/useContactForm'; // استدعاء الهوك هنا

const iconClass = "text-[35px] w-[35px] h-[35px] leading-[35px] ml-[15px] cursor-pointer transition-all duration-300 bg-[var(--second-background-color)] p-[5px] rounded-[2px] hover:scale-[1.3]";
const inputWrapClass = "custom-input w-full relative bg-[var(--second-background-color)] rounded-[8px]";
const inputClass = "w-full h-full bg-transparent outline-none border-none rounded-[8px] indent-[20px] text-[var(--h1-color)] absolute z-[2]";
const labelClass = "absolute top-[10px] start-[40px] text-[var(--p-color)] z-[1] transition-all duration-500 ease-in-out";
const Contact = () => {
  const  t  = useTranslations();
  const [toast, setToast] = useState(null);
  
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    AOS.init();
  }, []);

  const showAlert = (message, isSuccess = false) => {
    setToast({ message, type: isSuccess ? 'success' : 'error' });
  };

  // تشغيل الهوك وباصينا له كل الـ Refs والـ Functions اللي محتاجها
  const { sendEmail, handleLabel, isSubmitting } = useContactForm({
    formRef: form,
    nameRef,
    emailRef,
    messageRef,
    t,
    showAlert
  });

  const phoneNumber = '01027149300';
  const openWhatsAppChat = () => window.open(`https://wa.me/${phoneNumber}`, '_blank');
  const openTelegramChat = () => window.open(`https://t.me/add?phone=${encodeURIComponent(phoneNumber)}`, '_blank');

  return (
    <>
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}

      <div className="contact px-4" id="contact">
        <div className="container max-md:max-w-[600px] max-w-[1200px] mx-auto my-[25px] flex flex-col items-center gap-[35px] text-[var(--h1-color)]">
          <Heading>{t('contact')}</Heading>
          
          <p className="max-md:w-[90%] max-md:text-center text-[length:var(--text-paragraph)] text-[var(--p-color)]">{t('contact description')}</p>

          <form ref={form} onSubmit={sendEmail} className="max-md:w-[90%] flex flex-col items-center gap-[40px] w-[50%] pt-[30px]">

            <div className={`${inputWrapClass} h-[40px]`} data-aos="fade-right">
              <input id="user" className={inputClass} ref={nameRef} type="text" onBlur={handleLabel} name="user_name" />
              <label htmlFor="user" className={labelClass}>{t('username')}</label>
            </div>

            <div className={`${inputWrapClass} h-[40px]`} data-aos="fade-left">
              <input id="email" className={inputClass} ref={emailRef} type="email" onBlur={handleLabel} name="user_email" />
              <label htmlFor="email" className={labelClass}>{t('email')}</label>
            </div>

            <div className={`${inputWrapClass} h-[150px]`} data-aos="fade-right">
              <textarea id="message" className={`${inputClass} p-[10px] pl-0`} ref={messageRef} onBlur={handleLabel} name="message"></textarea>
              <label htmlFor="message" className={labelClass}>{t('message')}</label>
            </div>

            <Button type="submit" data-aos="fade-left" disabled={isSubmitting}>
              <FiSend className={isSubmitting ? "animate-spin" : ""} />
              {isSubmitting ? t('await sending') : t('send')}
            </Button>
          </form>

          <div className="icons flex">
            <FaWhatsapp  className={`${iconClass} text-[#59F878]`} onClick={openWhatsAppChat} />
            <FaTelegram  className={`${iconClass} text-[#2FADE6]`} onClick={openTelegramChat} />
            <a href="https://www.facebook.com/nagah.rady.10" target="_blank">
              <FaFacebook className={`${iconClass} text-[#4867AA]`} />
            </a>
            <a href="" target="_blank">
              <FaTwitter  className={`${iconClass} text-[#1EA1F3]`} />
            </a>
            <a href="" target="_blank">
              <FaInstagram className={`${iconClass} text-[#F501C0]`} />
            </a>
            <a href="" target="_blank">
              <FaYoutube  className={`${iconClass} text-[#FF0808]`} />
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;