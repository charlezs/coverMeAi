import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { ReactNode } from "react";
import Link from "next/link";

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

export default function Footer() {
  return (
    <>
      <Box bg="#89CFF0" color="white" borderTop="1px">
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          px="0"
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Stack direction={"row"} spacing={2}>
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/intent/user?screen_name=learn_charles"}
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"Github"} href={"https://github.com/charlezs"}>
              <FaGithub />
            </SocialButton>
            <SocialButton
              label={"LinkedIn"}
              href={"https://www.linkedin.com/in/charles-nyabeze/"}
            >
              <FaLinkedin />
            </SocialButton>
          </Stack>
          <Text>made by charles1.eth</Text>
        </Container>
      </Box>
    </>
  );
}
