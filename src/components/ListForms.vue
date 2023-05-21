<template>
  <div class="list-forms">
    <h1 class="list-forms__title">{{ msg }}</h1>
    <router-link :to="{ name: 'form'}" class="list-forms__button">
      <b-button>Добавить запись</b-button>
    </router-link>
    <b-table striped hover :items="items" :fields="fields" class="list-forms__table" v-if="items.length"></b-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import {BButton, BTable} from "bootstrap-vue";
import {Form} from "types";

@Component({
  components: {
    BButton,
    BTable,
  },
})
export default class ListForms extends Vue {
  @Prop() msg: String | undefined;
  @Prop({default: []}) items: Form[];
  @Prop() fields: any[] | undefined;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
