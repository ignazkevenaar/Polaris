import { computed, ref, shallowRef } from "vue";

const windows = ref({});
const windowOrder = ref([]);
const hiddenWindows = ref(new Set());

export function useWindowManager() {
  const register = (name, component, options) => {
    const newID = crypto.randomUUID();
    windows.value[newID] = {
      component: shallowRef(component),
      name: name,
      x: 50,
      y: 50,
      width: 300,
      height: 200,
      ...options,
    };

    windowOrder.value.push(newID);
  };

  const bringToFront = (windowID) => {
    const index = windowOrder.value.indexOf(windowID);
    if (index < 0) {
      console.error("No window!");
    }

    const element = windowOrder.value.splice(index, 1);
    windowOrder.value.splice(windowOrder.value.length, 0, element[0]);
  };

  const move = (windowID, position) => {
    const window = windows.value[windowID];
    window.x = position.x;
    window.y = position.y;
  };

  const resize = (windowID, size) => {
    const window = windows.value[windowID];
    window.width = size.width;
    window.height = size.height;
  };

  const close = (windowID) => {
    delete windows.value[windowID];
    const orderIndex = windowOrder.value.indexOf(windowID);
    windowOrder.value.splice(orderIndex, 1);
  };

  const hide = (windowID) => {
    hiddenWindows.value.add(windowID);
  };

  const show = (windowID) => {
    hiddenWindows.value.delete(windowID);
    bringToFront(windowID);
  };

  const registerOrSwitch = (name, component, data) => {
    if (openWindowNames.value.has(name)) {
      const windowID = Object.entries(windows.value).find(
        ([, window]) => window.name === name,
      )[0];
      show(windowID);
      return;
    }

    register(name, component, data);
  };

  const openWindowNames = computed(() => {
    const nameSet = new Set();
    Object.values(windows.value).map((window) => nameSet.add(window.name));
    return nameSet;
  });

  return {
    windows,
    windowOrder,
    hiddenWindows,
    openWindowNames,
    register,
    bringToFront,
    registerOrSwitch,
    move,
    resize,
    close,
    hide,
    show,
  };
}
