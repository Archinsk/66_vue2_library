<template>
  <div>
    <h2>Классический textarea</h2>
    <h2>Кастомизированный компонент Vue2Textarea</h2>
    <h2>Кастомизированный Bootstrap компонент BS46Textarea</h2>
    <h3>Варианты использования</h3>
    <div>Без пропсов</div>
    <vb-textarea />
    <div>С ярлыком (если используется без id, то ярлык некликабельный)</div>
    <vb-textarea label="Текст сообщения" id="message" />
    <div>C предустановленным значением</div>
    <vb-textarea value="Ошибка возникла в результате..." />
    <div>C шириной (по сетке Bootstrap)</div>
    <vb-textarea width-group="6" />
    <h3>Действия компонента</h3>
    <div>Обязательное (использовать с ярлыком)</div>
    <vb-textarea label="Текст сообщения" id="message2" required />
    <div>Только для чтения</div>
    <vb-textarea label="Текст сообщения" id="message3" readonly />
    <div>Отключенное</div>
    <vb-textarea label="Текст сообщения" id="message4" disabled />
    <div>Горизонтальное положение (ярлык слева)</div>
    <vb-textarea
      label="Текст сообщения"
      id="message5"
      horizontal
      :horizontal-width="{
        label: { width: 4, responsive: 'col-sm-5' },
        field: {
          width: 8,
          responsive: 'col-sm-7',
        },
      }"
    />
  </div>
</template>

<script>
import VbTextarea from "../components/BS46Textarea";
export default {
  name: "TextareaView",
  components: { VbTextarea },
};
</script>
