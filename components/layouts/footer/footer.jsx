import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center py-4 bg-[var(--second-background-color)] text-[var(--p-color)] capitalize">
      {t('copyright')}
    </div>
  );
};

export default Footer;
