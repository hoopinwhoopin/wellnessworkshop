import  { createClient } from "@sanity/client";

export default createClient({
  projectId: "2xew8dub", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: '2021-08-31'
});