// Important
// Select product
// (Each product must a space that contains the ingredients and information about them)

// Select packaging
// (Client must be able to view pictures of each packaging option)

// Select label type
// (This shows them the type of branding they want for thier product)

// Select shades
// (The content itself. E.g- Lipgloss / lipscrub

// Select flavors
// (scents)

// Drop down design
// (Submit designs, mockups,logo)

// Drop down additional notes
// (Other informations)

import SCProducts from "./SCItems";
import { storeLocally } from "../../../helpers/helpers";
import { useEffect } from "react";

const StartCreatingProducts = () => {
  const products = [
    {
      title: "Lip-gloss",
      description:
        "Choose from over 40 lipgloss shades and flavors to create a unique expeirence or your customers.",
      imgUrl:
        "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/341844942_933169231136780_2326713536018109483_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=5cbhmieXbLQAX-FBsCB&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA4MzU4MDUzMjkwNTQwNTIyNQ%3D%3D.2-ccb7-5&oh=00_AfCQ-p53fVr3_sJQ8a1OD3S5MRYo63-uyT6hMXZ40gGEzA&oe=64548A51&_nc_sid=6136e7",
      buyLink: "",
      steps: ["packaging", "flavor"],
      stepContent: [
        {
          stepNo: 1,
          stepName: "packaging",
          stepOptions: [
            {
              title: "packaging 1",
              description: "this is packaging 1",
              imgURL:
                "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/341844942_933169231136780_2326713536018109483_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=5cbhmieXbLQAX-FBsCB&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA4MzU4MDUzMjkwNTQwNTIyNQ%3D%3D.2-ccb7-5&oh=00_AfCQ-p53fVr3_sJQ8a1OD3S5MRYo63-uyT6hMXZ40gGEzA&oe=64548A51&_nc_sid=6136e7",
            },
            {
              title: "packaging 2",
              description: "this is packaging 2",
              imgURL:
                "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/341844942_933169231136780_2326713536018109483_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=5cbhmieXbLQAX-FBsCB&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA4MzU4MDUzMjkwNTQwNTIyNQ%3D%3D.2-ccb7-5&oh=00_AfCQ-p53fVr3_sJQ8a1OD3S5MRYo63-uyT6hMXZ40gGEzA&oe=64548A51&_nc_sid=6136e7",
            },
          ],
        },
        {
          stepNo: 2,
          stepName: "flavor",
          stepOptions: [
            {
              title: "flavor 1",
              description: "this is flavor 1",
              imgURL:
                "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/341844942_933169231136780_2326713536018109483_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=5cbhmieXbLQAX-FBsCB&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA4MzU4MDUzMjkwNTQwNTIyNQ%3D%3D.2-ccb7-5&oh=00_AfCQ-p53fVr3_sJQ8a1OD3S5MRYo63-uyT6hMXZ40gGEzA&oe=64548A51&_nc_sid=6136e7",
            },
            {
              title: "flavor 2",
              description: "this is flavor 2",
              imgURL:
                "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/341844942_933169231136780_2326713536018109483_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=5cbhmieXbLQAX-FBsCB&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA4MzU4MDUzMjkwNTQwNTIyNQ%3D%3D.2-ccb7-5&oh=00_AfCQ-p53fVr3_sJQ8a1OD3S5MRYo63-uyT6hMXZ40gGEzA&oe=64548A51&_nc_sid=6136e7",
            },
          ],
        },
      ],
    },

    {
      title: "Lip-scrub",
      description:
        "Choose from over 40 lipgloss shades and flavors to create a unique expeirence or your customers.",
      imgUrl:
        "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/341844942_933169231136780_2326713536018109483_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=5cbhmieXbLQAX-FBsCB&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA4MzU4MDUzMjkwNTQwNTIyNQ%3D%3D.2-ccb7-5&oh=00_AfCQ-p53fVr3_sJQ8a1OD3S5MRYo63-uyT6hMXZ40gGEzA&oe=64548A51&_nc_sid=6136e7",
      buyLink: "",
      steps: ["packaging"],
      stepContent: [
        {
          stepNo: 1,
          stepName: "packaging",
          stepOptions: [
            {
              title: "Berry Shine",
              description:
                "Grape ish purple in dazzling holographic glitters💜.",
              imgURL:
                "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/341844942_933169231136780_2326713536018109483_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=5cbhmieXbLQAX-FBsCB&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA4MzU4MDUzMjkwNTQwNTIyNQ%3D%3D.2-ccb7-5&oh=00_AfCQ-p53fVr3_sJQ8a1OD3S5MRYo63-uyT6hMXZ40gGEzA&oe=64548A51&_nc_sid=6136e7",
            },
            {
              title: "Berry Shine",
              description:
                "Grape ish purple in dazzling holographic glitters💜. She’s Berries scented and comes out a little tinted and clear on the lips. ",
              imgURL:
                "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/339329215_743713277480581_60823715177679472_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=0rAPEXX_UcAAX84_ofb&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3MzY3OTAxODI3MTIwNDYzMw%3D%3D.2-ccb7-5&oh=00_AfDmlTZvKeQaQLf8iZs9dpUg0R4MjS2j2Vy65W1FaIpo8g&oe=643C6C46&_nc_sid=6136e7",
            },
          ],
        },
      ],
    },

    {
      title: "Lip-balm",
      description:
        "Choose from over 40 lipgloss shades and flavors to create a unique expeirence or your customers. ",
      imgUrl:
        "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/341844942_933169231136780_2326713536018109483_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=5cbhmieXbLQAX-FBsCB&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA4MzU4MDUzMjkwNTQwNTIyNQ%3D%3D.2-ccb7-5&oh=00_AfCQ-p53fVr3_sJQ8a1OD3S5MRYo63-uyT6hMXZ40gGEzA&oe=64548A51&_nc_sid=6136e7",
      buyLink: "",
      steps: ["shade"],
      stepContent: [
        {
          stepNo: 1,
          stepName: "shade",
          stepOptions: [
            {
              title: "Mauve",
              description:
                "MAUVE is a tinted wine shade. A mixture of dark purple and dark wine. She’s berry and grape scented🍇",
              imgURL:
                "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/341844942_933169231136780_2326713536018109483_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=5cbhmieXbLQAX-FBsCB&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA4MzU4MDUzMjkwNTQwNTIyNQ%3D%3D.2-ccb7-5&oh=00_AfCQ-p53fVr3_sJQ8a1OD3S5MRYo63-uyT6hMXZ40gGEzA&oe=64548A51&_nc_sid=6136e7",
            },
            {
              title: "Berry Shine",
              description:
                "Grape ish purple in dazzling holographic glitters💜. She’s Berries scented and comes out a little tinted and clear on the lips. ",
              imgURL:
                "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/339329215_743713277480581_60823715177679472_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=0rAPEXX_UcAAX84_ofb&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3MzY3OTAxODI3MTIwNDYzMw%3D%3D.2-ccb7-5&oh=00_AfDmlTZvKeQaQLf8iZs9dpUg0R4MjS2j2Vy65W1FaIpo8g&oe=643C6C46&_nc_sid=6136e7",
            },
          ],
        },
      ],
    },

    {
      title: "Eyeliner",
      description:
        "Choose from over 40 lipgloss shades and flavors to create a unique expeirence or your customers.",
      imgUrl:
        "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/341844942_933169231136780_2326713536018109483_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=5cbhmieXbLQAX-FBsCB&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA4MzU4MDUzMjkwNTQwNTIyNQ%3D%3D.2-ccb7-5&oh=00_AfCQ-p53fVr3_sJQ8a1OD3S5MRYo63-uyT6hMXZ40gGEzA&oe=64548A51&_nc_sid=6136e7",
      buyLink: "",
      steps: ["packaging", "shade", "flavor"],
      stepContent: [
        {
          stepNo: 1,
          stepName: "packaging",
          stepOptions: [
            {
              title: "packaging 1 liner",
              description: "this is packaging 1",
              imgURL:
                "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/341844942_933169231136780_2326713536018109483_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=5cbhmieXbLQAX-FBsCB&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA4MzU4MDUzMjkwNTQwNTIyNQ%3D%3D.2-ccb7-5&oh=00_AfCQ-p53fVr3_sJQ8a1OD3S5MRYo63-uyT6hMXZ40gGEzA&oe=64548A51&_nc_sid=6136e7",
            },
            {
              title: "packaging 2 liner",
              description: "this is packaging 2",
              imgURL:
                "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/339329215_743713277480581_60823715177679472_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=0rAPEXX_UcAAX84_ofb&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3MzY3OTAxODI3MTIwNDYzMw%3D%3D.2-ccb7-5&oh=00_AfDmlTZvKeQaQLf8iZs9dpUg0R4MjS2j2Vy65W1FaIpo8g&oe=643C6C46&_nc_sid=6136e7",
            },
          ],
        },

        {
          stepNo: 2,
          stepName: "shade",
          stepOptions: [
            {
              title: "shade 1 liner",
              description: "this is shade 1",
              imgURL:
                "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/341844942_933169231136780_2326713536018109483_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=5cbhmieXbLQAX-FBsCB&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA4MzU4MDUzMjkwNTQwNTIyNQ%3D%3D.2-ccb7-5&oh=00_AfCQ-p53fVr3_sJQ8a1OD3S5MRYo63-uyT6hMXZ40gGEzA&oe=64548A51&_nc_sid=6136e7",
            },
            {
              title: "shade 2 liner",
              description: "this is shade 2",
              imgURL:
                "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/339329215_743713277480581_60823715177679472_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=0rAPEXX_UcAAX84_ofb&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3MzY3OTAxODI3MTIwNDYzMw%3D%3D.2-ccb7-5&oh=00_AfDmlTZvKeQaQLf8iZs9dpUg0R4MjS2j2Vy65W1FaIpo8g&oe=643C6C46&_nc_sid=6136e7",
            },
          ],
        },

        {
          stepNo: 3,
          stepName: "flavor",
          stepOptions: [
            {
              title: "flavor 1 liner",
              description: "this is flavor 1",
              imgURL:
                "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/341844942_933169231136780_2326713536018109483_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=5cbhmieXbLQAX-FBsCB&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA4MzU4MDUzMjkwNTQwNTIyNQ%3D%3D.2-ccb7-5&oh=00_AfCQ-p53fVr3_sJQ8a1OD3S5MRYo63-uyT6hMXZ40gGEzA&oe=64548A51&_nc_sid=6136e7",
            },
            {
              title: "flavor 2 liner",
              description: "this is flavor 2",
              imgURL:
                "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/339329215_743713277480581_60823715177679472_n.jpg?stp=dst-jpg_e35_p720x720&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=0rAPEXX_UcAAX84_ofb&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzA3MzY3OTAxODI3MTIwNDYzMw%3D%3D.2-ccb7-5&oh=00_AfDmlTZvKeQaQLf8iZs9dpUg0R4MjS2j2Vy65W1FaIpo8g&oe=643C6C46&_nc_sid=6136e7",
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    storeLocally("products", products);
  }, []);

  return (
    <div id="start-creating" className="py-10 mx-10 md:mx-20">
      <h1 className="text-labelme-wine text-2xl md:text-3xl font-semibold">
        Start Creating.
      </h1>
      <p className="mt-1 md:mt-3">Select a Product to get started.</p>

      <div className="flex flex-col md:grid md:grid-cols-4 space-y-10 md:space-y-0 md:space-x-5 mt-10 grid-flow-col-dense">
        {products.map((product, key) => (
          <SCProducts
            title={product.title}
            description={product.description}
            imgAlt={product.alt}
            imgUrl={product.imgUrl}
            buyLink={product.buyLink}
            nextStep={product.steps[0]}
            stepContent={product.stepContent}
          />
        ))}
      </div>
    </div>
  );
};

export default StartCreatingProducts;
