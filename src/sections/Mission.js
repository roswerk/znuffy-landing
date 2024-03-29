import React from "react";
import { Box, Container, Flex, Heading, Text, Image } from "theme-ui";
import image1 from "assets/features-1.svg";
import image2 from "assets/features-2.svg";

import dog from "assets/icons/dog.png";
import dogFood from "assets/icons/dog-bowl.png";
import image3 from "assets/features-3.svg";

// Translations
import { IntlProvider, FormattedMessage } from "react-intl";

const FEATURES_DATA = {
  title: "Una plataforma de adopción y comercio electrónico de mascotas",
  text: "¿Que es Znuffy?",
  posts: [
    {
      image: dog,
      title: "Adopt Street and Home Animals easily",
      EsTitle: "Adoptá Animales de la calle y huerfanos facilmente",
      text: "Everyone deserves love, we provide a safe and easy platform to find your new best friend with a few clicks.",
      EsText:
        "Todos se merecen amor, nosotros proporcionamos una plataforma segura y fácil para encontrar a tu nuevo mejor amigo con pocos clicks.",
    },
    {
      image: dogFood,
      title: "Get all you need to keep your pet happy",
      EsTitle:
        "Conseguí todo lo que necesitás para mantener a tu mascota feliz",
      text: "Taking care of an animal, is not an easy task, we change that by providing accessible and deliver-to-your-door products.",
      EsText:
        "Cuidar de un animal no es una tarea fácil, nosotros cambiamos eso proporcionando productos accesibles y con entrega a domicilio.",
    },
  ],
};
const Mission = () => {
  const { title, text, posts } = FEATURES_DATA;
  return (
    <IntlProvider messages={FEATURES_DATA} locale="es" defaultLocale="en">
      <Box as="section" id="mission" sx={styles.section}>
        <Container sx={styles.container}>
          <Box sx={styles.sectionTitle}>
            <Text as="p">
              <FormattedMessage
                id="text"
                defaultMessage="What exactly is Znuffy?"
              />
            </Text>
            <Heading as="h2">
              <FormattedMessage
                id="title"
                defaultMessage="A Pet Adoption-and-eCommerce Platform"
              />
            </Heading>
          </Box>
          <Flex sx={styles.flex}>
            {posts.map(({ image, title, EsTitle, text, EsText }, index) => (
              <Box sx={styles.post} key={`feature-post-key-${index}`}>
                <Box className="image">
                  <Image width="70" height="70" src={image} alt={title} />
                </Box>
                <Box sx={styles.postContent}>
                  <Heading as="h3">
                    <FormattedMessage id={title} defaultMessage={EsTitle} />
                  </Heading>
                  <Text as="p">
                    <FormattedMessage id={text} defaultMessage={EsText} />
                  </Text>
                </Box>
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>
    </IntlProvider>
  );
};

export default Mission;

const styles = {
  section: {
    overflow: "hidden",
  },
  container: {},
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  sectionTitle: {
    textAlign: "center",
    mb: ["40px", null, null, "70px"],
    h2: {
      color: "#0F2137",
      fontWeight: 500,
      fontSize: ["22px", null, null, "24px"],
      lineHeight: 1,
      letterSpacing: "-0.5px",
      mt: "15px",
    },
    p: {
      color: "secondary",
      fontSize: "16px",
      lineHeight: 1.87,
    },
  },
  post: {
    mb: "30px",
    mx: ["0", null, null, null, null, "15px"],
    display: "flex",
    flex: ["0 0 100%", null, null, "0 0 calc(33.333% - 30px)"],
    flexDirection: ["column", null, null, null, "row"],
    justifyContent: ["center", null, "flex-start"],
    textAlign: ["center", null, null, "left"],
    ">.image": {
      flexShrink: 0,
      width: "70px",
      height: "70px",
      mx: ["auto", null, null, "0"],
    },
  },
  postContent: {
    ml: ["0", null, null, null, "30px"],
    mt: ["20px", null, null, null, "0"],
    h3: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: 1,
      color: "#0F2137",
      mb: "15px",
    },
    p: {
      color: "#343D48",
      lineHeight: 1.87,
      fontSize: ["14px", null, null, "16px"],
      maxWidth: ["100%", "300px", null, "100%"],
      mx: [null, "auto", null],
    },
  },
};
