<template>
  <div class="EditForm">
    <form class="form">
      <b-form-input class="form__input" v-model="form.lastname" placeholder="Фамилия" />
      <b-form-input class="form__input" v-model="form.name" placeholder="Имя" />
      <b-form-input class="form__input" v-model="form.surname" placeholder="Отчество" />
      <b-form-datepicker class="form__input" v-model="form.birthDate" placeholder="Дата рождения"></b-form-datepicker>
      <b-form-textarea
          class="form__input"
          v-model="form.text"
          placeholder="Описание"
      />
      <b-button type="submit" variant="primary" @click="onSubmit" :disabled="isDisabled">Сохранить</b-button>
    </form>
  </div>
</template>

<script lang="ts" src="./EditForm.ts"></script>
<style src="./EditForm.css"></style>
