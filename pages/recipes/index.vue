<template>
  <v-layout>
    <v-flex text-xs-left>
       <v-btn color="primary" flat nuxt to="/">Back</v-btn>
            <li v-for="recipe of recipes" :key="recipe.id">
        <n-link :to="`/recipes/${recipe.slug}`">{{ recipe.title }} ; {{ description }} </n-link>
      </li>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
import config from '../../config/config';
export default {
    data ()
    {recipes: []
    },
  asyncData (context) {
    return axios.get(config.url + config.bucket_slug + '/object-type/recipes',{
            params: {
                read_key: config.read_key
            }
        })
      .then(res => {
        return {recipes : res.data.objects, description : res.data.objects[0].metadata.description}
      });
  }
};
        
</script>