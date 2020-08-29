<template>
  <v-layout>
    <v-flex text-xs-left>
       <v-btn color="primary" flat nuxt to="/">Back</v-btn>
      <h1>{{blog.title}}</h1><br>
      <div>
      <img
        :src="`${blog.image}`"
        alt="Fitness_quotes"
        class="mb-5"
      >
      </div>
      <div v-html="body"></div>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
import config from '../config/config';
export default {
  asyncData (context) {
    return axios.get(config.url + config.bucket_slug + '/object-type/blogs',{
            params: {
                read_key: config.read_key
            }
        })
      .then(res => {
        return {title : res.data.blogs.title, body: res.data.blogs.content, image:res.data.blogs.metadata.image.url}
      });
  }
};

</script>
