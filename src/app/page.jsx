import ConsultationBanner from "@/components/ConsultationBanner";
import Feedbacks from "@/components/Feedbacks";
import ImageInfo from "@/components/ImageInfo";
import Services from "@/components/Services";
import SliderCtr from "@/components/Slider";
import Link from "next/link";

export default function Home() {
  return (
    <main className="defCtr">
      <SliderCtr />
      <Services />
      <div className="bannerParagraph mt-[60px]">
        Для эффективной транспортировки, погрузки и хранения грузов часто применяются деревянные поддоны. Это удобный и экономичный материал, не требующий особых условий для хранения. Эти преимущества делают поддоны идеальными для заказа в Алматы. Наша компания предлагает широкий выбор услуг, чтобы удовлетворить все потребности наших клиентов.
      </div>
      <ImageInfo
        imgSrc={"/image 21.png"}
        title={"Производство деревянных поддонов (паллет)"}
        paragraph={
          "Компания Eco Paletty KZ занимается производством деревянных поддонов различных типов и размеров, а также ящиков для хранения овощей, фруктов и других товаров. Мы также изготавливаем поддоны по индивидуальным размерам. Наша производственная база оснащена всем необходимым оборудованием, что позволяет нам выполнять заказы любой сложности и объема в кратчайшие сроки."
        }
        link={"/production"}
      />
      <div className="acceptingCtr px-[48px] py-[29px] w-full rounded-[12px] mt-[60px]">
        <div className="info w-full max-w-[752px] flex flex-col gap-[40px]">
          <h4>Прием Б/У поддонов</h4>
          <p>
            Мы выкупаем бывшие в употреблении поддоны, что позволяет вам избавиться от ненужной тары и получить за нее деньги. Стоимость услуги зависит от:
          </p>
          <ul>
            <li>Размеров партии</li>
            <li>Способа доставки на наш склад</li>
            <li>Состояния изделий</li>
          </ul>
          <Link href={"#!"}>
            <button type="button" className="secondaryBtn">
              Перейти
            </button>
          </Link>
        </div>
      </div>
      <ImageInfo
        textFirst={true}
        imgSrc={"/image 28.png"}
        title={"Продажа Б/У паллет"}
        paragraph={
          "Б/У паллеты — отличная альтернатива новым поддонам. Они значительно дешевле, при этом все паллеты проходят проверку опытными специалистами и сохраняют все необходимые эксплуатационные характеристики. У нас широкий выбор поддонов различных размеров и грузоподъемности."
        }
        link={"/pallets"}
      />

      <ImageInfo
        imgSrc={"/image 30.png"}
        title={"Сервис и замена поддонов"}
        paragraph={
          "Если ваши поддоны не соответствуют требованиям для партнера, наша компания предлагает услуги обмена. Вы избавитесь от старых поддонов и получите нужную тару, которая соответствует всем стандартам."
        }
        link={"/production"}
      />
      <Feedbacks />
      <ConsultationBanner />
      <ImageInfo
        imgSrc={"/image 36.svg"}
        title={"Аренда поддонов"}
        paragraph={
          "Несмотря на высокое качество и соответствие ГОСТ, поддоны, как и любая другая тара, могут выйти из строя при активной эксплуатации. Мы предлагаем услуги по вывозу и утилизации поддонов, чтобы вы не занимались хранением ненужных изделий."
        }
        link={"/production"}
      />

      <ImageInfo
        imgSrc={"/image 37.png"}
        title={"Доставка поддонов по территории"}
        paragraph={
          "Мы быстро доставим ваш заказ по Алматы и всей территории Казахстана. Наши сотрудники обеспечат доставку поддонов в целости и сохранности. <br/> <br/> Для получения более подробной информации и консультации свяжитесь с нашими менеджерами. Они помогут выбрать подходящий вариант и расскажут о дальнейших шагах."
        }
        link={"/production"}
      />
      <div className="banners bannersMainPage mt-[60px] flex justify-between gap-[10px]">
        <div className="paddonBanner max-w-[652px] w-full p-[44px] flex items-center justify-between">
          <h2>Поддоны / Паллеты</h2>
          <Link href={"/pallets"}>
            <button type="button" className="thirdBtn">
              Заказать
            </button>
          </Link>
        </div>

        <div className="boxBanner max-w-[652px] w-full p-[44px] flex items-center justify-between">
          <h2>Деревянные ящики</h2>
          <Link href={"/boxes"}>
            <button type="button" className="thirdBtn">
              Заказать
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
