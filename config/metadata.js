// config/metadata.js

export const getMetadata = (page) => {
  switch (page) {
    case "about":
      return {
        title: "About Us",
        description:
          "Maidaan, a trusted partner, helps you explore the unique gems of real estate marketing.",
      };
    case "contact":
      return {
        title: "Contact Us",
        description: "Get in touch with us.",
      };
    case "investInDubai":
      return {
        title: "invest In Dubai",
        description:
          "Unlock lucrative investment opportunities in Dubai. From real estate to startups, discover high returns in the heart of the Middle East",
      };
    case "propertyKaMaidaan":
      return {
        title: "Property Ka Maidaan",
        description:
          "Unlock lucrative investment opportunities in Dubai and Pakistan. From real estate to startups, discover high returns in the heart of the Middle East",
      };
    case "discoverdubai":
      return {
        title: "Discover Dubai",
        description:
          "Unlock lucrative investment opportunities in Dubai. From real estate to startups, discover high returns in the heart of the Middle East",
      };
    case "investInpak":
      return {
        title: "invest In Pakistan",
        description:
          "Explore promising investment prospects in Pakistan's growing economy for potential high returns",
      };
    case "services":
      return {
        title: "Services",
        description: "Real Estate Solutions",
      };
    case "blog":
      return {
        title: "Blog",
        description:
          "Real estate: where dreams meet brick and mortar, shaping lives and communities",
      };
      case "qatar":
        return {
          title: "Qatar",
          description:
            "Property Ka Maidaan Doha: where dreams meet brick and mortar, shaping lives and communities",
        };
        case "uk":
          return {
            title: "Uk",
            description:
              "Exclusive Invite-Only Seminar: Pakistan Property Talk with Maidaan! Are you curious about real estate taxes in Pakistan",
          };
          case "lahore":
            return {
              title: "Lahore",
              description:
                "Property Ka Maidaan Lahore: Bridging Local and International Investments",
            };
            case "mirpur":
            return {
              title: "MirPur",
              description:
                "Property Ka Maidaan Mirpur: A Hub of Lucrative Investment Prospects",
            };
    case "home":
      return {
        title: "Maidaan - Simplifying Real Estate",
        description: "Unlock The Door To Your Dream Property With Maidaan",
      };

    default:
      return {
        title: "Maidaan - Simplifying Real Estate",
        description: "Unlock The Door To Your Dream Property With Maidaan",
      };
  }
};
