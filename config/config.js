const config = {
    bucket_name: process.env.JAMSTACK_APP_BUCKET_SLUG || "Vassfazek002",
    bucket_slug: process.env.JAMSTACK_APP_BUCKET_SLUG || "vassfazek002",
    bucket_id: process.env.JAMSTACK_APP_BUCKET_ID || "5f3b3e580f442600084661b7",
    read_key: process.env.JAMSTACK_APP_BUCKET_READ_KEY || "CpML32w8ccjlpnIYcrENH6Z51KRKzYnyhzlPlt9RPGHSqIyOaW",
    write_key: process.env.JAMSTACK_APP_BUCKET_WRITE_KEY || "R62AWrRNgaixnNFZy56TsnBqglleAxcKPo4QaLpUxtSDOTrbsO",
    url: "https://api.cosmicjs.com/v1/"
  }
  export default config;
