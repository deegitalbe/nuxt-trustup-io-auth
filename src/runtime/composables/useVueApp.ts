import { useNuxtApp } from "#imports";

const useVueApp = () => {
  const { vueApp } = useNuxtApp();

  return vueApp;
};

export default useVueApp;
