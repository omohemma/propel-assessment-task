import { ref } from "vue";

export const useCustomHover = (initial = {}) => {
    const hover = ref(initial);

    const toggleHoverState = (index) => {
        if (hover.value[index] !== undefined) {
            hover.value[index] = !hover.value[index];
        }
        hover.value = { [index]: true, ...hover.value };
    };

    return { hover, toggleHoverState };
};
