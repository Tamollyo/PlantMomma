<template>
  <div>
    <div>
      <h1>{{tag}}</h1>
    </div>
    <div>
      {{description}}
    </div>
    <div>
      {{ schedule }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TaskCard',
    props: {
      tag: String,
      description: String,
      schedule: String,
    },
  }
</script>