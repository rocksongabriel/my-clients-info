<template>
  <div class="space-y-6 shadow-2xl">
    <div v-for="client in clients_info" :key="client.key">
      <ClientCard :client="client" />
    </div>
  </div>
</template>

<script>
import ClientCard from "../dashboard/ClientCard";

export default {
  name: "ClientsInfoCard",
  data() {
    return {
      clients_info: [
        {
          id: 1,
          "Company Name": "Amazon Incorporation",
          "Owner Name": "Jeff Bezoz",
          "Contact Name": "CEO of Amazon",
          "Contact Email": "ceo@amazon.com",
          "Contact Phone": "+23355234882",
          "Contact Website": "http://www.amazon.com",
          "Problem of Company": "Bad looking website",
          "Source of Info": "LinkedIN",
          "Link to Source": "http://linkedin.com/amazon.com",
          Address: "Sans Francisco - Amazon",
        },
        {
          id: 2,
          "Company Name": "Google",
          "Owner Name": "Sergey Brin",
          "Contact Name": "Founder of Google",
          "Contact Email": "ceo@amazon.com",
          "Contact Phone": "+23355234882",
          "Contact Website": "http://www.amazon.com",
          "Problem of Company": "Bad looking website",
          "Source of Info": "LinkedIN",
          "Link to Source": "http://linkedin.com/amazon.com",
          Address: "Sans Francisco - Amazon",
        },
        {
          id: 3,
          "Company Name": "Facebook",
          "Owner Name": "Mark Zuckerberg",
          "Contact Name": "Founder of Google",
          "Contact Email": "ceo@amazon.com",
          "Contact Phone": "+23355234882",
          "Contact Website": "http://www.amazon.com",
          "Problem of Company": "Bad looking website",
          "Source of Info": "LinkedIN",
          "Link to Source": "http://linkedin.com/amazon.com",
          Address: "Sans Francisco - Amazon",
        },
      ],
    };
  },
  props: ["client"],
  components: {
    ClientCard,
  },
};
</script>
