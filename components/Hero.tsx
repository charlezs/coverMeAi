import {
  Button,
  Container,
  Stack,
  Text,
  Box,
  Image,
  HStack,
  Link,
} from "@chakra-ui/react";
import { useRef } from "react";
import NextLink from "next/link";

export default function Hero() {
  const scrollToRef = useRef<HTMLDivElement>(null);

  function handleClick() {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <Container maxW="100%" backgroundColor="#89CFF0" h="85vh">
        <Stack
          direction={{ base: "column", sm: "column", md: "row" }}
          py="70px"
        >
          <Stack direction="column" m="0" w="90%">
            <Text mt="0" textColor="white" fontSize="60px">
              Cover Letters take way
              <br /> too long.
            </Text>
            <Text fontSize="20px" textColor="white" pb="20px">
              Welcome to CoverMe, your AI friend that helps you write your
              <br />
              cover letters quicker!
            </Text>
            <Box>
              <Link as={NextLink} href="/coverme">
                <Button
                  bg="transparent"
                  color="white"
                  size="lg"
                  w="80%"
                  borderRadius="30"
                  border="2px"
                  fontWeight={400}
                  _hover={{
                    background: "white",
                    color: "blue.100",
                  }}
                >
                  <Text> CoverMe</Text>
                </Button>
              </Link>
            </Box>
          </Stack>

          <Box w="100%" h="100%">
            <Image
              borderRadius="30"
              color="white"
              border="2px"
              src="./tesstimg.jpg"
              alt="test"
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
}
