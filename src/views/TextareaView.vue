<template>
  <div>
    <h2>Классический textarea</h2>
    <h2>Кастомизированный компонент Vue2Textarea</h2>
    <div>Пока отсутствует</div>
    <h2>Кастомизированный Bootstrap компонент BS46Textarea</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает исправно. Используется в проектах 40, 62, 64, 71, 72. Во всех
        проектах используется устаревшая версия компонента</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: ввод многострочного текста</div>
      <div>
        Принимает идентификатор, ярлык, значение, флаги обязательности, режима
        "только для чтения", отключенности и горизонтальногорежима, объект
        дополнительных классов, плейсхолдер и количество строк.
      </div>
      <pre>
props: {
  // подзаголовок
  id: String,
  label: String,
  value: String,
  required: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  additionalClasses: Object,
  horizontal: Boolean,
  placeholder: String,
  rows: Number,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <div>Без пропсов</div>
      <vb-textarea />
      <div>С ярлыком (если используется без id, то ярлык некликабельный)</div>
      <vb-textarea label="Текст сообщения" id="message" />
      <div>C предустановленным значением</div>
      <vb-textarea value="Ошибка возникла в результате..." />
      <div>C объектом дополнительных классов</div>
      <vb-textarea :additional-classes="{ group: 'col-6' }" />
      <div>Обязательное (использовать с ярлыком)</div>
      <vb-textarea label="Текст сообщения" id="message2" required />
      <div>Только для чтения</div>
      <vb-textarea
        label="Текст сообщения"
        id="message3"
        readonly
        value="Введённый текст"
      />
      <div>Отключенное</div>
      <vb-textarea
        label="Текст сообщения"
        id="message4"
        disabled
        value="Введённый текст"
      />
      <div>Горизонтальное положение (ярлык слева)</div>
      <vb-textarea label="Текст сообщения" id="message5" horizontal />
      <div>С плейсхолдером</div>
      <vb-textarea
        label="Текст сообщения"
        id="message6"
        placeholder="Введите текст..."
      />
      <div>Пять строк</div>
      <vb-textarea label="Текст сообщения" id="message7" :rows="5" />
      <h3>Структура данных для компонента</h3>
      <pre>{{ defaultTextarea }}</pre>
      <h3>Действия компонента</h3>
      <div>
        При изменении значения вызывает событие @input с текстовым значением
      </div>
      <vb-textarea
        :id="defaultTextarea.id"
        :label="defaultTextarea.label"
        :required="defaultTextarea.required"
        :disabled="defaultTextarea.disabled"
        :readonly="defaultTextarea.readonly"
        :additional-classes="defaultTextarea.additionalClasses"
        :horizontal="defaultTextarea.horizontal"
        :placeholder="defaultTextarea.placeholder"
        :rows="defaultTextarea.rows"
        :value="defaultTextarea.value"
        @input="defaultTextarea.value = $event"
      />
      <div>
        Возвращаемое значение: {{ defaultTextarea.value }} (тип -
        {{ typeof defaultTextarea.value }})
      </div>
    </div>
  </div>
</template>

<script>
import VbTextarea from "../components/Bootstrap_4.6.2/Form_components/BS46Textarea";
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "TextareaView",
  components: { VbAlert, VbTextarea },
  data() {
    return {
      defaultTextarea: {
        id: "activeTextarea",
        label: "Сообщение",
        type: "textarea",
        required: false,
        disabled: false,
        readonly: false,
        additionalClasses: {
          group: "col-6",
          label: "",
          field: "",
        },
        horizontal: false,
        placeholder: "Введите текст сообщения",
        rows: 3,
        value: "",
      },
    };
  },
};
</script>
