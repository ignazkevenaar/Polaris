import { ref } from "vue";

const windows = ref({});
const windowOrder = ref([]);

export function useWindowManager() {
  const register = () => {
    const newID = crypto.randomUUID();
    windows.value[newID] = {
      x: 50,
      y: 50,
      width: 300,
      height: 200,
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

  return { windows, windowOrder, register, bringToFront, move, resize };
}
