import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        missionPageTitle: "Our Mission",
        missionHeroLine1: "Built With Purpose.",
        missionHeroHighlight: "Driven By Excellence.",
        missionHeroDesc:
          "At GN Constructions, our mission is to deliver precision craftsmanship, unwavering integrity, and lasting value in every structure we create.",

        missionCommitmentTitle: "Our Commitment",
        missionCommitmentText:
          "Construction is more than materials and machinery. It is discipline, accountability, and execution. Every project represents a promise — to build safely, deliver on schedule, and exceed expectations through craftsmanship that stands the test of time.",

        missionValuesTitle: "Our Core Values",

        missionValue1Title: "Integrity",
        missionValue1Desc:
          "Transparent communication and honest execution from start to finish.",

        missionValue2Title: "Precision",
        missionValue2Desc:
          "Strategic planning and attention to every structural detail.",

        missionValue3Title: "Craftsmanship",
        missionValue3Desc:
          "Elite workmanship backed by professional standards and experience.",

        missionStatement:
          "We build structures that stand strong — and relationships that last longer.",

        missionStat1Top: "100%",
        missionStat1Bottom: "Licensed & Insured",

        missionStat2Top: "RBQ",
        missionStat2Bottom: "Certified Professionals",

        missionStat3Top: "QC",
        missionStat3Bottom: "Serving Montreal & Surroundings",

        missionCtaTitle: "Ready to Build Something Exceptional?",
        heroTitleLine1: "Building Your",
        heroTitleHighlight: "Legacy",
        heroTitleLine2: "With Precision",
        heroDesc:
          "GN Constructions provides elite renovation and construction services. From basements to kitchens, we deliver excellence.",
        getQuote: "Get a Quote",
        ourServices: "Our Services",
        whoWeAre: "Who We Are",

        kitchenTitle: "Kitchen Remodeling",
        kitchenDesc:
          "Expert kitchen transformations that blend style and functionality.",

        bathroomTitle: "Bathroom Renovations",
        bathroomDesc: "Modern bathroom designs with high-quality finishes.",

        basementTitle: "Basement Finishing",
        basementDesc:
          "Transform your basement into a beautiful, liveable space.",
        servicesPageTitle: "Our Services",
        servicesPageSubtitle:
          "Detailed pricing and scope for our most popular renovation services.",
        pricingTitle: "Estimated {{title}} Pricing",
        serviceItem: "SERVICE ITEM",
        startingFrom: "STARTING FROM",
        pricingDisclaimer:
          "* Prices are estimates and vary based on material choice and project complexity.",
        considerationsTitle: "Things to Consider",

        services: [
          {
            id: "basement",
            title: "Basement Renovations",
            image:
              "https://st.hzcdn.com/simgs/pictures/basements/61e-rue-nicolas-savard-immobilier-et-construction-img~97919a5d04efdc0e_9-4915-1-84734f1.jpg",
            content: [
              "Transforming your basement is like adding a whole new floor to your house without expanding the foundation.",
              "In Montreal, many homeowners renovate basements to create family rooms, home offices, rental units, or entertainment spaces.",
              "We tailor each project to your space and budget — whether it's raw concrete or a full modernization.",
            ],
            averagePrice:
              "Full basement finishing typically ranges between $15,000 and $35,000 depending on size and specifications.",
            features: [
              "Moisture barrier & insulation",
              "Custom dry bar or home theater",
              "Full bathroom additions",
              "Egress window installation",
            ],
            pricing: [
              { item: "Drywall + taping + painting", price: "$4.50 / ft²" },
              { item: "Vinyl flooring", price: "$5 / ft²" },
              { item: "Ceramic flooring (mid-range)", price: "$17 / ft²" },
              { item: "Wall insulation (R-12 to R-20)", price: "$2.50 / ft²" },
              { item: "Interior door (standard)", price: "$450" },
            ],
            considerations: [
              "Proper waterproofing and drainage are critical.",
              "Use moisture-resistant flooring materials.",
              "Ceiling height impacts rental compliance.",
            ],
          },

          {
            id: "bathroom",
            title: "Bathroom Renovations",
            image:
              "https://adaconstruction.ca/wp-content/uploads/2025/05/Bathroom-Remodeling.webp",
            content: [
              "A bathroom renovation is a true investment in comfort and property value.",
              "We offer complete bathroom remodels throughout Montreal.",
              "A standard renovation typically ranges between $15,000 and $35,000.",
            ],
            features: [
              "Custom walk-in showers",
              "Heated flooring systems",
              "Premium tiling",
              "Smart plumbing fixtures",
            ],
            pricing: [
              { item: "Ceramic floor (mid-range)", price: "$17 / ft²" },
              { item: "Ceramic shower wall", price: "$22 / ft²" },
              { item: "Tempered glass shower door", price: "$1,500" },
              { item: "Standard toilet", price: "$650" },
              { item: '36" vanity', price: "$1,200" },
            ],
            considerations: [
              "Ventilation is crucial due to humidity.",
              "Moving plumbing increases cost.",
              "Heated floors add comfort and value.",
            ],
          },

          {
            id: "kitchen",
            title: "Kitchen Renovations",
            image:
              "https://media.minto.com/slideshows/1643/5_haddon_hall_2255_rue_lambert_closse_montreal_kitchen.jpg",
            content: [
              "The kitchen is the heart of the home and one of the most profitable renovations.",
              "For a standard 150 ft² kitchen, costs range between $20,000 and $55,000.",
              "Includes demolition, flooring, cabinetry, countertops, backsplash, plumbing, and electrical.",
            ],
            features: [
              "Cabinet refacing or replacement",
              "Quartz & granite countertops",
              "Layout optimization",
              "Under-cabinet lighting",
            ],
            pricing: [
              { item: "Melamine cabinets", price: "$300 / linear foot" },
              { item: "Quartz countertop", price: "$80 / ft²" },
              { item: "Ceramic backsplash", price: "$22 / ft²" },
              { item: "Vinyl flooring", price: "$6.25 / ft²" },
            ],
            considerations: [
              "Invest in smart storage solutions.",
              "Neutral finishes retain long-term value.",
              "Proper work triangle improves efficiency.",
            ],
          },
          {
            id: "drywall",
            title: "Drywall Renovation Steps",
            image:
              "https://www.drywallproscleveland.com/wp-content/uploads/2021/02/Cleveland-Drywall-Pros-Drywall-Repair-2.jpg",
            content: [
              "Most homes in North America have walls finished with drywall. It uses affordable materials and offers a modern, sleek look. Some common drywall renovation projects in Montreal include: Plastering and painting an apartment wall between tenants; Replacing drywall after water damage (common in Montreal!); Adding a new room division or modifying the floor plan of a property; Fixing holes in the wall caused by accidents; Painting rooms with different colors for aesthetic purposes.",
              "For any of these projects, there are four main steps involved in drywall renovation: First, frame the walls. Second, install drywall sheets onto the framing. Third, plaster the joints and corners. Finally, prime and paint the drywall to your desired color. Extra: Installing Baseboard on the joint between your floor and wall.",
              "Note: ALL PRICES INCLUDE MATERIALS! THESE ARE VOLUME PRICES, PATCHES ARE SIGNIFICANTLY MORE COSTLY!",
            ],
            features: [
              "Framing: 2x4 wooden studs, 16-inch standard spacing",
              "Drywall Hanging: Custom sizing and mold-tough options",
              "Plastering: Professional 3-coat process",
              "Painting: 1 coat primer + 2 coats paint",
              "Baseboard: Pre-painted installation",
            ],
            pricing: [
              {
                item: "Framing (8 foot tall wall)",
                price: "$10.30 / Linear Foot",
              },
              { item: "Drywall Hanging", price: "$1.30 / Square Foot" },
              { item: "Mold tough drywall", price: "+$0.60 / Square Foot" },
              {
                item: "Standard 3 coats of plaster",
                price: "$1.55 / Square Foot",
              },
              {
                item: "Prime and paint (2 layers)",
                price: "$1.25 / Square Foot",
              },
              { item: "Paint baseboard and trim", price: "$3 / Linear Foot" },
              { item: "Install baseboard", price: "$6.45 / Linear Foot" },
            ],
            considerations: [
              "The standard in Quebec is to lay studs every 16 inches. 24 inches makes your wall significantly weaker.",
              "Plastering usually takes 3 coats and 3 days to do.",
              "If painting an already painted wall, you can afford to do 2 coats without a primer.",
            ],
          },
          {
            id: "flooring",
            title: "Flooring Renovation",
            image:
              "https://images.squarespace-cdn.com/content/v1/6373db11a264167b4fdd326a/48c7dbf5-b7a6-41a1-8c4a-7f5fb02b9993/IMG_5651.jpg",
            content: [
              "New flooring can make a huge difference in a homes look, feel and value. Really good flooring can last a lifetime. Here are some of the main flooring projects we do in Montreal: Subfloor, Vinyl Flooring, Hardwood Flooring, Engineered Hardwood Flooring, and Sanding hardwood Flooring.",
              "Note: All PRICES INCLUDE MATERIALS AND LABOR. Demolition is NOT included in these prices.",
            ],
            features: [
              "Subfloor stabilization and leveling",
              "Vinyl: 100% Water-resistant options",
              "Hardwood: Timeless Oak, Maple, or Walnut",
              "Engineered: High stability for basements/condos",
              "Refinishing: Dust-contained sanding and sealing",
            ],
            pricing: [
              {
                item: "Remove and install new plywood subfloor",
                price: "$6.33 / Square Foot",
              },
              {
                item: "Install standard click vinyl",
                price: "$5.00 / Square Foot",
              },
              {
                item: "Install standard hardwood flooring",
                price: "$10.12 / Square Foot",
              },
              {
                item: "Install standard engineered hardwood",
                price: "$7.50 / Square Foot",
              },
              {
                item: "Sand, stain and varnish hardwood",
                price: "$4.95 / Square Foot",
              },
            ],
            considerations: [
              "Squeaking is almost always due to movement in the subfloor.",
              "Vinyl is an excellent choice for basements and kitchens due to water resistance.",
              "Hardwood is not recommended for bathrooms or basements unless engineered wood is used.",
            ],
          },
          {
            id: "ceramic",
            title: "Ceramic Renovations",
            image:
              "https://img.freepik.com/premium-photo/before-after-photos-grouting-ceramic-tiles-home-renovation-repair-work-concept-home-renovation-grouting-ceramic-tiles-before-after-repair-work_918839-43247.jpg?w=2000",
            content: [
              "Ceramic tile is a versatile material that can greatly enhance the look and function of a home in Montreal. Whether for walls, floors, or specialized projects like showers and backsplashes, ceramic offers durability and style. Here are some of the most common ceramic projects we handle: Ceramic flooring, Ceramic walls, Backsplashes, Ceramic showers, and Heated floors under ceramic.",
              "Before installing ceramic tile, it’s essential to have a solid, clean, and level subfloor or wall surface. In older Montreal homes and basements, extra attention is needed to ensure the surface can properly support the tile and prevent cracking. Schluter trims are often installed at edges and corners to protect and finish the tile edges neatly.",
              "Note: ALL PRICES INCLUDE MATERIALS AND LABOR. Demolition is NOT included in these prices.",
            ],
            features: [
              "Schluter waterproofing membrane systems",
              "Precise tile layout and leveling",
              "Professional grout sealing",
              "Custom backsplash designs",
              "Heated floor system integration",
            ],
            pricing: [
              {
                item: "Floor/Wall Ceramic + Membrane + Grout",
                price: "$17.00 / Square Foot",
              },
              {
                item: "Backsplash installation",
                price: "$20.00 / Square Foot",
              },
              {
                item: "Shower Ceramic + Membrane + Grout",
                price: "$22.00 / Square Foot",
              },
              {
                item: "Heated floor installation (under ceramic)",
                price: "$10.00 / Square Foot",
              },
            ],
            considerations: [
              "Older homes require subfloor preparation to prevent tile cracking.",
              "Waterproofing with Schluter membranes is essential for showers.",
              "Heated floors add significant comfort during Montreal winters.",
            ],
          },
          {
            id: "stairs",
            title: "Renovate your Stairs",
            image:
              "https://www.nsbuilt.com/wp-content/uploads/2023/04/Huxtable-Stairs-1-750x412.jpg",
            content: [
              "Stairs are complicated pieces of carpentry that have different tiers of artistry. The first step is rough carpentry—building the actual structure. This is crucial; if you don't get your rough carpentry right, you might get a wonky staircase or a safety hazard. We have extensive experience with Montreal stairs, which often barely fit the space, requiring solid planning.",
              "You can finish your stairs in several ways: Hardwood for a high-end look, Carpet for warmth and safety, or Vinyl for durability and easy cleaning. Guardrails and railings are also essential for safety and add character with materials like wood, metal, or glass.",
            ],
            features: [
              "Structural rough stair carpentry",
              "Hardwood treads and custom staining",
              "Quiet and comfortable carpet installation",
              "Durable, moisture-resistant vinyl steps",
              "Custom railings, balusters, and newel posts",
            ],
            pricing: [
              { item: "Rough Stair Carpentry", price: "$3,000 - $6,000" },
              { item: "Hardwood stairs", price: "$150 / Step" },
              { item: "Carpet on stairs", price: "$40 / Step" },
              { item: "Vinyl steps", price: "$80 / Step" },
              { item: "Handrails", price: "$75 / Linear Foot" },
              { item: "Baluster", price: "$30 / Unit" },
              { item: "Newel Post", price: "$200 / Unit" },
            ],
            considerations: [
              "Landing bases and angled steps increase structural complexity.",
              "Hardwood treads take a lot of craftsmanship and precise cuts.",
              "Vinyl is excellent for high-traffic areas with pets or families.",
            ],
          },
        ],
        navHome: "Home",
        navServices: "Services",
        navContact: "Contact",
        getQuote: "Get a Quote",
        servicesPageTitle: "Our Services",
        servicesPageSubtitle:
          "Detailed pricing and scope for our most popular renovation services.",
        contactTitle: "Contact Us",
        contactSubtitle:
          "Ready to start? Get in touch with us for a free estimate and professional advice.",
        formQuoteTitle: "Get a Free Quote",
        labelName: "Full Name *",
        labelEmail: "Email Address *",
        labelPhone: "Phone Number (Optional)",
        labelDetails: "Project Details *",
        placeholderDetails:
          "Tell us about your project, target budget, and timeline...",
        btnSend: "Send Message",
        btnSending: "Sending...",
        successMsg: "Thank you! We'll get back to you within 24 hours.",
        errorMsg: "Something went wrong. Please call us directly.",
        reachOutTitle: "Reach Out Directly",
        testimonialsTitle: "What Our Clients Say",
        galleryTitle: "Our Project Gallery",
        testimonials: [
          {
            name: "John Peterson",
            role: "Homeowner",
            content:
              "GN Constructions transformed our basement into the playroom of our dreams. Professional, on-time, and fair pricing.",
            rating: 5,
          },
          {
            name: "Sarah Leclair",
            role: "Kitchen Renovation",
            content:
              "The attention to detail in our kitchen remodel was outstanding. Highly recommend for any high-end finishes.",
            rating: 5,
          },
          {
            name: "Marc-André",
            role: "Bathroom Project",
            content:
              "Quick and efficient. They handled the permits and everything. Very satisfied with the result.",
            rating: 5,
          },
        ],
      },
    },
    fr: {
      translation: {
        missionPageTitle: "Notre Mission",
        missionHeroLine1: "Construire avec intention.",
        missionHeroHighlight: "Exécuter avec excellence.",
        missionHeroDesc:
          "Chez GN Constructions, notre mission est d’offrir un savoir-faire précis, une intégrité constante et une valeur durable dans chaque projet que nous réalisons.",

        missionCommitmentTitle: "Notre Engagement",
        missionCommitmentText:
          "La construction va bien au-delà des matériaux et de la machinerie. Elle repose sur la discipline, la responsabilité et l’exécution. Chaque projet représente une promesse : construire en toute sécurité, respecter les délais et dépasser les attentes grâce à un travail qui traverse le temps.",

        missionValuesTitle: "Nos Valeurs Fondamentales",

        missionValue1Title: "Intégrité",
        missionValue1Desc:
          "Une communication transparente et une exécution honnête du début à la fin.",

        missionValue2Title: "Précision",
        missionValue2Desc:
          "Une planification stratégique et une attention rigoureuse à chaque détail.",

        missionValue3Title: "Savoir-faire",
        missionValue3Desc:
          "Un travail d’élite soutenu par des standards professionnels élevés.",

        missionStatement:
          "Nous construisons des structures solides — et des relations encore plus durables.",

        missionStat1Top: "100%",
        missionStat1Bottom: "Licencié & Assuré",

        missionStat2Top: "RBQ",
        missionStat2Bottom: "Professionnels certifiés",

        missionStat3Top: "QC",
        missionStat3Bottom: "Montréal & environs",

        missionCtaTitle: "Prêt à construire quelque chose d’exceptionnel ?",
        heroTitleLine1: "Construire Votre",
        heroTitleHighlight: "Héritage",
        heroTitleLine2: "Avec Précision",
        heroDesc:
          "GN Constructions offre des services de rénovation et de construction de qualité supérieure. Des sous-sols aux cuisines, nous livrons l'excellence.",
        getQuote: "Obtenir un Devis",
        ourServices: "Nos Services",
        whoWeAre: "Qui Sommes-Nous",

        kitchenTitle: "Rénovation de Cuisine",
        kitchenDesc:
          "Transformations de cuisine expertes alliant style et fonctionnalité.",

        bathroomTitle: "Rénovations de Salle de Bain",
        bathroomDesc:
          "Conceptions modernes avec des finitions de haute qualité.",

        basementTitle: "Aménagement de Sous-sol",
        basementDesc:
          "Transformez votre sous-sol en un espace magnifique et habitable.",

        servicesPageTitle: "Nos Services",
        servicesPageSubtitle:
          "Tarifs détaillés et portée de nos services de rénovation les plus populaires.",
        pricingTitle: "Estimation des prix - {{title}}",
        serviceItem: "ARTICLE",
        startingFrom: "À PARTIR DE",
        pricingDisclaimer:
          "* Les prix sont des estimations et varient selon les matériaux et la complexité du projet.",
        considerationsTitle: "Points à considérer",

        services: [
          {
            id: "basement",
            title: "Aménagement de Sous-sol",
            image:
              "https://st.hzcdn.com/simgs/pictures/basements/61e-rue-nicolas-savard-immobilier-et-construction-img~97919a5d04efdc0e_9-4915-1-84734f1.jpg",
            content: [
              "Transformer votre sous-sol, c’est comme ajouter un nouvel étage sans modifier les fondations.",
              "À Montréal, plusieurs propriétaires rénovent leur sous-sol pour créer une salle familiale, un bureau à domicile ou un logement locatif.",
              "Nous adaptons chaque projet à votre espace et à votre budget.",
            ],
            averagePrice:
              "Un aménagement complet varie généralement entre 15 000 $ et 35 000 $ selon la superficie et les spécifications.",
            features: [
              "Barrière contre l’humidité et isolation",
              "Bar personnalisé ou cinéma maison",
              "Ajout de salle de bain complète",
              "Installation de fenêtre de sortie",
            ],
            pricing: [
              {
                item: "Gypse + tirage de joints + peinture",
                price: "4,50 $ / pi²",
              },
              { item: "Plancher vinyle", price: "5 $ / pi²" },
              { item: "Céramique (milieu de gamme)", price: "17 $ / pi²" },
              { item: "Isolation murale", price: "2,50 $ / pi²" },
              { item: "Porte intérieure standard", price: "450 $" },
            ],
            considerations: [
              "Une bonne étanchéité est essentielle.",
              "Choisir des matériaux résistants à l’humidité.",
              "La hauteur du plafond peut affecter la conformité.",
            ],
          },
          {
            id: "bathroom",
            title: "Rénovation de Salle de Bain",
            image:
              "https://adaconstruction.ca/wp-content/uploads/2025/05/Bathroom-Remodeling.webp",
            content: [
              "Une rénovation de salle de bain est un investissement en confort et en valeur immobilière.",
              "Nous réalisons des rénovations complètes partout à Montréal.",
              "Un projet standard varie entre 15 000 $ et 35 000 $.",
            ],
            features: [
              "Douche à l’italienne personnalisée",
              "Plancher chauffant",
              "Céramique haut de gamme",
              "Plomberie moderne",
            ],
            pricing: [
              { item: "Céramique plancher", price: "17 $ / pi²" },
              { item: "Mur de douche en céramique", price: "22 $ / pi²" },
              { item: "Porte de douche en verre trempé", price: "1 500 $" },
              { item: "Toilette standard", price: "650 $" },
              { item: 'Vanité 36"', price: "1 200 $" },
            ],
            considerations: [
              "Une bonne ventilation est essentielle.",
              "Déplacer la plomberie augmente les coûts.",
              "Le plancher chauffant améliore le confort.",
            ],
          },
          {
            id: "kitchen",
            title: "Rénovation de Cuisine",
            image:
              "https://media.minto.com/slideshows/1643/5_haddon_hall_2255_rue_lambert_closse_montreal_kitchen.jpg",
            content: [
              "La cuisine est le cœur de la maison et l’une des rénovations les plus rentables.",
              "Pour une cuisine standard de 150 pi², les coûts varient entre 20 000 $ et 55 000 $.",
              "Inclut démolition, plancher, armoires, comptoirs, dosseret, plomberie et électricité.",
            ],
            features: [
              "Remplacement ou resurfaçage des armoires",
              "Comptoirs en quartz ou granit",
              "Optimisation de l’aménagement",
              "Éclairage sous-armoires",
            ],
            pricing: [
              { item: "Armoires mélamine", price: "300 $ / pied linéaire" },
              { item: "Comptoir quartz", price: "80 $ / pi²" },
              { item: "Dosseret en céramique", price: "22 $ / pi²" },
              { item: "Plancher vinyle", price: "6,25 $ / pi²" },
            ],
            considerations: [
              "Investir dans un rangement intelligent.",
              "Choisir des finis intemporels.",
              "Respecter le triangle de travail.",
            ],
          },
          {
            id: "drywall",
            title: "Étapes de rénovation de gypse",
            image:
              "https://www.drywallproscleveland.com/wp-content/uploads/2021/02/Cleveland-Drywall-Pros-Drywall-Repair-2.jpg",
            content: [
              "La plupart des maisons en Amérique du Nord ont des murs finis en gypse. Ce matériau abordable offre un look moderne et épuré. Projets courants à Montréal : Plâtrage et peinture entre locataires; Remplacement après dégât d'eau; Ajout de divisions de pièces; Réparation de trous; Peinture esthétique.",
              "Quatre étapes principales : 1. Ossature (Framing). 2. Pose des panneaux. 3. Tirage de joints (plâtre). 4. Apprêt et peinture. Extra : Pose de plinthes.",
              "Note : TOUS LES PRIX INCLUENT LES MATÉRIAUX ! PRIX DE VOLUME, LES RÉPARATIONS MINEURES SONT PLUS CHÈRES !",
            ],
            features: [
              "Ossature : Montants 2x4, espacement standard 16 po",
              "Pose de gypse : Coupe sur mesure et options anti-moisissure",
              "Plâtrage : Processus professionnel de 3 couches",
              "Peinture : 1 couche d'apprêt + 2 couches de finition",
              "Plinthes : Installation avec peinture préalable",
            ],
            pricing: [
              {
                item: "Ossature / Framing (mur 8 pi)",
                price: "10,30 $ / pied linéaire",
              },
              { item: "Pose de gypse", price: "1,30 $ / pi²" },
              { item: "Gypse anti-moisissure", price: "+0,60 $ / pi²" },
              { item: "Plâtrage standard (3 couches)", price: "1,55 $ / pi²" },
              { item: "Apprêt et peinture (2 couches)", price: "1,25 $ / pi²" },
              {
                item: "Peindre plinthes et cadrages",
                price: "3 $ / pied linéaire",
              },
              { item: "Pose de plinthes", price: "6,45 $ / pied linéaire" },
            ],
            considerations: [
              "La norme au Québec est de poser les montants tous les 16 pouces.",
              "Le plâtrage prend généralement 3 couches et 3 jours.",
              "Il est recommandé de peindre les plinthes existantes pour un look rafraîchi.",
            ],
          },
          {
            id: "flooring",
            title: "rénovation de plancher",
            image:
              "https://images.squarespace-cdn.com/content/v1/6373db11a264167b4fdd326a/48c7dbf5-b7a6-41a1-8c4a-7f5fb02b9993/IMG_5651.jpg",
            content: [
              "Un nouveau plancher change l'apparence et la valeur d'une maison. Projets à Montréal : Sous-plancher, Vinyle, Bois franc, Bois d'ingénierie, Sablage.",
              "Note : TOUS LES PRIX INCLUENT LES MATÉRIAUX ET LA MAIN-D'ŒUVRE. La démolition n'est PAS incluse.",
            ],
            features: [
              "Stabilisation et nivellement de sous-plancher",
              "Vinyle : Options 100% résistantes à l'eau",
              "Bois franc : Chêne, Érable ou Noyer intemporel",
              "Ingénierie : Haute stabilité pour sous-sols/condos",
              "Sablage : Restauration avec système de captation de poussière",
            ],
            pricing: [
              {
                item: "Retrait et pose de sous-plancher",
                price: "6,33 $ / pi²",
              },
              { item: "Pose de vinyle clic standard", price: "5,00 $ / pi²" },
              { item: "Pose de bois franc standard", price: "10,12 $ / pi²" },
              {
                item: "Pose de bois d'ingénierie standard",
                price: "7,50 $ / pi²",
              },
              { item: "Sablage, teinture et vernis", price: "4,95 $ / pi²" },
            ],
            considerations: [
              "Les grincements sont presque toujours dus au mouvement du sous-plancher.",
              "Le vinyle est idéal pour les sous-sols et cuisines car il résiste à l'eau.",
              "Le sablage permet de restaurer la beauté originale du bois sans le remplacer.",
            ],
          },
          {
            id: "ceramic",
            title: "rénovations en céramique",
            image:
              "https://img.freepik.com/premium-photo/before-after-photos-grouting-ceramic-tiles-home-renovation-repair-work-concept-home-renovation-grouting-ceramic-tiles-before-after-repair-work_918839-43247.jpg?w=2000",
            content: [
              "La tuile de céramique est un matériau polyvalent qui améliore l'esthétique et la fonction des maisons montréalaises. Qu'il s'agisse de murs, de planchers ou de projets spécialisés comme des douches et des dosserets, la céramique offre durabilité et style.",
              "Pour les vieilles maisons et les sous-sols de Montréal, une attention particulière est portée à la préparation de la surface pour éviter les fissures. Nous utilisons souvent des membranes et des moulures Schluter pour assurer l'étanchéité et une finition professionnelle.",
              "Note : TOUS LES PRIX INCLUENT LES MATÉRIAUX ET LA MAIN-D'ŒUVRE. La démolition n'est PAS incluse.",
            ],
            features: [
              "Systèmes de membranes d'étanchéité Schluter",
              "Mise à niveau et disposition précise des tuiles",
              "Scellement professionnel des joints",
              "Dosserets de cuisine personnalisés",
              "Intégration de systèmes de planchers chauffants",
            ],
            pricing: [
              {
                item: "Céramique (Plancher/Mur) + Membrane + Coulis",
                price: "17,00 $ / pi²",
              },
              { item: "Installation de dosseret", price: "20,00 $ / pi²" },
              {
                item: "Céramique de douche + Membrane + Coulis",
                price: "22,00 $ / pi²",
              },
              {
                item: "Installation de plancher chauffant",
                price: "10,00 $ / pi²",
              },
            ],
            considerations: [
              "Une membrane Schluter est essentielle pour l'étanchéité des douches.",
              "Les surfaces doivent être parfaitement nivelées pour éviter le décollement.",
              "Les planchers chauffants sont très populaires pour le confort hivernal.",
            ],
          },
          {
            id: "stairs",
            title: "rénover votre escalier",
            image:
              "https://www.nsbuilt.com/wp-content/uploads/2023/04/Huxtable-Stairs-1-750x412.jpg",
            content: [
              "L'escalier est une pièce de charpenterie complexe. La structure (charpente brute) est l'étape la plus cruciale pour assurer le confort et la sécurité. À Montréal, les escaliers doivent souvent être optimisés pour des espaces restreints.",
              "Options de finition : Le bois franc pour l'élégance, le tapis pour le confort et le silence, ou le vinyle pour la durabilité. Les garde-corps et les rampes complètent le look tout en assurant la sécurité des occupants.",
            ],
            features: [
              "Charpente brute structurelle d'escalier",
              "Marches en bois franc avec teinture sur mesure",
              "Installation de tapis confortable et silencieuse",
              "Marches en vinyle résistantes à l'humidité",
              "Rampes, barreaux et poteaux de départ personnalisés",
            ],
            pricing: [
              {
                item: "Charpente brute d'escalier",
                price: "3 000 $ - 6 000 $",
              },
              { item: "Marches en bois franc", price: "150 $ / marche" },
              { item: "Tapis sur escalier", price: "40 $ / marche" },
              { item: "Marches en vinyle", price: "80 $ / marche" },
              { item: "Main courante (rampe)", price: "75 $ / pied linéaire" },
              { item: "Barreau", price: "30 $ / unité" },
              { item: "Poteau de départ", price: "200 $ / unité" },
            ],
            considerations: [
              "Les paliers et les marches en angle augmentent la complexité du projet.",
              "Le bois franc nécessite une coupe d'une précision extrême.",
              "Le tapis est une option sécuritaire pour les enfants et les aînés.",
            ],
          },
        ],
        navHome: "Accueil",
        navServices: "Services",
        navContact: "Contactes nouz",
        getQuote: "Obtenir un devis",
        servicesPageTitle: "Nos Services",
        servicesPageSubtitle:
          "Tarifs détaillés et portée de nos services de rénovation les plus populaires.",

        contactTitle: "Contactez-nous",
        contactSubtitle:
          "Prêt à commencer? Contactez-nous pour une estimation gratuite et des conseils professionnels.",
        formQuoteTitle: "Obtenir une soumission gratuite",
        labelName: "Nom complet *",
        labelEmail: "Adresse courriel *",
        labelPhone: "Numéro de téléphone (Optionnel)",
        labelDetails: "Détails du projet *",
        placeholderDetails:
          "Parlez-nous de votre projet, de votre budget cible et de votre échéancier...",
        btnSend: "Envoyer le message",
        btnSending: "Envoi en cours...",
        successMsg: "Merci! Nous vous répondrons d'ici 24 heures.",
        errorMsg: "Une erreur est survenue. Veuillez nous appeler directement.",
        reachOutTitle: "Contactez-nous directement",
        testimonialsTitle: "Ce que disent nos clients",
        galleryTitle: "Galerie de nos projets",
        testimonials: [
          {
            name: "John Peterson",
            role: "Propriétaire",
            content:
              "GN Constructions a transformé notre sous-sol en la salle de jeux de nos rêves. Professionnel, à l’heure et prix juste.",
            rating: 5,
          },
          {
            name: "Sarah Leclair",
            role: "Rénovation de cuisine",
            content:
              "L’attention portée aux détails lors de la rénovation de notre cuisine était exceptionnelle. Je recommande fortement.",
            rating: 5,
          },
          {
            name: "Marc-André",
            role: "Projet de salle de bain",
            content:
              "Rapide et efficace. Ils se sont occupés des permis et de tout le reste. Très satisfait du résultat.",
            rating: 5,
          },
        ],
      }, // Translation ends here
    }, // French ends here
  },

  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
