import TestApplication from "../components/applications/TestApplication.vue";
import XEyesApplication from "../components/applications/XEyesApplication.vue";

export default {
  test: {
    name: "Test",
    title: "someTitle",
    component: TestApplication,
    icon: "application",
  },
  eyes: {
    name: "XEyes",
    title: "XEyes",
    component: XEyesApplication,
    icon: "eyes",
    width: 188,
    height: 186,
    transparent: true,
    minimizable: false,
  },
};
