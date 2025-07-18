export const useFAQStore = defineStore("faq", {
  state: () => ({
    list: [
      {
        q: "What is More Food Expo Indonesia?",
        a: `
          <p>More Food Expo Indonesia is a specialized trade exhibition for the entire food industry chain. It covers everything from food materials and processing machinery to finished food and beverage products.</p>
          <p>The expo has a strong focus on connecting global enterprises with Indonesia's vast Halal market, serving as a key platform for business and networking in the F&B sector.</p>
        `,
      },
      {
        q: "When and where will the event be held?",
        a: `
          <p>The event will take place from 7-10 May 2026 at the Jakarta International Expo (JIEXPO), Kemayoran.</p>
          <p>We will be occupying Halls B1, B2, B3, C1, C2, and C3.</p>
        `,
      },
      {
        q: "What are the opening hours?",
        a: `
          <p>The exhibition is open for visitors from 10:00 AM to 8:00 PM every day from 7-10 May 2026.</p>
        `,
      },
      {
        q: "Who should visit this expo?",
        a: `
          <p>More Food Expo is a B2B (Business-to-Business) event, ideal for professionals in the food and beverage industry.</p>
          <p>This includes importers, distributors, restaurant and cafe owners, hotel managers, supermarket buyers, e-commerce merchants, and anyone looking to source new F&B products and suppliers.</p>
        `,
      },
      {
        q: "How do I get a ticket to visit?",
        a: `
          <p>You can register for your visitor pass through the 'Ticket' page on our website. We encourage pre-registration online to ensure a smooth entry process.</p>
        `,
      },
      {
        q: "I want to exhibit. How can I book a space?",
        a: `
          <p>We'd love to have you! You can find all the details and the application form on our 'Book Space' page.</p>
          <p>For direct inquiries, please contact our team. For local exhibitors: <strong>morefood@panoramamedia.co.id</strong>. For international exhibitors: <strong>outbound@huamogroup.com</strong>.</p>
        `,
      },
      {
        q: "What kind of programs or activities are there?",
        a: `
          <p>The expo is more than just an exhibition. We have a range of activities including:</p>
          <ul>
            <li><strong>Business Matching:</strong> Pre-arranged meetings with potential partners.</li>
            <li><strong>Conferences:</strong> Talks from industry leaders on the latest trends.</li>
            <li><strong>Chef Tasting:</strong> Live cooking demonstrations of new and innovative products.</li>
            <li><strong>Food KOL Live Stream:</strong> Watch popular food influencers broadcast live from the event.</li>
          </ul>
          <p>Please check our 'Programs' and 'Rundown' pages for the full schedule.</p>
        `,
      },
      {
        q: "Are there other events happening at the same time?",
        a: `
          <p>Yes! Your ticket to More Food Expo also gives you access to two other co-located events: the <strong>Franchise & License Expo Indonesia (FLEI)</strong> and the <strong>Cafe Brasserie Expo 2026</strong>.</p>
          <p>This gives you more opportunities to explore and network across different sectors of the industry in one visit.</p>
        `,
      },
      {
        q: "Is this event open to the public or for trade only?",
        a: `
          <p>More Food Expo is primarily a trade exhibition for business professionals. However, we welcome anyone with a strong interest in the F&B industry to attend. Business attire is recommended.</p>
        `,
      },
    ],
  }),
});
