import Vue from "vue";
import { ValidationProvider, ValidationObserver, extend,localize } from "vee-validate";
import { required, min, email } from "vee-validate/dist/rules";

localize({
    en:{
        messages:{
            required:(name)=>`El campo ${name} es requerido`,
            email:(name)=>`Ingresa un correo valido`,
            min:(name,{length}) => `El campo ${name} debe tener al menos ${length} caracteres o más`
        }
    },
    es:{
        messages:{
            required:(name)=>`El campo ${name} es requerido`,
            email:(name)=>`Ingresa un correo valido`,
            min:(name,{length}) => `El campo ${name} debe tener al menos ${length} caracteres o más`
        }
    }
})



extend("required", required);
extend("min", min);
extend("email", email);

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
