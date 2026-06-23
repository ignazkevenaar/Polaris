import BrowserApplication from "../components/applications/BrowserApplication.vue";
import ContainerApplication from "../components/applications/ContainerApplication.vue";
import EightBallApplication from "../components/applications/EightBallApplication.vue";
import FontApplication from "../components/applications/FontApplication.vue";
import TestApplication from "../components/applications/TestApplication.vue";
import ThemeApplication from "../components/applications/ThemeApplication.vue";
import XEyesApplication from "../components/applications/XEyesApplication.vue";

export default {
  test: {
    name: "Test, but it's actually very very long which might prove a problem...",
    title: "someTitle",
    component: TestApplication,
    icon: "application",
  },
  eyes: {
    name: "XEyes",
    title: "XEyes",
    component: XEyesApplication,
    icon: "eyes",
    contentWidth: 192,
    contentHeight: 186,
    transparent: true,
    minimizable: false,
  },
  container: {
    name: "Container",
    title: "Container",
    component: ContainerApplication,
    icon: "application",
    width: 300,
    height: 200,
    resizable: true,
    items: ["eyes", "test", "eyes", "test", "eyes", "test"],
  },
  browser: {
    name: "Browser",
    component: BrowserApplication,
    icon: "browser",
    resizable: true,
    width: 800,
    height: 600,
  },
  eightBall: {
    name: "Magic 8-Ball",
    title: "Shake me",
    component: EightBallApplication,
    icon: "eightball",
    contentWidth: 256,
    contentHeight: 256,
    transparent: true,
    minimizable: false,
  },
  theme: {
    name: "Themes",
    title: "Themes",
    component: ThemeApplication,
    icon: "palette",
    width: 600,
  },
  font: {
    name: "Fonts",
    title: "Fonts",
    component: FontApplication,
    icon: "fonts",
    width: 600,
    height: 400,
  },
};
