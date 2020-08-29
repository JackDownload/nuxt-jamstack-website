<template>
  <v-layout>
    <v-flex text-xs-left>
       <v-btn color="primary" flat nuxt to="/">Back</v-btn>
      <h1>{{blogs.title}}</h1><br>
            <li v-for="blog of blogs" :key="blog.id">
        <n-link :to="`/blogs/${blog.slug}`">{{ blog.title }}</n-link>
      </li>
      <div>
      <img
        :src="`${blogs.image}`"
        alt="Fitness_quotes"
        class="mb-5"
      >
      </div>
      <h1>{{blogs.body}}</h1>
      <br>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
import config from '../../config/config';
export default {
    data ()
    {bolgs: []
    },
  asyncData (context) {
    return axios.get(config.url + config.bucket_slug + '/object-type/blogs',{
            params: {
                read_key: config.read_key
            }
        })
      .then(res => {
        return {blogs : res.data.objects}
      });
  }
};
        
</script>