import { createServer, Model, Response } from "miragejs";

createServer({
  models: {
    item: Model,
    user: Model,
  },

  seeds(server) {
    server.create("item", {
      id: "1",
      name: "Outdoor Tent",
      price: 30,
      description:
        "The Outdoor Tent is perfect for adventurers who want a lightweight and portable shelter for their camping trips.",
      imageUrl: "./assets/images/outdoortent.png",
      type: "basic",
      hostId: "123",
    });

    server.create("item", {
      id: "2",
      name: "Professional Camera Kit",
      price: 50,
      description:
        "Capture stunning moments with the Professional Camera Kit. It includes a high-resolution camera body, versatile lenses, and accessories.",
      imageUrl: "./assets/images/professionalcamerakit.png",
      type: "premium",
      hostId: "456",
    });

    server.create("item", {
      id: "3",
      name: "Portable BBQ Grill",
      price: 20,
      description:
        "Enjoy delicious grilled meals anywhere with the Portable BBQ Grill. Compact yet powerful, it's ideal for picnics, camping, and outdoor gatherings.",
      imageUrl: "./assets/images/portablebbqgrill.png",
      type: "basic",
      hostId: "789",
    });

    server.create("item", {
      id: "4",
      name: "Camping Backpack",
      price: 40,
      description:
        "The Camping Backpack is designed for comfort and functionality on long hikes and outdoor adventures. It features multiple compartments and ergonomic design for all-day wear.",
      imageUrl: "./assets/images/campingbackpack.png",
      type: "premium",
      hostId: "123",
    });

    server.create("item", {
      id: "5",
      name: "Fishing GearSet",
      price: 25,
      description:
        "Get ready for a day of fishing with the Fishing Gear Set. It includes rods, reels, baits, and accessories for anglers of all skill levels.",
      imageUrl: "./assets/images/fishinggearset.png",
      type: "basic",
      hostId: "456",
    });

    server.create("item", {
      id: "6",
      name: "Luxury Camping Tent",
      price: 100,
      description:
        "Experience luxury in the wilderness with the Luxury Camping Tent. Spacious, waterproof, and with premium materials, it's designed for ultimate comfort in nature.",
      imageUrl: "./assets/images/luxurycampingtent.png",
      type: "premium",
      hostId: "789",
    });

    server.create("item", {
      id: "7",
      name: "Mountain Bike",
      price: 35,
      description:
        "Conquer rough terrains with the Mountain Bike. Designed for durability and performance, it's ideal for adventurous trail rides.",
      imageUrl: "./assets/images/mountainbike.png",
      type: "basic",
      hostId: "123",
    });

    server.create("item", {
      id: "8",
      name: "Diving Equipment Set",
      price: 70,
      description:
        "Explore the underwater world with the Diving Equipment Set. Includes masks, fins, and snorkels for an unforgettable diving experience.",
      imageUrl: "./assets/images/divingequipmentset.png",
      type: "premium",
      hostId: "456",
    });

    server.create("item", {
      id: "9",
      name: "Outdoor Cooking Set",
      price: 25,
      description:
        "Cook delicious meals outdoors with the Outdoor Cooking Set. Includes stove, cookware, and utensils for convenient outdoor dining.",
      imageUrl: "./assets/images/outdoorcookingset.png",
      type: "basic",
      hostId: "123",
    });

    server.create("item", {
      id: "10",
      name: "Camping Hammock",
      price: 30,
      description:
        "Relax in nature with the Camping Hammock. Lightweight and easy to set up, it's perfect for lounging or sleeping under the open sky.",
      imageUrl: "./assets/images/campinghammock.png",
      type: "basic",
      hostId: "789",
    });

    server.create("item", {
      id: "11",
      name: "OutdoorSolarCharger",
      price: 25,
      description:
        "Stay powered up outdoors with the Outdoor Solar Charger. Compact and efficient, it charges devices using renewable solar energy.",
      imageUrl: "./assets/images/outdoorsolarcharger.png",
      type: "basic",
      hostId: "456",
    });

    server.create("item", {
      id: "12",
      name: "BeachUmbrellaSet",
      price: 20,
      description:
        "Stay shaded and cool at the beach with the Beach Umbrella Set. Includes lightweight umbrellas for relaxation and sun protection.",
      imageUrl: "./assets/images/beachumbrellaset.png",
      type: "basic",
      hostId: "456",
    });

    server.create("user", {
      id: "123",
      email: "b@b.com",
      password: "p123",
      name: "Bob",
    });
  },
  routes() {
    this.namespace = "api";
    this.logging = false;

    this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);
      const user = schema.users.findBy({ email, password });

      if (!user) {
        return new Response(
          401,
          {},
          { error: "Invalid credentials. Please try again." }
        );
      }

      return {
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
        token: "mocked-token",
      };
    });
  },
});
