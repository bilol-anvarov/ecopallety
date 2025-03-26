import React from "react";

export const metadata = {
    title: "Контакты"
  };

export default function Page() {
  return (
    <div className="contactsPage defCtr">
      <div className="info">
        <h4 className="mb-[30px]">Контакты </h4>
        <h5>Банковские реквизиты</h5>
        <p className="my-[20px]">
          ТОО “Казахстанский завод ТНП”
          <br />
          <br />
          БИН: 130440012915
        </p>
        <p>
          Номер счета KZT: KZ028562203143525407
          <br />
          <br />
          БИК KCJBKZKX
        </p>
        <h5 className="mt-[30px] mb-[20px]">Адрес</h5>
        <a href="https://maps.app.goo.gl/43Z1VgD2DqtNPAN99" target="_blank">
        КАЗАХСТАН, Алматинская обл.,
        г. Алатау, мкр. Заречный, ул. Абая, уч.
        72
        </a>
        <h5 className="mt-[30px] mb-[20px]">Контактный телефон</h5>
        <div className="links flex flex-col gap-[10px]">
          <a href="/"></a>
          <a href="/"></a>
          <a href="/"></a>
        </div>
        <h5 className="mt-[30px] mb-[20px]">E-mail</h5>
        <a href="">info@paletty.kz</a>
      </div>
      <iframe

        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.627896078765!2d77.11264717141347!3d43.67389529671253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3882fe1c823c37c9%3A0x507868a12b2871f!2z0YPQuy4g0JDQsdCw0Y8sINCW0LXRgtGL0LPQtdC9LCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2s!4v1742990139898!5m2!1sru!2s"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
