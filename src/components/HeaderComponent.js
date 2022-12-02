import React from "react";
import { useTranslation } from "react-i18next";
import { Fr } from "react-flags-select";
import { Us } from "react-flags-select";

const HeaderComponent = () => {
    const {t, i18n} = useTranslation('common');

  return (
    <div>
      <h1>{t("welcome.title", { framework: "React" })}</h1>
      <button type="button" class ="btn-lg" onClick={() => i18n.changeLanguage("fr")}><Fr /></button>
      <button type="button" onClick={() => i18n.changeLanguage("en")}><Us /></button>
      
    </div>
  );
};

export default HeaderComponent;
