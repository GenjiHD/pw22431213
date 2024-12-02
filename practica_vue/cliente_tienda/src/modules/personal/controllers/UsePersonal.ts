import { ref } from "vue";
import type { Personal } from "../interfaces/Personal-interface";
import PersonalAPI from "../api/PersonalAPI";
import axios from "axios";

export const UsePersonal = () => {
    const personal = ref<Personal[]>([]);

    const getPersonal = async () => {
        try {
            const response = await PersonalAPI.get<Personal[]>('/');
            personal.value = response.data;
        } catch (err) {
            console.log(err);
        }
    };

    return{
        personal,
        getPersonal
    };
};
