<template>
  <div class="about">
    <h2>Кастомизированный Bootstrap компонент BS46NavBarBrand</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: часть компонента BS46NavBar. Отображает логотип в виде
        изображения и текста. Опционально может использоваться что-то одно.
        Имеет собственную стилизацию. Компонент может быть использован вне
        BS46NavBar с дополнительной стилизацией текста
      </div>
      <div>
        Принимает строки ссылки (по умолчанию ссылается на главную), адреса
        изображения, наименование бренда, флаг одноцветности изображения, флаг
        светлого изображения (работает в паре с флагом одноцветности)
      </div>
      <pre>
props: {
  href: String,
  name: String,
  imageSrc: String,
  monochrome: Boolean,
  light: Boolean,
}</pre
      >
      <h3>Варианты использования</h3>
      <div>Только лого</div>
      <vb-nav-bar-brand image-src="images/iss_logo.svg" />
      <div>Одноцветное лого</div>
      <vb-nav-bar-brand image-src="images/iss_logo.svg" monochrome />
      <div>Одноцветное светлое лого</div>
      <vb-nav-bar-brand image-src="images/iss_logo.svg" monochrome light />
      <div>Только наименование</div>
      <vb-nav-bar-brand name="Viewer Studio" />
      <div>Лого и наименование</div>
      <vb-nav-bar-brand
        name="Viewer Studio"
        image-src="images/viewer-logo.svg"
      />
      <div>Ссылка на определенную страницу</div>
      <vb-nav-bar-brand
        name="Viewer Studio"
        image-src="images/viewer-logo.svg"
        href="/navbar"
      />
      <h3>Действия компонента</h3>
      <div>Возвращает действие @click без параметров</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbNavBarBrand from "../components/Bootstrap_4.6.2/BS46NavBarBrand";
export default {
  name: "NavBarBrandView",
  components: { VbNavBarBrand, VbAlert },
};
</script>
