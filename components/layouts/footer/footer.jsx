import { useTranslations } from 'next-intl';

const Footer = () => {
  const  t  = useTranslations();

  return (
    <div className="text-[length:var(--text-footer)] flex justify-center items-center py-4 bg-[var(--second-background-color)] text-[var(--p-color)] capitalize">
      {t('copyright')}
    </div>
  );
};

export default Footer;
