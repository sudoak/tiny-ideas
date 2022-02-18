import type { NextPage } from "next";
import {
  Box,
  Button,
  chakra,
  Container,
  createIcon,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import Head from "next/head";

const Logo = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="200"
      height="100"
    >
      <path
        fill="#32c77f"
        d="M27.1,47.8l-11.924,0l0,1.342l5.412,0l0,14.102l1.364,0l0-14.102l5.148,0l0-1.342z M29.93448,63.222l1.386,0l0-15.466l-1.386,0l0,15.466z M34.72696,63.2l1.364,0l0-9.328q0-1.848,1.408-3.3q1.408-1.408,3.256-1.408t3.3,1.408q1.408,1.452,1.408,3.3l0,9.328l1.364,0l0-9.328q0-2.508-1.782-4.29t-4.29-1.782q-2.464,0-4.246,1.782t-1.782,4.29l0,9.328z M61.82744,47.8l-1.364,0l0,1.628q0,2.024-1.408,3.388q-1.386,1.32-3.3,1.32q-2.046,0-3.366-1.32t-1.32-3.388l0-1.628l-1.364,0l0,1.628q0,2.464,1.496,4.18q1.474,1.738,3.74,1.892l0,7.722l1.386,0l0-7.722q2.31-0.176,3.894-1.892q1.606-1.716,1.606-4.18l0-1.628z M64.55192,57.48l6.402,0l0-1.386l-6.402,0l0,1.386z M82.5224,47.8l-6.908,0l-1.364,0l0,15.466l1.364,0l0-7.744l6.908,0q1.672,0,2.772-1.1t1.1-2.75q0-1.496-1.1-2.662q-1.166-1.21-2.772-1.21z M82.5224,54.158l-6.908,0l0-4.994l6.908,0q1.012,0,1.782,0.726q0.726,0.77,0.726,1.782q0,1.034-0.726,1.76q-0.77,0.726-1.782,0.726z M95.71888,55.478l1.65,0q1.672,0,2.772-1.1t1.1-2.772q0-1.474-1.1-2.64q-1.166-1.21-2.772-1.21l-6.886,0l-1.364,0l0,15.444l1.364,0l0-7.722l3.586,0l4.686,7.722l1.65,0z M90.48288,54.114l0-4.972l6.886,0q1.012,0,1.782,0.726q0.726,0.726,0.726,1.738q0,1.056-0.726,1.782q-0.77,0.726-1.782,0.726l-6.886,0z M110.38936,47.8q-2.486,0-4.268,1.782q-1.804,1.804-1.804,4.29l0,3.322q0,2.442,1.804,4.246t4.268,1.804q2.486,0,4.29-1.804q1.782-1.782,1.782-4.246l0-3.322q0-2.508-1.782-4.29t-4.29-1.782z M115.09736,53.872l0,3.322q0,2.002-1.408,3.366q-1.386,1.32-3.3,1.32t-3.278-1.32q-1.408-1.364-1.408-3.366l0-3.322q0-1.848,1.408-3.3q1.408-1.408,3.278-1.408q1.848,0,3.3,1.408q1.408,1.452,1.408,3.3z M129.45984,47.734l-1.408,0l0,10.23q0,1.65-1.1,2.75t-2.75,1.1t-2.75-1.1q-1.122-1.078-1.122-2.75l0-2.486l-1.364,0l0,2.486q0,2.222,1.584,3.74q1.562,1.496,3.652,1.496q2.288,0,3.784-1.496q1.474-1.474,1.474-3.74l0-10.23z M134.12032,58.976q0-1.056,0.748-1.914q0.748-0.902,1.804-0.902l0.286,0l4.114,0l0-1.364l-4.114,0l-0.286,0q-1.122-0.22-1.837-0.968t-0.715-1.782q0-1.298,0.759-2.057t2.079-0.759l7.48,0l0-1.386l-7.48,0q-1.694,0-2.948,1.254q-1.254,1.21-1.254,2.948q0,1.1,0.418,2.002t1.232,1.298q-0.814,0.594-1.232,1.562t-0.418,2.068q0,1.716,1.254,2.926q1.276,1.276,2.948,1.276l7.48,0l0-1.452l-7.48,0q-1.32,0-2.079-0.748t-0.759-2.002z M158.6688,63.2l0-1.386l-3.916,0q-2.728,0-4.576-1.848t-1.848-4.576q0-2.508,1.848-4.312t4.576-1.804l3.916,0l0-1.43l-3.916,0q-3.322,0-5.566,2.2q-2.244,2.178-2.244,5.346q0,3.366,2.244,5.566q2.2,2.244,5.566,2.244l3.916,0z M172.85528,47.8l-11.924,0l0,1.342l5.412,0l0,14.102l1.364,0l0-14.102l5.148,0l0-1.342z M179.14376,49.406l8.294,0l0-1.672l-8.294,0q-1.628,0-2.728,1.276q-1.122,1.298-1.122,3.146q0,1.672,1.122,2.904q1.1,1.254,2.728,1.254l2.2,0l2.244,0q0.99,0,1.76,0.836q0.726,0.88,0.726,1.914q0,1.232-0.715,2.002t-1.771,0.77l-8.294,0l0,1.364l8.294,0q1.65,0,2.75-1.144t1.1-2.992q0-1.672-1.1-2.904q-1.122-1.232-2.75-1.232l-2.244,0l-2.2,0q-1.012,0-1.738-0.88q-0.748-0.814-0.748-1.892q0-1.232,0.715-1.991t1.771-0.759z"
      />
      <path fill="#" d="" />
    </svg>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
const Arrow = createIcon({
  displayName: "Arrow",
  viewBox: "0 0 72 24",
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          spacing={4}
          justify={"center"}
          align={"center"}
        >
          <Logo />
          <Stack direction={"row"} spacing={6}>
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact</Link>
          </Stack>
        </Container>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container maxW={"3xl"}>
            <Stack
              as={Box}
              textAlign={"center"}
              spacing={{ base: 8, md: 14 }}
              py={{ base: 20, md: 36 }}
            >
              <Heading
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
              >
                Make money from <br />
                <Text as={"span"} color={"green.400"}>
                  your audience
                </Text>
              </Heading>
              <Text color={"gray.500"}>
                Monetize your content by charging your most loyal readers and
                reward them loyalty points. Give back to your loyal readers by
                granting them access to your pre-releases and sneak-peaks.
              </Text>
              <Stack
                direction={"column"}
                spacing={3}
                align={"center"}
                alignSelf={"center"}
                position={"relative"}
              >
                <Button
                  colorScheme={"green"}
                  bg={"green.400"}
                  rounded={"full"}
                  px={6}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Get Started
                </Button>
                <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
                  Learn more
                </Button>
                <Box>
                  <Icon
                    as={Arrow}
                    color={useColorModeValue("gray.800", "gray.300")}
                    w={71}
                    position={"absolute"}
                    right={-71}
                    top={"10px"}
                  />
                  <Text
                    fontSize={"lg"}
                    fontFamily={"Caveat"}
                    position={"absolute"}
                    right={"-125px"}
                    top={"-15px"}
                    transform={"rotate(10deg)"}
                  >
                    Starting at $15/mo
                  </Text>
                </Box>
              </Stack>
            </Stack>
          </Container>
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Text>© 2022 Tiny Projects. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;
