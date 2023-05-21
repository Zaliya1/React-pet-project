import {Component, Vue, Prop} from "vue-property-decorator";
import {Form} from "types"
import {BFormInput, BFormDatepicker, BFormTextarea, BButton} from "bootstrap-vue";


@Component({
    components: {
        BFormInput, BFormDatepicker, BFormTextarea, BButton,
    }
})
export default class EditForm extends Vue {
    @Prop() form: Form;

    get isDisabled(): boolean {
        return !(this.form.name && this.form.lastname && this.form.birthDate && this.form.surname)
    }

    onSubmit(event: any) {
        event.preventDefault()
        this.$emit('submit', this.form)
        console.log(this.$store.state.forms)
    }
}
