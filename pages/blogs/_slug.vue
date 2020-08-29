<template>
  <div v-if="$fetchState.pending">Fetching blog #{{$route.params.id}}...</div>
  <div v-else>
    <h1>{{ blog.title }}</h1>
    <pre>{{ blog.body }}</pre>
    <p><n-link to="/">Back to blogs</n-link></p>
  </div>
</template>

<script>
import axios from "axios";
import config from '../config/config';
  export default {
    data() {
      return {
        blog: {}
      }
    },
    async fetch() {
    return axios.get(config.url + config.bucket_slug + '/object-type/blogs',{
            params: {
                read_key: config.read_key
            }
        })
      .then(res => {
        return {title : res.data.objects[0].title, body: res.data.objects[0].content, image:res.data.objects[0].metadata.image.url}
      });
  }
  };

</script>