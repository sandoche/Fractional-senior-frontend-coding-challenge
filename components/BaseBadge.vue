<template>
  <span
    class="
      bg-gray-100
      group-hover:bg-gray-200
      ml-3
      inline-block
      py-0.5
      px-3
      text-xs
      font-medium
      rounded-full
    "
    x-state:on="Current"
    x-state:off="Default"
    x-state-description='Current: "bg-white", Default: "bg-gray-100 group-hover:bg-gray-200"'
  >
    <slot></slot>
  </span>
</template>