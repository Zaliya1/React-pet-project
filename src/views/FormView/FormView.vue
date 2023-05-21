<template>
  <div class="form-view">
    <h1>
      {{ isCreate? 'Создание' : "Редактирование"}} анкеты
    </h1>
    <EditForm :form="form" @submit="submit"/>
  </div>
</template>


<script lang="ts" src="./FormView.ts"></script>
<style src="./FormView.css"></style>
