<template>
  <div class="dockContainer">
    <div class="dock"></div>
  </div>
</template>

<style lang="css" scoped>
.dockContainer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.dock {
  height: 96px;
  min-width: 200px;
  background-color: grey;
  width: auto;
  border: 4px ridge #aaa;
  outline: 1px solid black;
}
</style>
