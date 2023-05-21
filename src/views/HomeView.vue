<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ListForms
        msg="Добро пожаловать на страницу списка анкет"
        :items="items"
        :fields="fields"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ListForms from '@/components/ListForms.vue';
import {Component} from "vue-property-decorator";

@Component({
  components: {
    ListForms,
  }
})
export default class HomeView extends Vue {
  // items: Form[] = [
  //   // {name: 'Залия', lastname: 'Валидова', surname: 'Рамилевна', birthDate: null, text: 'привет'},
  // ];
  fields: any = [
    { key: 'name', label: 'Имя' },
    { key: 'lastname', label: 'Фамилия' },
    { key: 'surname', label: 'Отчество' },
    { birthDate: 'name', label: 'Дата рождения' },
    { text: 'lastname', label: 'Описание' },
  ];

  get items() {
      return this.$store.state.forms;
  }
}
</script>
