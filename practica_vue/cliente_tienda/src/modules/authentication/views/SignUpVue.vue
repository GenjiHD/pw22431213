<template>
    <div class="contenedor">
        <form @submit.prevent="registrarUsuario" class="formulario">
            <h2>Registro de Usuario</h2>
            <div class="grupo">
                <label>Correo:</label>
                <input 
                    type="email" 
                    v-model = "correo"
                    required
                >
            </div>
            <div class="grupo">
                <label>Contraseña:</label>
                <input 
                    type="password" 
                    v-model = "password"
                    required
                >
            </div>
            <div class="error" v-if="error">
                {{ error }}
            </div>
            <button type="submit">
                Registrarse
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
    import { useRouter } from 'vue-router';
    import '../../../firebase/config.js';
    
    const correo = ref('');
    const password = ref('');
    const error = ref<string | null>(null);
    const router = useRouter();

    const registrarUsuario = async() => {
        error.value= null;
        try{
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, correo.value, password.value);
            router.push({name: 'bienvenida' })
        } catch(err) {
            switch (err) {
                case 'auth/email-already-in-use':
                    error.value = "Este correo ya esta registrado";
                    break;
                case 'auth/weak-password':
                    error.value = "La contraseña es muy debil";
                default:
                    error.value = "Ocurrio un error en el registro";
                    break;
            }
        }
    };

</script>

<style scoped>
    .contenedor{
        max-width: 400px;
        margin: 0px auto;
        padding: 20px;
    }
    .formulario{
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
    .grupo{
        display: flex;
        flex: column;
        gap: 0.5em;
    }
    input{
        padding: 8px;
        border: 1px solid #DDD;
        border-radius: 5px;
    }
    button{
        padding: 10px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .error{
        color: red;
        font-size: 0.9em;
        margin-top: 0.5em;
        
    }
</style>