import { nextTick } from "vue";

export const injectStyles = async (sourceElement, targetDocument) => {
  await nextTick();

  const passVariable = (variableName) => {
    const currentValue =
      getComputedStyle(sourceElement).getPropertyValue(variableName);
    targetDocument.style.setProperty(variableName, currentValue);
  };

  passVariable("--font-family");
  passVariable("--font-size");
  passVariable("--color-tertiary-active");
  passVariable("--color-surface-active");
};
