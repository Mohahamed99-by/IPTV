import { useTranslation } from 'react-i18next';
import Navbar from './IPTVServicesTemplate/Navbar';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation(); // Use the hook for translation

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // This changes the language
  };

  return (
    <div>
     <Navbar changeLanguage={changeLanguage}  />
    </div>
  );
};

export default LanguageSwitcher;
