import {Component, Vue, Prop } from "vue-property-decorator";
import {Form} from "types"
import EditForm from "@/components/EditForm/EditForm.vue";

@Component({
    components: {
        EditForm
    }
})
export default class FormView extends Vue {
    form: Form = {
        name: '',
        lastname: '',
        surname: '',
        birthDate: null,
        text: '',
    };
    @Prop({type: Boolean, default: false, required: false}) isCreate: boolean;

    submit(form: Form) {
        this.$store.dispatch('actionForm', form);
        this.$router.push('/')
    }
}
