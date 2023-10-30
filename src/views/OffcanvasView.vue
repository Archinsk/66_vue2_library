<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2Offcanvas</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46Offcanvas</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: Всплывающая боковая панель</div>
      <div>
        Принимает строчный идентификатор, флаги наличия хедера, футера,
        прокручиваемого тела, отсутствия типового заголовка, отсутствия кнопки
        закрытия в хедере, отсутствии клавиатурного закрытия, отсутствия
        закрытия кликом по фону, строку ширины панели, строку темы фона панели,
        строку точки при которой сбрасываются эффекты фиксированного
        позиционирования и прочие свойства (допускаются значения "sm", "md",
        "lg" и "xl"). Компонент выполнен на основе Bootstrap-компонента modal с
        добавлением классов offcanvas на части структуры modal, очень похож на
        BS46Modal. При создании вешает на body слушатель изменения размера окна.
        При изменении размера окна и достижения ширины окна точки сброса
        эффектов javaScript'ом добавляются или снимаются свойства с body и
        offcanvas, убирается/добавляется элемент фона. Компонент имеет стили
        переопределяющие стили стандартного Bootstrap-компонента modal. Также
        содержит стили сброса эффектов. Внутри Offcanvas выпадающие списки
        отображаются нестандартно, см.
        <router-link to="navitem">NavItem</router-link> и
        <router-link to="dropdownitem">DropdownItem</router-link>
        <div class="text-danger">
          Требуется доработать: 1. Вариант без затемняющего фона с прокруткой
          body. 2. Режим полуоткрытый-открытый (без полного скрытия панели). 3.
          Режим сжатия соседнего элемента. Чтобы Offcanvas выезжал не поверх
          основного содержимого, закрывая его, а рядом с ним, уменьшая ширину
          соседних элементов
        </div>
      </div>
      <pre>
props: {
  id: String,
  header: Boolean,
  footer: Boolean,
  scrollable: Boolean,
  noTitle: Boolean,
  noCloseButton: Boolean,
  noBackdrop: Boolean,
  noKeyboard: Boolean,
  staticBackdrop: Boolean,
  openedWidth: String,
  theme: String,
  noEffectPoint: String,
},</pre
      >
      <h3>Варианты использования</h3>
      <vb-offcanvas-button
        target-id="offcanvas-01"
        class="btn-primary mr-3 mb-3"
      >
        Без пропов
      </vb-offcanvas-button>
      <vb-offcanvas id="offcanvas-01"> Содержимое Offcanvas </vb-offcanvas>
      <vb-offcanvas-button
        target-id="offcanvas-02"
        class="btn-primary mr-3 mb-3"
      >
        С хедером и футером
      </vb-offcanvas-button>
      <vb-offcanvas id="offcanvas-02" header footer>
        <template v-slot:offcanvas-header>Заголовок</template>
        Содержимое Offcanvas
        <template v-slot:offcanvas-footer>Футер</template>
      </vb-offcanvas>
      <vb-offcanvas-button
        target-id="offcanvas-03"
        class="btn-primary mr-3 mb-3"
      >
        С фиксированной шириной
      </vb-offcanvas-button>
      <vb-offcanvas id="offcanvas-03" header opened-width="16.25rem">
        <template v-slot:offcanvas-header>Заголовок</template>
        Содержимое Offcanvas
      </vb-offcanvas>
      <vb-offcanvas-button
        target-id="offcanvas-04"
        class="btn-primary mr-3 mb-3"
      >
        Прокручиваемое
      </vb-offcanvas-button>
      <vb-offcanvas id="offcanvas-04" header opened-width="16.25rem" scrollable>
        <template v-slot:offcanvas-header>Заголовок</template>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
        beatae ducimus eaque eligendi harum ipsum maiores quasi quod quos
        reprehenderit. Autem blanditiis corporis dicta dignissimos, eius
        expedita hic id ipsa natus nihil nulla odit, pariatur porro quia
        quibusdam rerum velit! Ab cum magni numquam! Asperiores aut dicta error
        ex facilis, ipsum minima nihil provident quo sequi! A alias aliquam
        animi asperiores aspernatur at atque cumque debitis deleniti dolore
        dolores dolorum eius est ex fugit illo iste iusto labore magnam,
        molestias necessitatibus, nesciunt, odio omnis possimus quaerat quia
        ratione rem reprehenderit sit totam vel veritatis vero voluptates? Alias
        at doloremque iste laborum, neque nobis possimus? A ab aperiam aut
        debitis dicta eos error et hic illum, labore omnis perspiciatis quae
        qui, sed sint sunt unde. Debitis dolore ducimus iste, minus nemo nobis
        officiis repellendus similique. Accusamus amet, aperiam aspernatur at
        atque culpa dolorem eius, eos eum fugiat ipsum iste itaque laborum nisi
        quas ratione tempore unde ut vero vitae. Cumque excepturi iusto nihil
        odio omnis provident reiciendis? Aliquam corporis eaque eveniet facere
        porro, quaerat repellendus sit veniam voluptas voluptate. Debitis
        doloribus impedit laboriosam praesentium veniam? Accusamus consectetur
        earum fugiat in ipsa magnam, maxime nemo quam rem sed sit tempora ut
        voluptatem! Minima mollitia quam suscipit? Ad debitis deleniti eos est
        explicabo fugiat ipsa iure nemo placeat, totam. A accusamus beatae
        consequuntur deserunt dicta dolore, dolorem ea eum excepturi expedita
        facere fugit ipsam iure laborum, minus neque nisi obcaecati officiis
        omnis pariatur quam quisquam tempora tempore veritatis vero vitae
        voluptatibus! Dolores, porro.
      </vb-offcanvas>
      <vb-offcanvas-button
        target-id="offcanvas-05"
        class="btn-primary mr-3 mb-3"
      >
        Без дефолтного заголовка
      </vb-offcanvas-button>
      <vb-offcanvas id="offcanvas-05" header no-title>
        <template v-slot:offcanvas-header
          ><i>Кастомные <b>теги</b> заголовка</i></template
        >
        Содержимое Offcanvas
      </vb-offcanvas>
      <vb-offcanvas-button
        target-id="offcanvas-06"
        class="btn-primary mr-3 mb-3"
      >
        Без кнопки закрытия
      </vb-offcanvas-button>
      <vb-offcanvas id="offcanvas-06" header no-close-button>
        <template v-slot:offcanvas-header>Нет кнопки --></template>
        Содержимое Offcanvas
      </vb-offcanvas>
      <vb-offcanvas-button
        target-id="offcanvas-07"
        class="btn-primary mr-3 mb-3"
      >
        Без фона
      </vb-offcanvas-button>
      <vb-offcanvas id="offcanvas-07" header no-backdrop>
        <template v-slot:offcanvas-header>Фон отсутствует</template>
        Содержимое Offcanvas
      </vb-offcanvas>
      <vb-offcanvas-button
        target-id="offcanvas-08"
        class="btn-primary mr-3 mb-3"
      >
        Без клавиатурного закрытия
      </vb-offcanvas-button>
      <vb-offcanvas id="offcanvas-08" header no-keyboard>
        <template v-slot:offcanvas-header>Без клавиатурного закрытия</template>
        Нажми "Esc"
      </vb-offcanvas>
      <vb-offcanvas-button
        target-id="offcanvas-09"
        class="btn-primary mr-3 mb-3"
      >
        Не кликабельный фон
      </vb-offcanvas-button>
      <vb-offcanvas id="offcanvas-09" header static-backdrop>
        <template v-slot:offcanvas-header>Не кликабельный фон</template>
        Клавиатурное закрытие (Esc) тоже выключено
      </vb-offcanvas>
      <vb-offcanvas-button
        target-id="offcanvas-10"
        class="btn-primary mr-3 mb-3"
      >
        Со сбросом эффектов на больших экранах
      </vb-offcanvas-button>
      <vb-offcanvas
        id="offcanvas-10"
        expand-size="sm"
        header
        no-effect-point="sm"
      >
        <vb-nav tag="ul" class="navbar-nav">
          <template v-for="navLink of defaultNav.itemsList">
            <vb-nav-item
              v-if="!navLink.dropdown"
              :key="navLink.id"
              :type="navLink.type"
              :href="navLink.href"
              :active="navLink.active"
              :disabled="navLink.disabled"
              >{{ navLink.name }}</vb-nav-item
            >
            <vb-nav-item
              v-else
              :key="navLink.id"
              :type="navLink.type"
              :href="navLink.href"
              :active="navLink.active"
              :disabled="navLink.disabled"
              :dropdown="navLink.dropdown"
              >{{ navLink.name }}
              <template v-slot:dropdown-menu>
                <vb-dropdown-item
                  v-for="dropdownItem of navLink.dropdownItemsList"
                  :key="dropdownItem.id"
                  :type="dropdownItem.type"
                  :href="dropdownItem.href"
                  :active="dropdownItem.active"
                  :disabled="dropdownItem.disabled"
                  >{{ dropdownItem.name }}</vb-dropdown-item
                >
              </template>
            </vb-nav-item>
          </template>
        </vb-nav>
      </vb-offcanvas>
      <h3>Действия компонента</h3>
      <div>См. <router-link to="/modal">Modal</router-link></div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbOffcanvasButton from "../components/Bootstrap_4.6.2/BS46OffcanvasButton";
import VbOffcanvas from "../components/Bootstrap_4.6.2/BS46Offcanvas";
import VbNav from "../components/Bootstrap_4.6.2/BS46Nav";
import VbNavItem from "../components/Bootstrap_4.6.2/BS46NavItem";
import VbDropdownItem from "../components/Bootstrap_4.6.2/BS46DropdownItem";
export default {
  name: "TempView",
  components: {
    VbDropdownItem,
    VbNavItem,
    VbNav,
    VbOffcanvas,
    VbOffcanvasButton,
    VbAlert,
  },
  data() {
    return {
      defaultNav: {
        itemsList: [
          {
            id: "link-alert",
            name: "Alert",
            type: "router-link",
            href: "/alert",
            active: false,
            disabled: false,
          },
          {
            id: "link-form",
            name: "Form",
            type: "router-link",
            href: "/form",
            active: false,
            disabled: false,
          },
          {
            id: "link-pagination",
            name: "Pagination",
            type: "router-link",
            href: "",
            active: false,
            disabled: false,
            dropdown: true,
            dropdownItemsList: [
              {
                id: "link-pagination",
                name: "Pagination",
                type: "router-link",
                href: "/pagination",
                active: true,
                disabled: false,
              },
              {
                id: "link-pagination-items-per-page",
                name: "PaginationItemsPerPage",
                type: "router-link",
                href: "/paginationitemsperpage",
                active: false,
                disabled: false,
              },
              {
                id: "link-pagination-page-selector",
                name: "PaginationPageSelector",
                type: "router-link",
                href: "/paginationpageselector",
                active: false,
                disabled: false,
              },
              {
                id: "link-pagination-button",
                name: "PaginationButton",
                type: "router-link",
                href: "/paginationbutton",
                active: false,
                disabled: true,
              },
            ],
          },
          {
            id: "link-modal",
            name: "Modal",
            type: "router-link",
            href: "/modal",
            active: true,
            disabled: false,
          },
          {
            id: "link-preloader",
            name: "Preloader",
            type: "router-link",
            href: "/preloader",
            active: false,
            disabled: true,
          },
        ],
      },
    };
  },
  methods: {},
};
</script>
